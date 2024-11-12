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
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.create_INPUT_SCHEMA = zod_1.z.object({
    sender_id: index_schema_1.db_SCHEMA.shape.user_id,
    newUser_id: index_schema_1.db_SCHEMA.shape.user_id,
    newUser_user_id: index_schema_1.db_SCHEMA.shape.user_id,
    newUser_username: index_schema_1.db_SCHEMA.shape.username,
    newUser_password: index_schema_1.db_SCHEMA.shape.password,
    newUser_name: index_schema_1.db_SCHEMA.shape.name,
    newUser_email: index_schema_1.db_SCHEMA.shape.email,
    newUser_division: index_schema_1.db_SCHEMA.shape.division,
    newUser_section: index_schema_1.db_SCHEMA.shape.section,
    newUser_position: index_schema_1.db_SCHEMA.shape.position,
    newUser_contact: index_schema_1.db_SCHEMA.shape.contact,
    newUser_report_to: index_schema_1.db_SCHEMA.shape.report_to,
    newUser_notes: index_schema_1.db_SCHEMA.shape.notes,
    newUser_authority_level: index_schema_1.db_SCHEMA.shape.authority_level,
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender_id, newUser_id, newUser_user_id, newUser_username, newUser_password, newUser_name, newUser_email, newUser_division, newUser_section, newUser_position, newUser_contact, newUser_report_to, newUser_notes, newUser_authority_level, }) {
    // VALIDATE INPUT
    const validate_input = exports.create_INPUT_SCHEMA.safeParse({
        sender_id,
        newUser_id,
        newUser_user_id,
        newUser_username,
        newUser_password,
        newUser_name,
        newUser_email,
        newUser_division,
        newUser_section,
        newUser_position,
        newUser_contact,
        newUser_report_to,
        newUser_notes,
        newUser_authority_level,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    // CREATE NEW USER
    try {
        // DEFINE SENDER
        const sender = yield client_1.db.user.findFirst({ where: { id: sender_id } });
        const sender_authority_level = sender === null || sender === void 0 ? void 0 : sender.authority_level;
        const sender_division = sender === null || sender === void 0 ? void 0 : sender.division;
        if (!sender || !sender_authority_level || !sender_division)
            return index_1.default.db_response.error_unauthorized(null);
        // DEFINE TARGET
        if (sender_division != newUser_division || sender_authority_level < newUser_authority_level)
            return index_1.default.db_response.error_unauthorized(null);
        // ADD USER
        const data = yield client_1.db.user.create({
            omit: {
                password: false,
            },
            data: {
                id: newUser_id,
                user_id: newUser_user_id,
                username: newUser_username,
                password: newUser_password,
                name: newUser_name,
                email: newUser_email,
                division: newUser_division,
                section: newUser_section,
                position: newUser_position,
                contact: newUser_contact,
                report_to: newUser_report_to,
                notes: newUser_notes,
                authority_level: newUser_authority_level,
                createdBy: sender_id,
                updatedBy: sender_id,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.create = create;
