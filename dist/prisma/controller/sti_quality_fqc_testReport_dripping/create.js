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
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_testReport_dripping/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.create_INPUT_SCHEMA = zod_1.z.object({
    userId: zod_1.z.string(),
    Manufacture_Date: index_schema_1.db_SCHEMA.shape.Manufacture_Date,
    Job_Order: index_schema_1.db_SCHEMA.shape.Job_Order,
    Product_Line: index_schema_1.db_SCHEMA.shape.Product_Line,
    Flavor: index_schema_1.db_SCHEMA.shape.Flavor,
    Sampel_Size: index_schema_1.db_SCHEMA.shape.Sampel_Size,
    Defect_Quantity: index_schema_1.db_SCHEMA.shape.Defect_Quantity,
    Defect_Rate: index_schema_1.db_SCHEMA.shape.Defect_Rate,
    Defect_Description_Note: index_schema_1.db_SCHEMA.shape.Defect_Description_Note,
    Defect_Description: index_schema_1.db_SCHEMA.shape.Defect_Description,
    Result: index_schema_1.db_SCHEMA.shape.Result,
    Completed_Date: index_schema_1.db_SCHEMA.shape.Completed_Date,
    Move_To: index_schema_1.db_SCHEMA.shape.Move_To,
    Note: index_schema_1.db_SCHEMA.shape.Note,
    Tested_By: index_schema_1.db_SCHEMA.shape.Tested_By,
    createdAt: index_schema_1.db_SCHEMA.shape.createdAt.optional(),
    createdBy: index_schema_1.db_SCHEMA.shape.createdBy.optional(),
    updatedAt: index_schema_1.db_SCHEMA.shape.updatedAt.optional(),
    updatedBy: index_schema_1.db_SCHEMA.shape.updatedBy.optional(),
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ userId, Manufacture_Date, Job_Order, Product_Line, Flavor, Sampel_Size, Defect_Quantity, Defect_Rate, Defect_Description_Note, Defect_Description, Result, Completed_Date, Note, Tested_By, Move_To, }) {
    const currentDate = new Date();
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
        userId,
        Manufacture_Date,
        Job_Order,
        Product_Line,
        Flavor,
        Sampel_Size,
        Defect_Quantity,
        Defect_Rate,
        Defect_Description_Note,
        Defect_Description,
        Result,
        Completed_Date,
        Note,
        Tested_By,
        Move_To,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        console.log(typeof validate_input.data.Manufacture_Date);
        console.log(validate_input.data.Manufacture_Date);
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_Dripping.create({
            data: {
                Manufacture_Date: validate_input.data.Manufacture_Date,
                Job_Order: validate_input.data.Job_Order,
                Product_Line: validate_input.data.Product_Line,
                Flavor: validate_input.data.Flavor,
                Sampel_Size: validate_input.data.Sampel_Size,
                Defect_Quantity: validate_input.data.Defect_Quantity,
                Defect_Rate: validate_input.data.Defect_Rate,
                Defect_Description_Note: validate_input.data.Defect_Description_Note,
                Defect_Description: validate_input.data.Defect_Description,
                Result: validate_input.data.Result,
                Completed_Date: validate_input.data.Completed_Date,
                Note: validate_input.data.Note,
                Tested_By: validate_input.data.Tested_By,
                Move_To: validate_input.data.Move_To,
                createdAt: currentDate,
                createdBy: validate_input.data.userId,
                updatedAt: currentDate,
                updatedBy: validate_input.data.userId,
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
