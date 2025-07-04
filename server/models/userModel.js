import { prisma } from '../prisma/client.js';

export function createUser(data) {
  return prisma.user.create({ data });
}

export function findByIdentifier(identifier) {
  return prisma.user.findFirst({
    where: {
      OR: [
        { username: identifier },
        { email: identifier },
        { phone: identifier }
      ]
    }
  });
}

export function findById(id) {
  return prisma.user.findUnique({ where: { id } });
}
