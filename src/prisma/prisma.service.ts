import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function initializeDatabase() {
  const existingDayMenu = await prisma.menus.findFirst({ where: { shift: 'day' } });
  const existingNightMenu = await prisma.menus.findFirst({ where: { shift: 'night' } });

  if (!existingDayMenu) {
    await prisma.menus.create({
      data: {
        name: 'Day Menu',
        shift: 'day',
      },
    });
  }

  if (!existingNightMenu) {
    await prisma.menus.create({
      data: {
        name: 'Night Menu',
        shift: 'night',
      },
    });
  }
}

export { prisma, initializeDatabase };
