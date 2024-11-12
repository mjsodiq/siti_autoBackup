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
exports.read_findingCount_byDate = exports.read_findingCount_byDate_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
exports.read_findingCount_byDate_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.db_SCHEMA.shape.user_id,
    startDate: zod_1.z.date().optional(),
    endDate: zod_1.z.date().optional(),
});
const read_findingCount_byDate = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, startDate, endDate }) {
    const validate_input = yield exports.read_findingCount_byDate_INPUT_SCHEMA.safeParseAsync({
        sender,
        startDate,
        endDate,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const where = {};
        if (validate_input.data.startDate && validate_input.data.endDate) {
            where.date = {
                gte: validate_input.data.startDate,
                lte: validate_input.data.endDate,
            };
        }
        if (validate_input.data.startDate && !validate_input.data.endDate) {
            where.date = {
                gte: validate_input.data.startDate,
            };
        }
        if (!validate_input.data.startDate && validate_input.data.endDate) {
            where.date = {
                lte: validate_input.data.endDate,
            };
        }
        const others = yield client_1.db.sTI_Quality_All_Finding_MixAudit.aggregate({
            where: Object.assign(Object.assign({}, where), { category: "others" }),
            _count: {
                category: true,
            },
        });
        const quality_issue = yield client_1.db.sTI_Quality_All_Finding_MixAudit.aggregate({
            where: Object.assign(Object.assign({}, where), { category: "quality_issue" }),
            _count: {
                category: true,
            },
        });
        const mix = yield client_1.db.sTI_Quality_All_Finding_MixAudit.aggregate({
            where: Object.assign(Object.assign({}, where), { category: "mix" }),
            _count: {
                category: true,
            },
        });
        const compliance = yield client_1.db.sTI_Quality_All_Finding_MixAudit.aggregate({
            where: Object.assign(Object.assign({}, where), { category: "compliance" }),
            _count: {
                category: true,
            },
        });
        return index_1.default.db_response.success({
            quality_issue: quality_issue._count.category,
            others: others._count.category,
            mix: mix._count.category,
            compliance: compliance._count.category,
        });
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.read_findingCount_byDate = read_findingCount_byDate;
