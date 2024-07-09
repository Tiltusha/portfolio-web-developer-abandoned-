import { PrismaClient } from '@prisma/client'

const prismaClientSingleton = () => {
    new PrismaClient();
}

export const prisma = globalThis.prisma || prismaClientSingleton;

declare global {
    var prisma: undefined | PrismaClient;
}

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = prisma;
}