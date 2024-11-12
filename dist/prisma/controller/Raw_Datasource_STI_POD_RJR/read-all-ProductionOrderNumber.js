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
exports.read_all_ProductionOrderNumber = void 0;
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const read_all_ProductionOrderNumber_INPUT_SCHEMA = zod_1.z.object({
    user_id: index_schema_1.db_SCHEMA.shape.user_id,
});
const read_all_ProductionOrderNumber = (_a) => __awaiter(void 0, [_a], void 0, function* ({ user_id, }) {
    const validate_input = yield read_all_ProductionOrderNumber_INPUT_SCHEMA.safeParseAsync({ user_id });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        const data = yield client_1.db.raw_Datasource_STI_POD_RJR.findMany({
            select: {
                production_order_number: true,
                tanggal_mulai: true,
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
exports.read_all_ProductionOrderNumber = read_all_ProductionOrderNumber;
