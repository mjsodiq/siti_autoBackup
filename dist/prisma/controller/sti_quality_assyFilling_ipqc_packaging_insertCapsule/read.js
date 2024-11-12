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
exports.read = exports.read_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
exports.read_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.user_id,
});
const read = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender }) {
    const validate_input = yield exports.read_INPUT_SCHEMA.safeParseAsync({ sender });
    if (!validate_input.success)
        return index_1.default.db_response.error_unauthorized([]);
    try {
        const data = yield client_1.db.sTI_Quality_AssyFilling_IPQC_Packaging_InsertCapsule.findMany({
            orderBy: {
                id: "desc",
            },
        });
        const final_data = yield Promise.all(data.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            var _a;
            return Object.assign(Object.assign({}, item), { date_in_timestamp: ((_a = item.time_insert_capsule) === null || _a === void 0 ? void 0 : _a.getTime()) || 0 });
        })));
        const data_to_return = final_data.sort((a, b) => b.date_in_timestamp - a.date_in_timestamp);
        return index_1.default.db_response.success(data_to_return);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read = read;
