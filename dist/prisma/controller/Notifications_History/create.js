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
exports.create = exports.create_INPUT_SCHEMA = void 0;
const zod_1 = require("zod");
const index_schema_1 = require("./index_schema");
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
exports.create_INPUT_SCHEMA = zod_1.z.object({
    type: index_schema_1.db_SCHEMA.shape.type.optional(),
    sender: index_schema_1.db_SCHEMA.shape.sender.optional(),
    target: index_schema_1.db_SCHEMA.shape.target.optional(),
    title: index_schema_1.db_SCHEMA.shape.title.optional(),
    message: index_schema_1.db_SCHEMA.shape.message.optional(),
    createdAt: index_schema_1.db_SCHEMA.shape.createdAt.optional(),
    createdBy: index_schema_1.db_SCHEMA.shape.createdBy.optional(),
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ type, sender, target, title, message, createdAt, createdBy }) {
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
        type,
        sender,
        target,
        title,
        message,
        createdAt,
        createdBy,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const currentDate = new Date();
        const data = yield client_1.db.notifications_History.create({
            data: {
                type: validate_input.data.type,
                sender: validate_input.data.sender,
                target: validate_input.data.target,
                title: validate_input.data.title,
                message: validate_input.data.message,
                createdAt: currentDate,
                createdBy: validate_input.data.createdBy,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.create = create;
