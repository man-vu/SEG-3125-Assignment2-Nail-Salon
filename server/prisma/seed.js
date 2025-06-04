import { PrismaClient } from '@prisma/client';
import { designers } from '../src/data/designers.js';
import { categoryServices } from '../src/data/pricing.js';

const prisma = new PrismaClient();

async function main() {
  for (const d of designers) {
    await prisma.designer.upsert({
      where: { name: d.name },
      update: {},
      create: {
        name: d.name,
        title: d.title,
        avatar: d.avatar,
        bio: d.bio,
      },
    });
  }

  for (const cat of categoryServices) {
    const category = await prisma.serviceCategory.upsert({
      where: { name: cat.title },
      update: {},
      create: { name: cat.title },
    });
    if (cat.services) {
      for (const svc of cat.services) {
        await prisma.service.upsert({
          where: { name: svc.title },
          update: {},
          create: {
            name: svc.title,
            description: svc.description,
            price: svc.cost,
            duration: svc.estimatedTimeMinutesRange[1],
            image: svc.image,
            categoryId: category.id,
          },
        });
      }
    }
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
