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
const properties = [
    { value: "H", label: "assembly" },
    { value: "F", label: "filling" },
];
const VALUES = [properties[0].value, ...properties.slice(1).map((p) => p.value)];
const Property = zod_1.z.enum(VALUES);
exports.read_latest_n_data_INPUT_SCHEMA = zod_1.z.object({
    n_dataCount: zod_1.z.number(),
    lineSection: zod_1.z.enum(VALUES),
});
const read_latest_n_data = (_a) => __awaiter(void 0, [_a], void 0, function* ({ n_dataCount, lineSection }) {
    const validate_input = yield exports.read_latest_n_data_INPUT_SCHEMA.safeParseAsync({ n_dataCount, lineSection });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        const data = yield client_1.db.raw_Datasource_STI_POD_RJR.findMany({
            where: {
                line: {
                    startsWith: validate_input.data.lineSection,
                },
            },
            orderBy: {
                tanggal_mulai: "desc",
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
