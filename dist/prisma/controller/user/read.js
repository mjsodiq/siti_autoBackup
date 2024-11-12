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
exports.read = exports.read_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const zod_1 = require("zod");
const index_schema_1 = require("./index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
exports.read_INPUT_SCHEMA = zod_1.z.object({
    sender_id: index_schema_1.db_SCHEMA.shape.user_id,
});
const read = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender_id }) {
    // VALIDATE INPUT
    const validate_input = exports.read_INPUT_SCHEMA.safeParse({
        sender_id,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    // READ USER LIST
    try {
        // DEFINE SENDER
        const sender = yield client_1.db.user.findFirst({ where: { id: sender_id } });
        const sender_authority_level = sender === null || sender === void 0 ? void 0 : sender.authority_level;
        const sender_division = sender === null || sender === void 0 ? void 0 : sender.division;
        if (!sender || !sender_authority_level || !sender_division)
            return index_1.default.db_response.error_unauthorized([]);
        const data = yield client_1.db.user.findMany({
            where: {
                division: sender_division,
                authority_level: {
                    lt: sender_authority_level,
                },
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read = read;
