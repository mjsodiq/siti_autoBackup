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
const index_schema_1 = require("@/prisma/controller/sti_quality_all_finding_mixAudit/index_schema");
const index_schema_2 = require("../user/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
exports.update_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_2.db_SCHEMA.shape.user_id,
    id: index_schema_1.db_SCHEMA.shape.id,
    name: index_schema_1.db_SCHEMA.shape.name.optional(),
    employee_id: index_schema_1.db_SCHEMA.shape.employee_id.optional(),
    date: index_schema_1.db_SCHEMA.shape.date.optional(),
    week: index_schema_1.db_SCHEMA.shape.week.optional(),
    shift: index_schema_1.db_SCHEMA.shape.shift.optional(),
    line: index_schema_1.db_SCHEMA.shape.line.optional(),
    section: index_schema_1.db_SCHEMA.shape.section.optional(),
    flavor: index_schema_1.db_SCHEMA.shape.flavor.optional(),
    concentration: index_schema_1.db_SCHEMA.shape.concentration.optional(),
    category: index_schema_1.db_SCHEMA.shape.category.optional(),
    description: index_schema_1.db_SCHEMA.shape.description.optional(),
    picture_finding: index_schema_1.db_SCHEMA.shape.picture_finding.url().optional(),
    quickly_action: index_schema_1.db_SCHEMA.shape.quickly_action.optional(),
    confirm: index_schema_1.db_SCHEMA.shape.confirm.optional(),
    score: index_schema_1.db_SCHEMA.shape.score.optional(),
    status: index_schema_1.db_SCHEMA.shape.status.optional(),
    improverment_action: index_schema_1.db_SCHEMA.shape.improverment_action.optional(),
    picture_improvement: index_schema_1.db_SCHEMA.shape.picture_improvement.url().optional(),
    notes: index_schema_1.db_SCHEMA.shape.notes.optional().nullable(),
});
const update = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, id, name, employee_id, date, week, shift, line, section, flavor, concentration, category, description, picture_finding, quickly_action, confirm, score, status, improverment_action, picture_improvement, notes, }) {
    console.log("ID NYA ADALAH : ", id);
    const validate_input = yield exports.update_INPUT_SCHEMA.safeParseAsync({
        sender,
        id,
        name,
        employee_id,
        date,
        week,
        shift,
        line,
        section,
        flavor,
        concentration,
        category,
        description,
        picture_finding,
        quickly_action,
        confirm,
        score,
        status,
        improverment_action,
        picture_improvement,
        notes,
    });
    console.log(validate_input);
    if (!validate_input.success) {
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    }
    try {
        const currentDate = new Date();
        const data = yield client_1.db.sTI_Quality_All_Finding_MixAudit.update({
            where: {
                id,
            },
            data: {
                name,
                employee_id,
                date,
                week,
                shift,
                line,
                section,
                flavor,
                concentration,
                category,
                description,
                picture_finding,
                quickly_action,
                confirm,
                score,
                status,
                improverment_action,
                picture_improvement,
                updatedAt: currentDate,
                updatedBy: sender,
                notes,
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
