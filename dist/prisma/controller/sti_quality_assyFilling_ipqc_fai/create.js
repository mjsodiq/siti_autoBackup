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
exports.create = exports.create_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/sti_quality_assyFilling_ipqc_fai/index_schema");
const index_schema_2 = require("@/prisma/controller/user/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.create_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_2.user_id,
    creator_id: index_schema_2.user_id,
    WorkOrder: index_schema_1.db_SCHEMA.shape.WorkOrder.optional(),
    Line: index_schema_1.db_SCHEMA.shape.Line.optional(),
    Section: index_schema_1.db_SCHEMA.shape.Section.optional(),
    LaserCode: index_schema_1.db_SCHEMA.shape.LaserCode.optional(),
    date: index_schema_1.db_SCHEMA.shape.Date.optional(),
    FAI_StartTime: index_schema_1.db_SCHEMA.shape.FAI_StartTime.optional(),
    FAI_FinishTime: index_schema_1.db_SCHEMA.shape.FAI_FinishTime.optional(),
    CPK: index_schema_1.db_SCHEMA.shape.CPK.optional(),
    Image1: index_schema_1.db_SCHEMA.shape.Image1.optional(),
    Image2: index_schema_1.db_SCHEMA.shape.Image2.optional(),
    Image3: index_schema_1.db_SCHEMA.shape.Image3.optional(),
    Notes: index_schema_1.db_SCHEMA.shape.Notes.optional(),
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, creator_id, WorkOrder, Line, Section, LaserCode, date, FAI_StartTime, FAI_FinishTime, CPK, Image1, Image2, Image3, Notes, }) {
    const currentDate = new Date();
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
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
        Image1,
        Image2,
        Image3,
        Notes,
    });
    if (!validate_input.success) {
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    }
    try {
        const data = yield client_1.db.sTI_Quality_AssyFilling_IPQC_FAI.create({
            data: {
                WorkOrder,
                Line,
                Section,
                LaserCode,
                Date: date,
                FAI_StartTime,
                FAI_FinishTime,
                CPK,
                Image1,
                Image2,
                Image3,
                Notes,
                createdAt: currentDate,
                createdBy: creator_id,
                userId: sender,
                updatedAt: currentDate,
                updatedBy: sender,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.create = create;
