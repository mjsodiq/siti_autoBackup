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
exports.deleteUser = exports.deleteUser_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.deleteUser_INPUT_SCHEMA = zod_1.z.object({
    sender_id: index_schema_1.db_SCHEMA.shape.user_id,
    target_id: index_schema_1.db_SCHEMA.shape.user_id,
});
const deleteUser = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender_id, target_id }) {
    // VALIDATE INPUT
    const validate_input = yield exports.deleteUser_INPUT_SCHEMA.safeParseAsync({ sender_id, target_id });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    // DELETE USER
    try {
        // DEFINE SENDER
        const sender_details = yield client_1.db.user.findFirst({
            where: {
                user_id: sender_id,
            },
        });
        // DEFINE TARGET
        const target_details = yield client_1.db.user.findFirst({
            where: {
                user_id: target_id,
            },
        });
        if (!sender_details || !target_details)
            return index_1.default.db_response.error(400, "User not found", [], null);
        if (sender_details.authority_level == null || target_details.authority_level == null)
            return index_1.default.db_response.error_unauthorized(null);
        if (sender_details.authority_level < target_details.authority_level)
            return index_1.default.db_response.error(401, "You are not permitted to delete this user", [], null);
        // DELETE USER
        const data = yield client_1.db.user.delete({
            where: {
                user_id: target_id,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.deleteUser = deleteUser;
