import test from 'node:test';
import assert from 'node:assert/strict';
import { validateInquiryForm, InquiryFormInput } from './inquiry-validation';

const validPayload: InquiryFormInput = {
  guestName: 'Claire Henderson',
  email: 'claire.henderson@cayman.example',
  phone: '+1 (345) 555-0194',
  preferredDate: '2026-12-12',
  service: 'Dinner',
  partySize: '4',
  notes: 'Window table if possible; one vegetarian guest.',
};

test('validateInquiryForm accepts a complete valid inquiry', () => {
  const result = validateInquiryForm(validPayload);
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validateInquiryForm rejects empty required fields without silent fallback', () => {
  const result = validateInquiryForm({
    guestName: '   ',
    email: '',
    phone: '',
    preferredDate: '',
    service: 'Dinner',
    partySize: '',
    notes: '',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.guestName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.preferredDate);
  assert.ok(result.errors.partySize);
  assert.equal(result.errors.phone, undefined);
});

test('validateInquiryForm validates email format, optional phone, and party size bounds', () => {
  const bad = validateInquiryForm({
    ...validPayload,
    email: 'not-an-email',
    phone: 'abc',
    partySize: '30',
  });
  assert.equal(bad.isValid, false);
  assert.ok(bad.errors.email);
  assert.ok(bad.errors.phone);
  assert.ok(bad.errors.partySize);
});
