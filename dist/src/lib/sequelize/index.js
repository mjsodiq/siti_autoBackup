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
exports.db_laptop_authenticate = exports.sequelize_laptop = void 0;
const core_1 = require("@sequelize/core");
const postgres_1 = require("@sequelize/postgres");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.sequelize_laptop = new core_1.Sequelize({
    dialect: postgres_1.PostgresDialect,
    database: process.env.LAPTOP_DATABASE,
    user: process.env.LAPTOP_DB_USER,
    password: process.env.LAPTOP_DB_PASSWORD,
    host: process.env.LAPTOP_DB_HOST,
    port: Number(process.env.LAPTOP_DB_PORT),
    ssl: false,
    clientMinMessages: "notice",
});
const db_laptop_authenticate = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield exports.sequelize_laptop.authenticate();
        console.log("Connection DATABASE LAPTOP has been established successfully.");
    }
    catch (error) {
        console.error("Unable to connect to the DATABASE LAPTOP:", error);
    }
});
exports.db_laptop_authenticate = db_laptop_authenticate;
