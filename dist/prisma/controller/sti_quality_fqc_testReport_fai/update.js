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
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_testReport_fai/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.update_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    private_id: index_schema_1.db_SCHEMA.shape.private_id.optional(),
    Manufacture_Date: index_schema_1.db_SCHEMA.shape.Manufacture_Date.optional(),
    Job_Order: index_schema_1.db_SCHEMA.shape.Job_Order.optional(),
    Product_Line: index_schema_1.db_SCHEMA.shape.Product_Line.optional(),
    Flavor: index_schema_1.db_SCHEMA.shape.Flavor.optional(),
    Sampel_Size: index_schema_1.db_SCHEMA.shape.Sampel_Size.optional(),
    Defect_Quantity: index_schema_1.db_SCHEMA.shape.Defect_Quantity.optional(),
    Defect_Rate: index_schema_1.db_SCHEMA.shape.Defect_Rate.optional(),
    Defect_Description_Note: index_schema_1.db_SCHEMA.shape.Defect_Description_Note.optional(),
    Defect_Description: index_schema_1.db_SCHEMA.shape.Defect_Description.optional(),
    Result: index_schema_1.db_SCHEMA.shape.Result.optional(),
    Completed_Date: index_schema_1.db_SCHEMA.shape.Completed_Date.optional(),
    Note: index_schema_1.db_SCHEMA.shape.Note.optional(),
    Tested_By: index_schema_1.db_SCHEMA.shape.Tested_By.optional(),
    Verified_By: index_schema_1.db_SCHEMA.shape.Verified_By.optional(),
    Verification_Date: index_schema_1.db_SCHEMA.shape.Verification_Date.optional(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, private_id, Manufacture_Date, Job_Order, Product_Line, Flavor, Sampel_Size, Defect_Quantity, Defect_Rate, Defect_Description_Note, Defect_Description, Result, Completed_Date, Note, Tested_By, Verified_By, Verification_Date, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        id,
        private_id,
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
        Verified_By,
        Verification_Date,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_FAI.update({
            where: {
                id,
            },
            data: {
                private_id,
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
                Verified_By,
                Verification_Date,
            },
        });
        return index_1.default.db_response.success(data);
    }
    catch (error) {
        MyLogger_1.default.log(null);
        return index_1.default.db_response.error_internalServer(null);
    }
});
exports.update = update;
