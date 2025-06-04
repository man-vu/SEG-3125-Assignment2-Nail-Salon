import { prisma } from '../prisma/client.js';

export function getAllServiceCategories() {
  return prisma.serviceCategory.findMany({ include: { services: true } });
}
