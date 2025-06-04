import { prisma } from '../prisma/client.js';

export function getAllDesigners() {
  return prisma.designer.findMany();
}
