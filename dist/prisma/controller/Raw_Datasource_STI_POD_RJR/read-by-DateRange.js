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
        raw_Datasource_STI_POD_RJR: {
            tanggal_mulai_YEAR: {
                needs: {
                    tanggal_mulai: true,
                },
                compute(data) {
                    var _a;
                    return data.tanggal_mulai && ((_a = data.tanggal_mulai) === null || _a === void 0 ? void 0 : _a.getFullYear());
                },
            },
            tanggal_mulai_MONTH: {
                needs: {
                    tanggal_mulai: true,
                },
                compute(data) {
                    var _a;
                    return data.tanggal_mulai && ((_a = data.tanggal_mulai) === null || _a === void 0 ? void 0 : _a.getMonth()) + 1;
                },
            },
            tanggal_mulai_DATE: {
                needs: {
                    tanggal_mulai: true,
                },
                compute(data) {
                    var _a;
                    return data.tanggal_mulai && ((_a = data.tanggal_mulai) === null || _a === void 0 ? void 0 : _a.getDate());
                },
            },
            tanggal_mulai_HOURS: {
                needs: {
                    tanggal_mulai: true,
                },
                compute(data) {
                    var _a;
                    return data.tanggal_mulai && ((_a = data.tanggal_mulai) === null || _a === void 0 ? void 0 : _a.getHours());
                },
            },
            tanggal_mulai_MINUTES: {
                needs: {
                    tanggal_mulai: true,
                },
                compute(data) {
                    var _a;
                    return data.tanggal_mulai && ((_a = data.tanggal_mulai) === null || _a === void 0 ? void 0 : _a.getMinutes());
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
        const data = yield computedPrismaClient.raw_Datasource_STI_POD_RJR.findMany({
            where: {
                tanggal_mulai: {
                    gte: startDate,
                    lte: endDate,
                },
            },
            orderBy: {
                tanggal_mulai: "asc",
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_by_dateRange = read_by_dateRange;
