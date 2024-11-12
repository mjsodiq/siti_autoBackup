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
exports.read_MonthlyFindingCount_byYear = exports.read_MonthlyFindingCount_byYear_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
const GenerateMonthlySequence_1 = require("@/utils/Fn/Date_utils/GenerateMonthlySequence");
exports.read_MonthlyFindingCount_byYear_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.db_SCHEMA.shape.user_id,
    year: zod_1.z.number(),
});
const read_MonthlyFindingCount_byYear = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, year }) {
    const validate_input = yield exports.read_MonthlyFindingCount_byYear_INPUT_SCHEMA.safeParseAsync({
        sender,
        year,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    let totalData = 0;
    try {
        const monthList = (0, GenerateMonthlySequence_1.GenerateMonthlySequence)({ from: { year: validate_input.data.year, month: 1 }, to: { year: validate_input.data.year, month: 12 } });
        const data_to_return = yield Promise.all(monthList.map((month) => __awaiter(void 0, void 0, void 0, function* () {
            const where = {};
            if (month.startDate && month.endDate) {
                where.date = {
                    gte: month.startDate,
                    lte: month.endDate,
                };
            }
            if (month.startDate && !month.endDate) {
                where.date = {
                    gte: month.startDate,
                };
            }
            if (!month.startDate && month.endDate) {
                where.date = {
                    lte: month.endDate,
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
            const quality_issue_count = quality_issue._count.category;
            const others_count = others._count.category;
            const mix_count = mix._count.category;
            const compliance_count = compliance._count.category;
            const total = quality_issue_count + others_count + mix_count + compliance_count;
            totalData += total;
            return {
                month: month.month,
                total: total,
                periods: {
                    from: month.startDate,
                    to: month.endDate,
                },
                details: {
                    quality_issue: quality_issue_count,
                    others: others_count,
                    mix: mix_count,
                    compliance: compliance_count,
                },
            };
        })));
        console.log(data_to_return);
        return index_1.default.db_response.success(data_to_return);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.read_MonthlyFindingCount_byYear = read_MonthlyFindingCount_byYear;
