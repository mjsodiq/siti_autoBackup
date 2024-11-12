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
exports.update = exports.update_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.update_INPUT_SCHEMA = zod_1.z.object({
    sender_id: index_schema_1.db_SCHEMA.shape.user_id,
    id: index_schema_1.db_SCHEMA.shape.id,
    user_id: index_schema_1.db_SCHEMA.shape.user_id,
    username: index_schema_1.db_SCHEMA.shape.username,
    password: index_schema_1.db_SCHEMA.shape.password,
    name: index_schema_1.db_SCHEMA.shape.name,
    email: index_schema_1.db_SCHEMA.shape.email,
    division: index_schema_1.db_SCHEMA.shape.division,
    section: index_schema_1.db_SCHEMA.shape.section,
    position: index_schema_1.db_SCHEMA.shape.position,
    contact: index_schema_1.db_SCHEMA.shape.contact,
    report_to: index_schema_1.db_SCHEMA.shape.report_to,
    notes: index_schema_1.db_SCHEMA.shape.notes,
    authority_level: index_schema_1.db_SCHEMA.shape.authority_level,
    createdAt: index_schema_1.db_SCHEMA.shape.createdAt,
    updatedAt: index_schema_1.db_SCHEMA.shape.updatedAt,
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender_id, id, user_id, username, password, name, email, division, section, position, contact, report_to, notes, authority_level, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        sender_id,
        id,
        user_id,
        username,
        password,
        name,
        email,
        division,
        section,
        position,
        contact,
        report_to,
        notes,
        authority_level,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.user.update({
            where: {
                id,
            },
            data: {
                user_id,
                username,
                password,
                name,
                email,
                division,
                section,
                position,
                contact,
                report_to,
                notes,
                authority_level,
                updatedAt: new Date(),
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.update = update;
