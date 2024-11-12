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
exports.readStiQualityPodFqcList = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const zod_1 = require("zod");
const index_schema_1 = require("./index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const readStiQualityPodFqcList_INPUT_SCHEMA = zod_1.z.object({
    sender_id: index_schema_1.db_SCHEMA.shape.user_id,
});
const readStiQualityPodFqcList = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender_id }) {
    // VALIDATE INPUT
    const validate_input = readStiQualityPodFqcList_INPUT_SCHEMA.safeParse({
        sender_id,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    // READ USER LIST
    try {
        const data = yield client_1.db.user.findMany({
            where: {
                AND: [{ division: "quality" }, { OR: [{ section: "FQC" }, { section: "fqc" }] }],
            },
            select: {
                id: true,
                user_id: true,
                name: true,
                email: true,
                division: true,
                section: true,
                position: true,
                contact: true,
                report_to: true,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.readStiQualityPodFqcList = readStiQualityPodFqcList;
