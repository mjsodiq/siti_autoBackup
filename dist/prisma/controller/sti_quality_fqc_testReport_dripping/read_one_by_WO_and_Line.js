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
exports.read_one_by_WO_and_Line = exports.read_one_by_WO_and_Line_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("./index_schema");
exports.read_one_by_WO_and_Line_INPUT_SCHEMA = zod_1.z.object({
    line: index_schema_1.db_SCHEMA.shape.Product_Line.optional(),
    workOrder: index_schema_1.db_SCHEMA.shape.Job_Order.optional(),
    n_dataCount: zod_1.z.number().optional(),
});
const read_one_by_WO_and_Line = (_a) => __awaiter(void 0, [_a], void 0, function* ({ line, workOrder }) {
    const validate_input = yield exports.read_one_by_WO_and_Line_INPUT_SCHEMA.safeParseAsync({ line, workOrder });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_Dripping.findMany({
            where: {
                Product_Line: line,
                Job_Order: workOrder,
            },
            orderBy: {
                Completed_Date: "desc",
            },
            take: validate_input.data.n_dataCount,
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_one_by_WO_and_Line = read_one_by_WO_and_Line;
