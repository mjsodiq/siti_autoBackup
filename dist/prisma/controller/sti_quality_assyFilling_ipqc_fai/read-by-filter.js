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
exports.read_by_filter = exports.read_by_filter_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_1 = require("../user/index_schema");
const readOne_1 = require("../user/readOne");
const index_schema_2 = require("./index_schema");
exports.read_by_filter_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.user_id,
    creator_id: index_schema_1.user_id.optional(),
    WorkOrder: index_schema_2.db_SCHEMA.shape.WorkOrder.optional(),
    Line: zod_1.z.array(zod_1.z.string()).optional(),
    Section: index_schema_2.db_SCHEMA.shape.Section.optional(),
    LaserCode: index_schema_2.db_SCHEMA.shape.LaserCode.optional(),
    date: index_schema_2.db_SCHEMA.shape.Date.optional(),
    FAI_StartTime: index_schema_2.db_SCHEMA.shape.FAI_StartTime.optional(),
    FAI_FinishTime: index_schema_2.db_SCHEMA.shape.FAI_FinishTime.optional(),
    CPK: index_schema_2.db_SCHEMA.shape.CPK.optional(),
    Notes: index_schema_2.db_SCHEMA.shape.Notes.optional(),
});
const read_by_filter = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, creator_id, WorkOrder, Line, Section, LaserCode, date, FAI_StartTime, FAI_FinishTime, CPK, Notes, }) {
    const validate_input = yield exports.read_by_filter_INPUT_SCHEMA.safeParseAsync({
        sender,
        creator_id,
        WorkOrder,
        Line,
        Section,
        LaserCode,
        date,
        FAI_StartTime,
        FAI_FinishTime,
        CPK,
        Notes,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_unauthorized([]);
    // DEFINE WHERE CLAUSE
    const where = {};
    if (validate_input.data.creator_id) {
        where.creator_id = validate_input.data.creator_id;
    }
    if (validate_input.data.WorkOrder) {
        where.WorkOrder = validate_input.data.WorkOrder;
    }
    if (validate_input.data.Line) {
        where.Line = {
            in: validate_input.data.Line,
        };
    }
    if (validate_input.data.Section) {
        where.Section = validate_input.data.Section;
    }
    if (validate_input.data.LaserCode) {
        where.LaserCode = validate_input.data.LaserCode;
    }
    if (validate_input.data.date) {
        where.date = validate_input.data.date;
    }
    if (validate_input.data.FAI_StartTime) {
        where.FAI_StartTime = validate_input.data.FAI_StartTime;
    }
    if (validate_input.data.FAI_FinishTime) {
        where.FAI_FinishTime = validate_input.data.FAI_FinishTime;
    }
    if (validate_input.data.CPK) {
        where.CPK = validate_input.data.CPK;
    }
    if (validate_input.data.Notes) {
        where.Notes = validate_input.data.Notes;
    }
    console.log(where);
    try {
        const data = yield client_1.db.sTI_Quality_AssyFilling_IPQC_FAI.findMany({
            where,
            include: {
                User: true,
            },
            orderBy: {
                id: "desc",
            },
        });
        const final_data = yield Promise.all(data.map((item) => __awaiter(void 0, void 0, void 0, function* () {
            var _a, _b;
            const creator_detail = yield (0, readOne_1.readOne)({ sender_id: sender, search_id: item.createdBy });
            return Object.assign(Object.assign({}, item), { createdBy_name: ((_a = creator_detail.data) === null || _a === void 0 ? void 0 : _a.name) || "", date_in_timestamp: ((_b = item.Date) === null || _b === void 0 ? void 0 : _b.getTime()) || 0 });
        })));
        const data_to_return = final_data.sort((a, b) => b.date_in_timestamp - a.date_in_timestamp);
        return index_1.default.db_response.success(data_to_return);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_by_filter = read_by_filter;
