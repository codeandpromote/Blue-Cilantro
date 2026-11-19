'use client';

import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '@/lib/menu-data';
import {
  validateInquiryForm,
  type InquiryField,
  type InquiryFormInput,
} from '@/lib/inquiry-validation';

const INITIAL_FORM: InquiryFormInput = {
  guestName: '',
  email: '',
  phone: '',
  preferredDate: '',
  service: 'Dinner',
  partySize: '2',
  notes: '',
};

export default function VisitSection() {
  const [formData, setFormData] = useState<InquiryFormInput>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<InquiryField, string>>>({});
  const [submittedRecord, setSubmittedRecord] = useState<InquiryFormInput | null>(null);

  const updateField = <K extends InquiryField>(field: K, value: InquiryFormInput[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmittedRecord({ ...formData });
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setFormData(INITIAL_FORM);
    setErrors({});
  };

  return (
    <section
      id="visit"
      aria-labelledby="visit-heading"
      className="w-full bg-[#FAF9F7] py-20 sm:py-28 border-t border-[#E4E1DA] scroll-mt-24"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Verified Location, Hours & Direct Reservations */}
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#1E3A8A] mb-3">
              Visit &amp; Reservations
            </p>
            <h2
              id="visit-heading"
              className="font-serif text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.1] tracking-[-0.015em] font-medium text-[#14181E] [text-wrap:balance]"
            >
              Seven Mile Beach Dining Room
            </h2>
            <p className="mt-4 text-[15.5px] leading-[1.7] text-[#4A525D]">
              Reserve immediately through OpenTable, telephone the host desk directly, or send an
              inquiry for tasting menus and private celebrations.
            </p>

            {/* Primary External Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={RESTAURANT_INFO.openTableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#14181E] hover:bg-[#1E3A8A] transition-colors duration-150 whitespace-nowrap min-h-[44px]"
              >
                <span>Reserve on OpenTable</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#14181E] border-b border-[#14181E]/40 pb-1 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors whitespace-nowrap min-h-[44px]"
              >
                <span>Directions on Google Maps</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Structured Directory Details */}
            <dl className="mt-10 divide-y divide-[#E4E1DA] border-t border-b border-[#E4E1DA]">
              <div className="py-5">
                <dt className="text-xs font-medium text-[#596270]">Location</dt>
                <dd className="mt-1.5 text-sm text-[#14181E] leading-relaxed">
                  {RESTAURANT_INFO.streetAddress}
                  <br />
                  {RESTAURANT_INFO.corridor}
                  <br />
                  {RESTAURANT_INFO.cityCountry}
                </dd>
              </div>

              <div className="py-5">
                <dt className="text-xs font-medium text-[#596270]">Hours of Service</dt>
                <dd className="mt-2 space-y-2">
                  {RESTAURANT_INFO.hours.map((entry) => (
                    <div
                      key={entry.label}
                      className="flex items-baseline justify-between gap-4 text-sm"
                    >
                      <span className="font-medium text-[#14181E]">
                        {entry.label}{' '}
                        <span className="font-normal text-[#596270]">· {entry.schedule}</span>
                      </span>
                      <span className="text-[#14181E] tabular-nums whitespace-nowrap">
                        {entry.time}
                      </span>
                    </div>
                  ))}
                </dd>
              </div>

              <div className="py-5">
                <dt className="text-xs font-medium text-[#596270]">Direct Contact</dt>
                <dd className="mt-1.5 flex flex-col gap-1 text-sm">
                  <a
                    href={RESTAURANT_INFO.phoneHref}
                    className="text-[#14181E] hover:text-[#1E3A8A] transition-colors w-fit tabular-nums"
                  >
                    {RESTAURANT_INFO.phoneDisplay}
                  </a>
                  <a
                    href={`mailto:${RESTAURANT_INFO.email}`}
                    className="text-[#4A525D] hover:text-[#1E3A8A] transition-colors w-fit"
                  >
                    {RESTAURANT_INFO.email}
                  </a>
                </dd>
              </div>

              <div className="py-5">
                <dt className="text-xs font-medium text-[#596270]">Accessibility</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-[#4A525D]">
                  {RESTAURANT_INFO.accessibilityNote}
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Validated Private Dining & Table Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-[#E4E1DA] p-6 sm:p-10">
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#14181E]">
              Table &amp; Private Dining Inquiry
            </h3>
            <p className="mt-2 text-sm text-[#4A525D] leading-relaxed">
              Share your preferred evening, tasting menu interest, or dietary requirements. Note
              that this demonstration form validates your request locally without sending an
              external booking.
            </p>

            {submittedRecord ? (
              <div
                role="status"
                aria-live="polite"
                className="mt-8 p-6 sm:p-8 bg-[#FAF9F7] border border-[#E4E1DA]"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <h4 className="font-serif text-2xl font-medium text-[#14181E]">
                      Inquiry Preview Recorded
                    </h4>
                    <p className="mt-2 text-sm text-[#4A525D] leading-relaxed">
                      Thank you, {submittedRecord.guestName}. Your demonstration inquiry for{' '}
                      <span className="font-medium text-[#14181E]">
                        {submittedRecord.partySize}{' '}
                        {Number(submittedRecord.partySize) === 1 ? 'guest' : 'guests'}
                      </span>{' '}
                      for{' '}
                      <span className="font-medium text-[#14181E]">
                        {submittedRecord.service}
                      </span>{' '}
                      on{' '}
                      <span className="font-medium text-[#14181E] tabular-nums">
                        {submittedRecord.preferredDate}
                      </span>{' '}
                      has been validated. To confirm a live reservation at Blue Cilantro, please
                      book on OpenTable or call {RESTAURANT_INFO.phoneDisplay}.
                    </p>
                    <dl className="mt-5 pt-4 border-t border-[#E4E1DA] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#4A525D]">
                      <div>
                        <dt className="text-[#596270]">Contact Email</dt>
                        <dd className="mt-0.5 font-medium text-[#14181E]">
                          {submittedRecord.email}
                        </dd>
                      </div>
                      {submittedRecord.notes.trim() && (
                        <div>
                          <dt className="text-[#596270]">Notes</dt>
                          <dd className="mt-0.5 text-[#14181E]">{submittedRecord.notes}</dd>
                        </div>
                      )}
                    </dl>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-6 inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-[#14181E] border border-[#14181E]/30 hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors min-h-[44px]"
                    >
                      Send another inquiry
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-medium text-[#14181E] mb-2"
                    >
                      Full Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-name"
                      name="guestName"
                      type="text"
                      autoComplete="name"
                      required
                      value={formData.guestName}
                      onChange={(e) => updateField('guestName', e.target.value)}
                      aria-invalid={Boolean(errors.guestName)}
                      aria-describedby={errors.guestName ? 'inquiry-name-error' : undefined}
                      placeholder="Claire Henderson"
                      className="w-full h-11 px-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] placeholder:text-[#767E8A] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors"
                    />
                    {errors.guestName && (
                      <p
                        id="inquiry-name-error"
                        role="alert"
                        className="mt-1.5 text-xs text-[#991B1B]"
                      >
                        {errors.guestName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-email"
                      className="block text-xs font-medium text-[#14181E] mb-2"
                    >
                      Email Address <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'inquiry-email-error' : undefined}
                      placeholder="guest@example.com"
                      className="w-full h-11 px-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] placeholder:text-[#767E8A] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors"
                    />
                    {errors.email && (
                      <p
                        id="inquiry-email-error"
                        role="alert"
                        className="mt-1.5 text-xs text-[#991B1B]"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label
                      htmlFor="inquiry-date"
                      className="block text-xs font-medium text-[#14181E] mb-2"
                    >
                      Preferred Date <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-date"
                      name="preferredDate"
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => updateField('preferredDate', e.target.value)}
                      aria-invalid={Boolean(errors.preferredDate)}
                      aria-describedby={errors.preferredDate ? 'inquiry-date-error' : undefined}
                      className="w-full h-11 px-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors tabular-nums"
                    />
                    {errors.preferredDate && (
                      <p
                        id="inquiry-date-error"
                        role="alert"
                        className="mt-1.5 text-xs text-[#991B1B]"
                      >
                        {errors.preferredDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-service"
                      className="block text-xs font-medium text-[#14181E] mb-2"
                    >
                      Service
                    </label>
                    <select
                      id="inquiry-service"
                      name="service"
                      value={formData.service}
                      onChange={(e) =>
                        updateField(
                          'service',
                          e.target.value as InquiryFormInput['service']
                        )
                      }
                      className="w-full h-11 px-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Dinner">Dinner</option>
                      <option value="Lunch">Lunch</option>
                      <option value="Sunday Brunch">Sunday Brunch</option>
                      <option value="Private Dining">Private Dining</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-guests"
                      className="block text-xs font-medium text-[#14181E] mb-2"
                    >
                      Guests (1–24) <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="inquiry-guests"
                      name="partySize"
                      type="number"
                      min={1}
                      max={24}
                      required
                      value={formData.partySize}
                      onChange={(e) => updateField('partySize', e.target.value)}
                      aria-invalid={Boolean(errors.partySize)}
                      aria-describedby={errors.partySize ? 'inquiry-guests-error' : undefined}
                      className="w-full h-11 px-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors tabular-nums"
                    />
                    {errors.partySize && (
                      <p
                        id="inquiry-guests-error"
                        role="alert"
                        className="mt-1.5 text-xs text-[#991B1B]"
                      >
                        {errors.partySize}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-phone"
                    className="block text-xs font-medium text-[#14181E] mb-2"
                  >
                    Telephone (Optional)
                  </label>
                  <input
                    id="inquiry-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'inquiry-phone-error' : undefined}
                    placeholder="+1 (345) 555-0194"
                    className="w-full h-11 px-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] placeholder:text-[#767E8A] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors"
                  />
                  {errors.phone && (
                    <p
                      id="inquiry-phone-error"
                      role="alert"
                      className="mt-1.5 text-xs text-[#991B1B]"
                    >
                      {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-notes"
                    className="block text-xs font-medium text-[#14181E] mb-2"
                  >
                    Dietary Requirements or Occasion Notes
                  </label>
                  <textarea
                    id="inquiry-notes"
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => updateField('notes', e.target.value)}
                    placeholder="Chef’s tasting menu interest, allergies, wheelchair seating, or celebration details"
                    className="w-full p-3.5 text-sm bg-[#FAF9F7] border border-[#DCD8CF] text-[#14181E] placeholder:text-[#767E8A] focus:border-[#1E3A8A] focus:bg-white focus:outline-none transition-colors resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-[#14181E] hover:bg-[#1E3A8A] transition-colors duration-150 whitespace-nowrap min-h-[44px]"
                  >
                    Submit Dining Inquiry
                  </button>
                  <p className="text-xs text-[#596270]">
                    Fields marked with * are required.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
