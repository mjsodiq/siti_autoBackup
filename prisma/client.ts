import { Prisma, PrismaClient, User } from "@prisma/client";

declare global {
	var prisma: PrismaClient | undefined;
}

export const db =
	globalThis.prisma ||
	new PrismaClient({
		omit: {
			user: {
				password: true,
			},
		},
	});

if (process.env.NODE_ENV !== "production") globalThis.prisma = db as PrismaClient;
