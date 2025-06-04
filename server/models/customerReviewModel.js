import { prisma } from '../prisma/client.js';

export function getAllCustomerReviews() {
  return prisma.customerReview.findMany();
}
