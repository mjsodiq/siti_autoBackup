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
exports.read_scoreRank_byMonth = exports.read_scoreRank_byMonth_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
exports.read_scoreRank_byMonth_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.db_SCHEMA.shape.user_id,
    startDate: zod_1.z.date().optional(),
    endDate: zod_1.z.date().optional(),
    take: zod_1.z.number().optional(),
});
const read_scoreRank_byMonth = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, startDate, endDate, take }) {
    const validate_input = yield exports.read_scoreRank_byMonth_INPUT_SCHEMA.safeParseAsync({
        sender,
        startDate,
        endDate,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
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
        const response = yield client_1.db.sTI_Quality_All_Finding_MixAudit.groupBy({
            where,
            by: ["employee_id", "name"],
            _sum: {
                score: true,
            },
            orderBy: {
                _sum: {
                    score: "desc",
                },
            },
            take: take,
        });
        const response2 = yield Promise.all(response.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            const data2 = yield client_1.db.sTI_Quality_All_Finding_MixAudit.groupBy({
                where: {
                    AND: [{ employee_id: item.employee_id }, Object.assign({}, where)],
                },
                by: ["employee_id", "category"],
                _sum: {
                    score: true,
                },
            });
            const detail_item = {};
            data2.forEach((item2) => {
                if (item2.category) {
                    detail_item[`${item2.category}`] = item2._sum.score;
                }
            });
            return {
                employee_id: item.employee_id,
                total_score: item._sum.score,
                name: item.name,
                details: detail_item,
            };
        })));
        return index_1.default.db_response.success(response2);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_scoreRank_byMonth = read_scoreRank_byMonth;
