"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runBackupDb = void 0;
const parseDate_to_2DigitString_1 = require("@utils/Date/parseDate_to_2DigitString");
const dotenv_1 = __importDefault(require("dotenv"));
const child_process_1 = require("child_process");
dotenv_1.default.config();
const takePGBackup = (username, password, dbHost, dbPort, backupFile, database) => __awaiter(void 0, void 0, void 0, function* () {
    (0, child_process_1.exec)(`pg_dump --dbname="postgresql://${username}:${password}@${dbHost}:${dbPort}/${database}" --file="${backupFile}" --format="t"`);
});
const runBackupDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const date = (0, parseDate_to_2DigitString_1.parseDate_to_2DigitString)(new Date());
        const today = `${date.year}${date.month}${date.date}${date.hour}${date.minute}${date.second}`;
        // BACKUP DATABASE LAPTOP
        const laptop_backupFile = `${process.env.LAPTOP_BACKUP_DB_DESTINATION}/${today}.tar`;
        const laptop_username = process.env.LAPTOP_DB_USER;
        const laptop_database = process.env.LAPTOP_DATABASE;
        const laptop_dbHost = process.env.LAPTOP_DB_HOST;
        const laptop_dbPort = process.env.LAPTOP_DB_PORT;
        const laptop_password = process.env.LAPTOP_DB_PASSWORD;
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
    }
    catch (error) {
        console.log(error);
    }
});
exports.runBackupDb = runBackupDb;