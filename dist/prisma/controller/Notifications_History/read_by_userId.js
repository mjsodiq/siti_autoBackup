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
exports.read_by_userId = exports.read_by_userId_INPUT_SCHEMA = void 0;
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
exports.read_by_userId_INPUT_SCHEMA = zod_1.z.object({
    userId: index_schema_1.db_SCHEMA.shape.user_id,
});
const read_by_userId = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId }) {
    const validate_input = yield exports.read_by_userId_INPUT_SCHEMA.safeParseAsync({
        userId,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        const userData = yield client_1.db.user.findFirst({
            where: {
                user_id: validate_input.data.userId,
            },
        });
        if (!userData) {
            return index_1.default.db_response.error_unauthorized([]);
        }
        else {
            const lastNotificationsRead = userData.lastNotificationIDRead || 0;
            const data = yield client_1.db.notifications_History.findMany({
                where: {
                    OR: [{ target: "all" }, { target: validate_input.data.userId }],
                },
                take: 100,
                orderBy: {
                    id: "desc",
                },
            });
            const data_to_return = data.map((item) => {
                if (item.id > lastNotificationsRead) {
                    return Object.assign(Object.assign({}, item), { alreadyRead: false });
                }
                else {
                    return Object.assign(Object.assign({}, item), { alreadyRead: true });
                }
            });
            return index_1.default.db_response.success(data_to_return);
        }
    }
    catch (error) {
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_by_userId = read_by_userId;
