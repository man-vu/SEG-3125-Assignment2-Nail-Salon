import { prisma } from '../prisma/client.js';

export function getAllServices() {
  return prisma.service.findMany({ include: { category: true } });
}
