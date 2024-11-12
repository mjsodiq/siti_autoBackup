import { db } from "@/prisma/client";
import dotenv from "dotenv";

dotenv.config();

// BACKUP LAPTOP
const backupLaptop = async () => {
	const data = await db.user.findMany();
	console.log(data);
};

// BACKUP PC
const backupPC = async () => {};

export async function runBackupExcel() {
	await backupLaptop();
	await backupPC();
}
