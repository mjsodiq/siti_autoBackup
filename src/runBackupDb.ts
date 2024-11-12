import { parseDate_to_2DigitString } from "@utils/Date/parseDate_to_2DigitString";
import dotenv from "dotenv";
import { exec } from "child_process";

dotenv.config();

const takePGBackup = async (username: string, password: string, dbHost: string, dbPort: string, backupFile: string, database: string) => {
	exec(`pg_dump --dbname="postgresql://${username}:${password}@${dbHost}:${dbPort}/${database}" --file="${backupFile}" --format="t"`);
};

export const runBackupDb = async () => {
	try {
		const date = parseDate_to_2DigitString(new Date());
		const today = `${date.year}${date.month}${date.date}${date.hour}${date.minute}${date.second}`;

		// BACKUP DATABASE LAPTOP
		const laptop_backupFile = `${process.env.LAPTOP_BACKUP_DB_DESTINATION}/${today}.tar`;
		const laptop_username = process.env.LAPTOP_DB_USER!;
		const laptop_database = process.env.LAPTOP_DATABASE!;
		const laptop_dbHost = process.env.LAPTOP_DB_HOST!;
		const laptop_dbPort = process.env.LAPTOP_DB_PORT!;
		const laptop_password = process.env.LAPTOP_DB_PASSWORD!;
		takePGBackup(laptop_username, laptop_password, laptop_dbHost, laptop_dbPort, laptop_backupFile, laptop_database);

		// BACKUP DATABASE PC
		// const pc_backupFile = `${process.env.PC_BACKUP_DB_DESTINATION}/${today}.tar`;
		// const pc_username = process.env.PC_DB_USER!;
		// const pc_database = process.env.PC_DATABASE!;
		// const pc_dbHost = process.env.PC_DB_HOST!;
		// const pc_dbPort = process.env.PC_DB_PORT!;
		// const pc_password = process.env.PC_DB_PASSWORD!;
		// takePGBackup(pc_username, pc_password, pc_dbHost, pc_dbPort, pc_backupFile, pc_database);

		console.log(`Database already backup at ${new Date()}`);
	} catch (error) {
		console.log(error);
	}
};
