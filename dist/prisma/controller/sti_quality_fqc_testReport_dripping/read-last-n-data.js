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
exports.read_latest_n_data = exports.read_latest_n_data_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.read_latest_n_data_INPUT_SCHEMA = zod_1.z.object({
    n_dataCount: zod_1.z.number(),
});
const read_latest_n_data = (_a) => __awaiter(void 0, [_a], void 0, function* ({ n_dataCount }) {
    const validate_input = yield exports.read_latest_n_data_INPUT_SCHEMA.safeParseAsync({ n_dataCount });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_Dripping.findMany({
            where: {
                Product_Line: {
                    startsWith: "H",
                },
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
exports.read_latest_n_data = read_latest_n_data;
