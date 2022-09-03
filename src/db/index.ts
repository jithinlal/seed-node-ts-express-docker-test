import { PrismaClient } from '@prisma/client';

export let prisma: PrismaClient;

export function initializeDatabase() {
	prisma = new PrismaClient();
}
