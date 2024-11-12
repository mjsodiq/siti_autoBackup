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
const zod_1 = require("zod");
const client_1 = require("@/prisma/client");
const index_schema_1 = require("@/prisma/controller/sti_quality_fqc_checklist_idn/index_schema");
const index_1 = __importDefault(require("@/helper/index"));
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
exports.update_INPUT_SCHEMA = zod_1.z.object({
    id: index_schema_1.db_SCHEMA.shape.id,
    private_id: index_schema_1.db_SCHEMA.shape.private_id.optional(),
    RJR_Verification_Flavor: index_schema_1.db_SCHEMA.shape.RJR_Verification_Flavor.optional(),
    Verification_Lot: index_schema_1.db_SCHEMA.shape.Verification_Lot.optional(),
    Supplier: index_schema_1.db_SCHEMA.shape.Supplier.optional(),
    Heater_Top_Cover: index_schema_1.db_SCHEMA.shape.Heater_Top_Cover.optional(),
    Heating_Holder: index_schema_1.db_SCHEMA.shape.Heating_Holder.optional(),
    Silicone_1: index_schema_1.db_SCHEMA.shape.Silicone_1.optional(),
    Tube: index_schema_1.db_SCHEMA.shape.Tube.optional(),
    Plastic_Silicone_Qty: index_schema_1.db_SCHEMA.shape.Plastic_Silicone_Qty.optional(),
    Thimble: index_schema_1.db_SCHEMA.shape.Thimble.optional(),
    Silicone_3: index_schema_1.db_SCHEMA.shape.Silicone_3.optional(),
    Silicone_2: index_schema_1.db_SCHEMA.shape.Silicone_2.optional(),
    Bottom_Cover: index_schema_1.db_SCHEMA.shape.Bottom_Cover.optional(),
    Ceramic_Heater: index_schema_1.db_SCHEMA.shape.Ceramic_Heater.optional(),
    Nomor_Bahan_Produk_Jadi: index_schema_1.db_SCHEMA.shape.Nomor_Bahan_Produk_Jadi.optional(),
    Pengkodean_Bahan: index_schema_1.db_SCHEMA.shape.Pengkodean_Bahan.optional(),
    Heater_puff_WO: index_schema_1.db_SCHEMA.shape.Heater_puff_WO.optional(),
    Qty: index_schema_1.db_SCHEMA.shape.Qty.optional(),
    PO_Filling_Blister_WO: index_schema_1.db_SCHEMA.shape.PO_Filling_Blister_WO.optional(),
    Rasa_Ekstra: index_schema_1.db_SCHEMA.shape.Rasa_Ekstra.optional(),
    Remark: index_schema_1.db_SCHEMA.shape.Remark.optional(),
    Prod_Plan: index_schema_1.db_SCHEMA.shape.Prod_Plan.optional(),
    Taken_From_IQC_status: index_schema_1.db_SCHEMA.shape.Taken_From_IQC_status.optional(),
    Taken_From_IQC_date: index_schema_1.db_SCHEMA.shape.Taken_From_IQC_date.optional(),
    Put_On_Production_status: index_schema_1.db_SCHEMA.shape.Put_On_Production_status.optional(),
    Put_On_Production_date: index_schema_1.db_SCHEMA.shape.Put_On_Production_date.optional(),
    Sample_In_status: index_schema_1.db_SCHEMA.shape.Sample_In_status.optional(),
    Sample_In_date: index_schema_1.db_SCHEMA.shape.Sample_In_date.optional(),
    Sample_Tested_status: index_schema_1.db_SCHEMA.shape.Sample_Tested_status.optional(),
    Sample_Tested_date: index_schema_1.db_SCHEMA.shape.Sample_Tested_date.optional(),
    Sample_Test_Result: index_schema_1.db_SCHEMA.shape.Sample_Test_Result.optional(),
    Tester: index_schema_1.db_SCHEMA.shape.Tester.optional(),
    Tester_Plan: index_schema_1.db_SCHEMA.shape.Tester_Plan.optional(),
    Verification_status: index_schema_1.db_SCHEMA.shape.Verification_status.optional(),
    Verification_date: index_schema_1.db_SCHEMA.shape.Verification_date.optional(),
    Verificator: index_schema_1.db_SCHEMA.shape.Verificator.optional(),
    Notes: index_schema_1.db_SCHEMA.shape.Notes.optional(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ id, private_id, RJR_Verification_Flavor, Verification_Lot, Supplier, Heater_Top_Cover, Heating_Holder, Silicone_1, Tube, Plastic_Silicone_Qty, Thimble, Silicone_3, Silicone_2, Bottom_Cover, Ceramic_Heater, Nomor_Bahan_Produk_Jadi, Pengkodean_Bahan, Heater_puff_WO, Qty, PO_Filling_Blister_WO, Rasa_Ekstra, Remark, Prod_Plan, Taken_From_IQC_status, Taken_From_IQC_date, Put_On_Production_status, Put_On_Production_date, Sample_In_status, Sample_In_date, Sample_Tested_status, Sample_Tested_date, Sample_Test_Result, Tester, Tester_Plan, Verification_status, Verification_date, Verificator, Notes, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        id,
        private_id,
        RJR_Verification_Flavor,
        Verification_Lot,
        Supplier,
        Heater_Top_Cover,
        Heating_Holder,
        Silicone_1,
        Tube,
        Plastic_Silicone_Qty,
        Thimble,
        Silicone_3,
        Silicone_2,
        Bottom_Cover,
        Ceramic_Heater,
        Nomor_Bahan_Produk_Jadi,
        Pengkodean_Bahan,
        Heater_puff_WO,
        Qty,
        PO_Filling_Blister_WO,
        Rasa_Ekstra,
        Remark,
        Prod_Plan,
        Taken_From_IQC_status,
        Taken_From_IQC_date,
        Put_On_Production_status,
        Put_On_Production_date,
        Sample_In_status,
        Sample_In_date,
        Sample_Tested_status,
        Sample_Tested_date,
        Sample_Test_Result,
        Tester,
        Tester_Plan,
        Verification_status,
        Verification_date,
        Verificator,
        Notes,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    try {
        const data = yield client_1.db.fQC_Checklist_IDN.update({
            where: {
                id,
            },
            data: {
                private_id,
                RJR_Verification_Flavor,
                Verification_Lot,
                Supplier,
                Heater_Top_Cover,
                Heating_Holder,
                Silicone_1,
                Tube,
                Plastic_Silicone_Qty,
                Thimble,
                Silicone_3,
                Silicone_2,
                Bottom_Cover,
                Ceramic_Heater,
                Nomor_Bahan_Produk_Jadi,
                Pengkodean_Bahan,
                Heater_puff_WO,
                Qty,
                PO_Filling_Blister_WO,
                Rasa_Ekstra,
                Remark,
                Prod_Plan,
                Taken_From_IQC_status,
                Taken_From_IQC_date,
                Put_On_Production_status,
                Put_On_Production_date,
                Sample_In_status,
                Sample_In_date,
                Sample_Tested_status,
                Sample_Tested_date,
                Sample_Test_Result,
                Tester,
                Tester_Plan,
                Verification_status,
                Verification_date,
                Verificator,
                Notes,
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
