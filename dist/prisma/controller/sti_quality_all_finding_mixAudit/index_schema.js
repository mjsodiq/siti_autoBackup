"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string(),
    employee_id: zod_1.z.string(),
    date: zod_1.z.date(),
    week: zod_1.z.number(),
    shift: zod_1.z.string(),
    line: zod_1.z.string(),
    section: zod_1.z.string(),
    flavor: zod_1.z.string(),
    concentration: zod_1.z.string(),
    category: zod_1.z.string(),
    description: zod_1.z.string(),
    picture_finding: zod_1.z.string(),
    quickly_action: zod_1.z.string(),
    confirm: zod_1.z.string(),
    score: zod_1.z.number(),
    status: zod_1.z.string(),
    improverment_action: zod_1.z.string(),
    picture_improvement: zod_1.z.string(),
    notes: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: zod_1.z.string(),
    updatedAt: zod_1.z.date(),
    updatedBy: zod_1.z.string(),
    Verification_Date: zod_1.z.date(),
    Verified_By: zod_1.z.string(),
});
