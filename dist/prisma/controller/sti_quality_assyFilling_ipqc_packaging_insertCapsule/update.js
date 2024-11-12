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
const index_schema_1 = require("@/prisma/controller/sti_quality_assyFilling_ipqc_packaging_insertCapsule/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_2 = require("../user/index_schema");
exports.update_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_2.user_id,
    id: index_schema_1.db_SCHEMA.shape.id,
    ipqc_verification: index_schema_1.db_SCHEMA.shape.ipqc_verification.optional(),
    private_id: index_schema_1.db_SCHEMA.shape.private_id.optional(),
    time_insert_capsule: index_schema_1.db_SCHEMA.shape.time_insert_capsule.optional(),
    line_packaging: index_schema_1.db_SCHEMA.shape.line_packaging.optional(),
    pack_machine_number: index_schema_1.db_SCHEMA.shape.pack_machine_number.optional(),
    operator_name: index_schema_1.db_SCHEMA.shape.operator_name.optional(),
    wo_packaging: index_schema_1.db_SCHEMA.shape.wo_packaging.optional(),
    wo_assembly: index_schema_1.db_SCHEMA.shape.wo_assembly.optional(),
    filling_line: index_schema_1.db_SCHEMA.shape.filling_line.optional(),
    pallet_number: index_schema_1.db_SCHEMA.shape.pallet_number.optional(),
    quantity_capsule: index_schema_1.db_SCHEMA.shape.quantity_capsule.optional(),
    quantity_NG: index_schema_1.db_SCHEMA.shape.quantity_NG.optional(),
    NG_Reverse: index_schema_1.db_SCHEMA.shape.NG_Reverse.optional(),
    NG_Foreign: index_schema_1.db_SCHEMA.shape.NG_Foreign.optional(),
    NG_BrokenCapsule: index_schema_1.db_SCHEMA.shape.NG_BrokenCapsule.optional(),
    NG_WrongCode: index_schema_1.db_SCHEMA.shape.NG_WrongCode.optional(),
    NG_BrokenPVC: index_schema_1.db_SCHEMA.shape.NG_BrokenPVC.optional(),
    NG_BrokenAlumuniumFilm: index_schema_1.db_SCHEMA.shape.NG_BrokenAlumuniumFilm.optional(),
    NG_ForeignInTube: index_schema_1.db_SCHEMA.shape.NG_ForeignInTube.optional(),
    NG_CodeAtTube: index_schema_1.db_SCHEMA.shape.NG_CodeAtTube.optional(),
    NG_LeakEliquid: index_schema_1.db_SCHEMA.shape.NG_LeakEliquid.optional(),
    NG_DamageTube: index_schema_1.db_SCHEMA.shape.NG_DamageTube.optional(),
    NG_HadapTerbalik: index_schema_1.db_SCHEMA.shape.NG_HadapTerbalik.optional(),
    NG_MixFlavor: index_schema_1.db_SCHEMA.shape.NG_MixFlavor.optional(),
    NG_MixConcentration: index_schema_1.db_SCHEMA.shape.NG_MixConcentration.optional(),
    NG_Missjudge: index_schema_1.db_SCHEMA.shape.NG_Missjudge.optional(),
    NG_NoLaserCode: index_schema_1.db_SCHEMA.shape.NG_NoLaserCode.optional(),
    notes: index_schema_1.db_SCHEMA.shape.notes.optional(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, id, private_id, line_packaging, pack_machine_number, operator_name, wo_packaging, wo_assembly, filling_line, pallet_number, quantity_capsule, quantity_NG, NG_Reverse, NG_Foreign, NG_BrokenCapsule, NG_WrongCode, NG_BrokenPVC, NG_BrokenAlumuniumFilm, NG_ForeignInTube, NG_CodeAtTube, NG_LeakEliquid, NG_DamageTube, NG_HadapTerbalik, NG_MixFlavor, NG_MixConcentration, NG_Missjudge, NG_NoLaserCode, time_insert_capsule, ipqc_verification, notes, }) {
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        sender,
        id,
        private_id,
        line_packaging,
        pack_machine_number,
        operator_name,
        wo_packaging,
        wo_assembly,
        filling_line,
        pallet_number,
        quantity_capsule,
        quantity_NG,
        NG_Reverse,
        NG_Foreign,
        NG_BrokenCapsule,
        NG_WrongCode,
        NG_BrokenPVC,
        NG_BrokenAlumuniumFilm,
        NG_ForeignInTube,
        NG_CodeAtTube,
        NG_LeakEliquid,
        NG_DamageTube,
        NG_HadapTerbalik,
        NG_MixFlavor,
        NG_MixConcentration,
        NG_Missjudge,
        NG_NoLaserCode,
        time_insert_capsule,
        ipqc_verification,
        notes,
    });
    if (!validate_input.success) {
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    }
    try {
        const currentDate = new Date();
        const data = yield client_1.db.sTI_Quality_AssyFilling_IPQC_Packaging_InsertCapsule.update({
            where: {
                id,
            },
            data: {
                private_id,
                line_packaging,
                pack_machine_number,
                operator_name,
                wo_packaging,
                wo_assembly,
                filling_line,
                pallet_number,
                quantity_capsule,
                quantity_NG,
                NG_Reverse,
                NG_Foreign,
                NG_BrokenCapsule,
                NG_WrongCode,
                NG_BrokenPVC,
                NG_BrokenAlumuniumFilm,
                NG_ForeignInTube,
                NG_CodeAtTube,
                NG_LeakEliquid,
                NG_DamageTube,
                NG_HadapTerbalik,
                NG_MixFlavor,
                NG_MixConcentration,
                NG_Missjudge,
                NG_NoLaserCode,
                time_insert_capsule,
                ipqc_verification,
                notes,
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
