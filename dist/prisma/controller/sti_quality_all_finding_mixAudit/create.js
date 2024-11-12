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
const index_schema_1 = require("@/prisma/controller/sti_quality_all_finding_mixAudit/index_schema");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const zod_1 = require("zod");
const index_schema_2 = require("../user/index_schema");
exports.create_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_2.db_SCHEMA.shape.user_id,
    name: index_schema_1.db_SCHEMA.shape.name.optional().nullable(),
    employee_id: index_schema_1.db_SCHEMA.shape.employee_id.optional().nullable(),
    date: index_schema_1.db_SCHEMA.shape.date.optional().nullable(),
    week: index_schema_1.db_SCHEMA.shape.week.optional().nullable(),
    shift: index_schema_1.db_SCHEMA.shape.shift.optional().nullable(),
    line: index_schema_1.db_SCHEMA.shape.line.optional().nullable(),
    section: index_schema_1.db_SCHEMA.shape.section.optional().nullable(),
    flavor: index_schema_1.db_SCHEMA.shape.flavor.optional().nullable(),
    concentration: index_schema_1.db_SCHEMA.shape.concentration.optional().nullable(),
    category: index_schema_1.db_SCHEMA.shape.category.optional().nullable(),
    description: index_schema_1.db_SCHEMA.shape.description.optional().nullable(),
    picture_finding: index_schema_1.db_SCHEMA.shape.picture_finding.optional().nullable(),
    quickly_action: index_schema_1.db_SCHEMA.shape.quickly_action.optional().nullable(),
    confirm: index_schema_1.db_SCHEMA.shape.confirm.optional().nullable(),
    score: index_schema_1.db_SCHEMA.shape.score.optional().nullable(),
    status: index_schema_1.db_SCHEMA.shape.status.optional().nullable(),
    improverment_action: index_schema_1.db_SCHEMA.shape.improverment_action.optional().nullable(),
    picture_improvement: index_schema_1.db_SCHEMA.shape.picture_improvement.optional().nullable(),
    notes: index_schema_1.db_SCHEMA.shape.notes.optional().nullable(),
});
const create = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, name, employee_id, date, week, shift, line, section, flavor, concentration, category, description, picture_finding, quickly_action, confirm, score, status, improverment_action, picture_improvement, }) {
    const validate_input = yield exports.create_INPUT_SCHEMA.safeParseAsync({
        sender,
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
    });
    if (!validate_input.success) {
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, null);
    }
    try {
        const currentDate = new Date();
        const id = `${sender}_${currentDate.getTime()}`;
        const data = yield client_1.db.sTI_Quality_All_Finding_MixAudit.create({
            data: {
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
                createdAt: currentDate,
                createdBy: sender,
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
