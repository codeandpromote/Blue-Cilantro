export interface InquiryFormInput {
  guestName: string;
  email: string;
  phone: string;
  preferredDate: string;
  service: 'Dinner' | 'Lunch' | 'Sunday Brunch' | 'Private Dining';
  partySize: string;
  notes: string;
}

export type InquiryField = keyof InquiryFormInput;

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<InquiryField, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d()\s.-]{7,22}$/;

export function validateInquiryForm(input: InquiryFormInput): ValidationResult {
  const errors: Partial<Record<InquiryField, string>> = {};

  const trimmedName = input.guestName.trim();
  if (trimmedName.length === 0) {
    errors.guestName = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.guestName = 'Name must be at least 2 characters.';
  }

  const trimmedEmail = input.email.trim();
  if (trimmedEmail.length === 0) {
    errors.email = 'Please enter your email address.';
  } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = 'Please provide a valid email address (for example, guest@example.com).';
  }

  const trimmedPhone = input.phone.trim();
  if (trimmedPhone.length > 0 && !PHONE_PATTERN.test(trimmedPhone)) {
    errors.phone = 'Please enter a valid telephone number or leave this field blank.';
  }

  if (input.preferredDate.trim().length === 0) {
    errors.preferredDate = 'Please select a preferred date.';
  }

  const guests = Number(input.partySize);
  if (!Number.isInteger(guests) || guests < 1 || guests > 24) {
    errors.partySize = 'Party size must be a whole number between 1 and 24 guests.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
