/**
 * Booking System Type Definitions
 * Centralized types for the booking pipeline
 */

export interface BookingRequest {
  // Service details
  service: string;
  date: string;
  time: string;
  price: string;
  staffMember?: string;

  // Client details
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;

  // Service address
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;

  // Additional info
  message?: string;
}

export interface BookingResponse {
  success: boolean;
  message: string;
  bookingId: string;
}

export interface BookingError {
  error: string;
  status?: number;
}

export interface EmailNotification {
  to: string;
  subject: string;
  html: string;
  from?: string;
}

export interface BookingCalendarState {
  selectedDate?: Date;
  selectedTime: string | null;
  selectedStaff: string;
  isStaffDropdownOpen: boolean;
  showAllSlots: boolean;
}

export interface BookingFormState {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  streetAddress: string;
  city: string;
  province: string;
  postalCode: string;
  message: string;
}

export const CANADIAN_PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
] as const;

export const STAFF_MEMBERS = [
  "Any staff member",
  "Afnan Aleem",
  "Momna afnan",
] as const;

export const TIME_SLOTS = [
  "9:00 a.m.",
  "9:30 a.m.",
  "10:00 a.m.",
  "10:30 a.m.",
  "11:00 a.m.",
  "11:30 a.m.",
  "12:00 p.m.",
  "12:30 p.m.",
  "1:00 p.m.",
  "1:30 p.m.",
  "2:00 p.m.",
  "2:30 p.m.",
  "3:00 p.m.",
  "3:30 p.m.",
] as const;

export type Province = (typeof CANADIAN_PROVINCES)[number];
export type StaffMember = (typeof STAFF_MEMBERS)[number];
export type TimeSlot = (typeof TIME_SLOTS)[number];
