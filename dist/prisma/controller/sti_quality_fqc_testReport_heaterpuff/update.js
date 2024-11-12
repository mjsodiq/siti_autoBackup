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
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_testReport_heaterpuff/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.update_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    private_id: index_schema_1.db_SCHEMA.shape.private_id.optional(),
    Manufacture_Date: index_schema_1.db_SCHEMA.shape.Manufacture_Date.optional(),
    Suction_Work_Order: index_schema_1.db_SCHEMA.shape.Suction_Work_Order.optional(),
    Batch_Number: index_schema_1.db_SCHEMA.shape.Batch_Number.optional(),
    Liquid_Batch: index_schema_1.db_SCHEMA.shape.Liquid_Batch.optional(),
    Supplier: index_schema_1.db_SCHEMA.shape.Supplier.optional(),
    Heater_Top_Cover: index_schema_1.db_SCHEMA.shape.Heater_Top_Cover.optional(),
    Silicone: index_schema_1.db_SCHEMA.shape.Silicone.optional(),
    Heating_Holder: index_schema_1.db_SCHEMA.shape.Heating_Holder.optional(),
    Tube: index_schema_1.db_SCHEMA.shape.Tube.optional(),
    Flavor: index_schema_1.db_SCHEMA.shape.Flavor.optional(),
    Number_Of_Sample: index_schema_1.db_SCHEMA.shape.Number_Of_Sample.optional(),
    Defect_Quantity: index_schema_1.db_SCHEMA.shape.Defect_Quantity.optional(),
    Defect_Rate: index_schema_1.db_SCHEMA.shape.Defect_Rate.optional(),
    Defect_Description: index_schema_1.db_SCHEMA.shape.Defect_Description.optional(),
    Defect_Description_Note: index_schema_1.db_SCHEMA.shape.Defect_Description_Note.optional(),
    Result: index_schema_1.db_SCHEMA.shape.Result.optional(),
    PO_Filling_Blister_WO: index_schema_1.db_SCHEMA.shape.PO_Filling_Blister_WO.optional(),
    Completed_Date: index_schema_1.db_SCHEMA.shape.Completed_Date.optional(),
    Note: index_schema_1.db_SCHEMA.shape.Note.optional(),
    Tested_By: index_schema_1.db_SCHEMA.shape.Tested_By.optional(),
    Verified_By: index_schema_1.db_SCHEMA.shape.Verified_By.optional(),
    Verification_Date: index_schema_1.db_SCHEMA.shape.Verification_Date.optional(),
    Production_Plan: index_schema_1.db_SCHEMA.shape.Production_Plan.optional(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, private_id, Manufacture_Date, Suction_Work_Order, Batch_Number, Liquid_Batch, Supplier, Heater_Top_Cover, Silicone, Heating_Holder, Tube, Flavor, Number_Of_Sample, Defect_Quantity, Defect_Rate, Defect_Description, Defect_Description_Note, Result, PO_Filling_Blister_WO, Completed_Date, Note, Tested_By, Verified_By, Verification_Date, Production_Plan, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        id,
        private_id,
        Manufacture_Date,
        Suction_Work_Order,
        Batch_Number,
        Liquid_Batch,
        Supplier,
        Heater_Top_Cover,
        Silicone,
        Heating_Holder,
        Tube,
        Flavor,
        Number_Of_Sample,
        Defect_Quantity,
        Defect_Rate,
        Defect_Description,
        Defect_Description_Note,
        Result,
        PO_Filling_Blister_WO,
        Completed_Date,
        Note,
        Tested_By,
        Verified_By,
        Verification_Date,
        Production_Plan,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.sTI_Quality_FQC_TestReport_Heaterpuff.update({
            where: {
                id,
            },
            data: {
                private_id,
                Manufacture_Date,
                Suction_Work_Order,
                Batch_Number,
                Liquid_Batch,
                Supplier,
                Heater_Top_Cover,
                Silicone,
                Heating_Holder,
                Tube,
                Flavor,
                Number_Of_Sample,
                Defect_Quantity,
                Defect_Rate,
                Defect_Description,
                Defect_Description_Note,
                Result,
                PO_Filling_Blister_WO,
                Completed_Date,
                Note,
                Tested_By,
                Verified_By,
                Verification_Date,
                Production_Plan,
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
