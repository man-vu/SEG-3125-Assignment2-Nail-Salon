import { createBooking, getBookingsForUser, findAvailable, bookSlot } from '../models/bookingModel.js';
import { designerCanPerformService } from '../models/designerModel.js';

export function listBookings(userId) {
  return getBookingsForUser(userId);
}

export async function addBooking(data) {
  const allowed = await designerCanPerformService(data.designerId, data.serviceId);
  if (!allowed) throw new Error('DESIGNER_SERVICE_MISMATCH');
  const slot = await findAvailable(data.designerId, data.startTime, data.endTime);
  if (!slot) throw new Error('SLOT_UNAVAILABLE');
  const booking = await createBooking({
    ...data,
    slotId: slot.id
  });
  await bookSlot(slot.id);
  return booking;
}
