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
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_testReport_liquid/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.create_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    private_id: index_schema_1.db_SCHEMA.shape.private_id,
    Sampling_Time: index_schema_1.db_SCHEMA.shape.Sampling_Time,
    Material_Number: index_schema_1.db_SCHEMA.shape.Material_Number,
    Batch_Number: index_schema_1.db_SCHEMA.shape.Batch_Number,
    Flavor: index_schema_1.db_SCHEMA.shape.Flavor,
    Sampel_Size: index_schema_1.db_SCHEMA.shape.Sampel_Size,
    Defect_Quantity: index_schema_1.db_SCHEMA.shape.Defect_Quantity,
    Defect_Rate: index_schema_1.db_SCHEMA.shape.Defect_Rate,
    Defect_Description: index_schema_1.db_SCHEMA.shape.Defect_Description,
    Result: index_schema_1.db_SCHEMA.shape.Result,
    Completed_Date: index_schema_1.db_SCHEMA.shape.Completed_Date,
    Note: index_schema_1.db_SCHEMA.shape.Note,
    Tested_By: index_schema_1.db_SCHEMA.shape.Tested_By,
    Tester_ID: index_schema_1.db_SCHEMA.shape.Tester_ID,
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, private_id, Sampling_Time, Material_Number, Batch_Number, Flavor, Sampel_Size, Defect_Quantity, Defect_Rate, Defect_Description, Result, Completed_Date, Note, Tested_By, Tester_ID, }) {
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
        id,
        private_id,
        Sampling_Time,
        Material_Number,
        Batch_Number,
        Flavor,
        Sampel_Size,
        Defect_Quantity,
        Defect_Rate,
        Defect_Description,
        Result,
        Completed_Date,
        Note,
        Tested_By,
        Tester_ID,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_Liquid.upsert({
            where: {
                id,
            },
            create: {
                id,
                private_id,
                Sampling_Time,
                Material_Number,
                Batch_Number,
                Flavor,
                Sampel_Size,
                Defect_Quantity,
                Defect_Rate,
                Defect_Description,
                Result,
                Completed_Date,
                Note,
                Tested_By,
                Tester_ID,
            },
            update: {
                private_id,
                Sampling_Time,
                Material_Number,
                Batch_Number,
                Flavor,
                Sampel_Size,
                Defect_Quantity,
                Defect_Rate,
                Defect_Description,
                Result,
                Completed_Date,
                Note,
                Tested_By,
                Tester_ID,
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
