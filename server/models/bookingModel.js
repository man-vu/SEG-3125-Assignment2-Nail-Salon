import { prisma } from '../prisma/client.js';

export function getBookingsForUser(userId) {
  return prisma.booking.findMany({
    where: { userId },
    include: { service: true, designer: true }
  });
}

export function createBooking(data) {
  return prisma.booking.create({ data });
}
