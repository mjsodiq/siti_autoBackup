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
exports.readOne = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
const index_schema_2 = require("./index_schema");
const readOne_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.user_id,
    id: index_schema_2.db_SCHEMA.shape.id,
});
const readOne = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, id }) {
    const validate_input = yield readOne_INPUT_SCHEMA.safeParseAsync({
        sender,
        id,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.sTI_Quality_AssyFilling_IPQC_Packaging_InsertCapsule.findFirst({
            where: {
                id,
            },
        });
        if (data)
            return index_1.default.db_response.success(data);
        return index_1.default.db_response.error_notFound(null);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.readOne = readOne;
