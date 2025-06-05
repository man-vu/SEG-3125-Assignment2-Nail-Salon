import { createBooking, getBookingsForUser, findAvailable, bookSlot } from '../models/bookingModel.js';
import { designerCanPerformService, resolveDesignerId } from '../models/designerModel.js';

export function listBookings(userId) {
  return getBookingsForUser(userId);
}

export async function addBooking(data) {
  const designerId = await resolveDesignerId(data.designerId);
  if (!designerId) throw new Error('DESIGNER_NOT_FOUND');
  const allowed = await designerCanPerformService(designerId, data.serviceId);
  if (!allowed) throw new Error('DESIGNER_SERVICE_MISMATCH');
  const slot = await findAvailable(designerId, data.startTime, data.endTime);
  if (!slot) throw new Error('SLOT_UNAVAILABLE');
  const booking = await createBooking({
    ...data,
    designerId,
    slotId: slot.id
  });
  await bookSlot(slot.id);
  return booking;
}
