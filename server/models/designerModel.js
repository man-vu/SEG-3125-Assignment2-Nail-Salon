import { prisma } from '../prisma/client.js';

export function getAllDesigners() {
  return prisma.designers.findMany();
}

export function getServicesForDesigner(designerId) {
  return prisma.designerServices.findMany({
    where: { designerId },
    include: { Services: true }
  });
}

export function getAvailableAppointmentsForDesigner(designerId) {
  return prisma.availableAppointments.findMany({
    where: { designerId, booked: false }
  });
}

export async function designerCanPerformService(designerId, serviceId) {
  const count = await prisma.designerServices.count({ where: { designerId, serviceId } });
  return count > 0;
}
