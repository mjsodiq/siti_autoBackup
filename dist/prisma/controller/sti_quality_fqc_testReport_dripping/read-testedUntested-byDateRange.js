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
exports.read_testedUntested_byDateRange = exports.read_testedUntested_byDateRange_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const sortArrayObject_1 = require("@/utils/Array/sortArrayObject");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const computedPrismaClient = client_1.db.$extends({
    name: "withParsedDate",
    result: {
        sTI_Quality_FQC_TestReport_Dripping: {
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
exports.read_testedUntested_byDateRange_INPUT_SCHEMA = zod_1.z.object({
    startDate: zod_1.z.date().default(new Date()),
    endDate: zod_1.z.date().default(new Date()),
    take: zod_1.z.number().optional(),
});
const read_testedUntested_byDateRange = (_a) => __awaiter(void 0, [_a], void 0, function* ({ startDate, endDate, take, }) {
    const validate_input = yield exports.read_testedUntested_byDateRange_INPUT_SCHEMA.safeParseAsync({ startDate, endDate, take });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        // PROCESS DATA
        const testedData = yield computedPrismaClient.sTI_Quality_FQC_TestReport_Dripping.findMany({
            where: {
                AND: [
                    {
                        Completed_Date: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                ],
            },
        });
        const testedData_jobOrderList = testedData.map((item) => item.Job_Order);
        const rjrData_notTested = yield client_1.db.raw_Datasource_STI_POD_RJR.findMany({
            where: {
                AND: [
                    {
                        tanggal_mulai: {
                            gte: startDate,
                            lte: endDate,
                        },
                    },
                    {
                        OR: [
                            {
                                line: {
                                    startsWith: "H",
                                },
                            },
                            {
                                line: {
                                    startsWith: "STI-H",
                                },
                            },
                        ],
                    },
                    {
                        production_order_number: {
                            notIn: testedData_jobOrderList,
                        },
                    },
                ],
            },
        });
        const combine = [
            ...testedData,
            ...rjrData_notTested.map((item) => ({
                id: item.id,
                private_id: "",
                Manufacture_Date: item.tanggal_mulai,
                Job_Order: item.production_order_number,
                Product_Line: item.line,
                Flavor: item.flavor_concentration,
                Sampel_Size: 4,
                Defect_Quantity: 0,
                Defect_Rate: null,
                Defect_Description_Note: null,
                Defect_Description: null,
                Result: null,
                Completed_Date: null,
                Note: null,
                Tested_By: "-",
                Move_To: null,
                Verified_By: null,
                Verification_Date: null,
                createdAt: null,
                createdBy: null,
                updatedAt: null,
                updatedBy: null,
                Completed_Date_YEAR: null,
                Completed_Date_MONTH: null,
                Completed_Date_DATE: null,
                Completed_Date_HOURS: null,
                Completed_Date_MINUTES: null,
            })),
        ];
        return index_1.default.db_response.success((0, sortArrayObject_1.sortArrayObject)(combine, ["Manufacture_Date", "Tested_By"], "desc").slice(0, take || combine.length));
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_testedUntested_byDateRange = read_testedUntested_byDateRange;
