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
exports.update = exports.update_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_testReport_negativePressure/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_2 = require("../user/index_schema");
exports.update_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_2.db_SCHEMA.shape.user_id,
    id: index_schema_1.db_SCHEMA.shape.id,
    private_id: index_schema_1.db_SCHEMA.shape.private_id.optional(),
    Complete_Date: index_schema_1.db_SCHEMA.shape.Complete_Date.optional(),
    IPQC_PIC: index_schema_1.db_SCHEMA.shape.IPQC_PIC.optional(),
    Job_Order: index_schema_1.db_SCHEMA.shape.Job_Order.optional(),
    Product_Line: index_schema_1.db_SCHEMA.shape.Product_Line.optional(),
    Mould: index_schema_1.db_SCHEMA.shape.Mould.optional(),
    Flavor: index_schema_1.db_SCHEMA.shape.Flavor.optional(),
    Sample_Size: index_schema_1.db_SCHEMA.shape.Sample_Size.optional(),
    Result: index_schema_1.db_SCHEMA.shape.Result.optional(),
    Tested_By: index_schema_1.db_SCHEMA.shape.Tested_By.optional(),
    ConfirmedBy: index_schema_1.db_SCHEMA.shape.ConfirmedBy.optional(),
    Notes: index_schema_1.db_SCHEMA.shape.Notes.optional(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, id, private_id, Complete_Date, IPQC_PIC, Job_Order, Product_Line, Mould, Flavor, Sample_Size, Result, Tested_By, ConfirmedBy, Notes, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        sender,
        id,
        private_id,
        Complete_Date,
        IPQC_PIC,
        Job_Order,
        Product_Line,
        Mould,
        Flavor,
        Sample_Size,
        Result,
        Tested_By,
        ConfirmedBy,
        Notes,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const currentDate = new Date();
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_NegativePressure.update({
            where: {
                id,
            },
            data: {
                private_id,
                Complete_Date,
                IPQC_PIC,
                Job_Order,
                Product_Line,
                Mould,
                Flavor,
                Sample_Size,
                Result,
                Tested_By,
                ConfirmedBy,
                Notes,
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
exports.update = update;
