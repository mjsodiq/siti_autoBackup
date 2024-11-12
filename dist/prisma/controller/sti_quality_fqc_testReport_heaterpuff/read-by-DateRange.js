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
exports.read_by_dateRange = exports.read_by_dateRange_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const computedPrismaClient = client_1.db.$extends({
    name: "withParsedDate",
    result: {
        sTI_Quality_FQC_TestReport_Heaterpuff: {
            Completed_Date_YEAR: {
                needs: {
                    Completed_Date: true,
                },
                compute(data) {
                    var _a;
                    return data.Completed_Date && ((_a = data.Completed_Date) === null || _a === void 0 ? void 0 : _a.getFullYear());
                },
            },
            Completed_Date_MONTH: {
                needs: {
                    Completed_Date: true,
                },
                compute(data) {
                    var _a;
                    return data.Completed_Date && ((_a = data.Completed_Date) === null || _a === void 0 ? void 0 : _a.getMonth()) + 1;
                },
            },
            Completed_Date_DATE: {
                needs: {
                    Completed_Date: true,
                },
                compute(data) {
                    var _a;
                    return data.Completed_Date && ((_a = data.Completed_Date) === null || _a === void 0 ? void 0 : _a.getDate());
                },
            },
            Completed_Date_HOURS: {
                needs: {
                    Completed_Date: true,
                },
                compute(data) {
                    var _a;
                    return data.Completed_Date && ((_a = data.Completed_Date) === null || _a === void 0 ? void 0 : _a.getHours());
                },
            },
            Completed_Date_MINUTES: {
                needs: {
                    Completed_Date: true,
                },
                compute(data) {
                    var _a;
                    return data.Completed_Date && ((_a = data.Completed_Date) === null || _a === void 0 ? void 0 : _a.getMinutes());
                },
            },
        },
    },
});
exports.read_by_dateRange_INPUT_SCHEMA = zod_1.z.object({
    startDate: zod_1.z.date().default(new Date()),
    endDate: zod_1.z.date().default(new Date()),
});
const read_by_dateRange = (_a) => __awaiter(void 0, [_a], void 0, function* ({ startDate, endDate }) {
    const validate_input = yield exports.read_by_dateRange_INPUT_SCHEMA.safeParseAsync({ startDate, endDate });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        // PROCESS DATA
        const data = yield computedPrismaClient.sTI_Quality_FQC_TestReport_Heaterpuff.findMany({
            where: {
                Completed_Date: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            orderBy: [
                {
                    Completed_Date: "asc",
                },
            ],
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_by_dateRange = read_by_dateRange;
