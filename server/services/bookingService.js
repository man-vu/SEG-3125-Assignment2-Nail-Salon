import { createBooking, getBookingsForUser } from '../models/bookingModel.js';

export function listBookings(userId) {
  return getBookingsForUser(userId);
}

export function addBooking(data) {
  return createBooking(data);
}
