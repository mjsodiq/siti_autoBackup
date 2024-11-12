"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = exports.user_id = void 0;
const zod_1 = require("zod");
exports.user_id = zod_1.z.string().min(3, "User ID must contain 3 character");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.string(),
    user_id: exports.user_id,
    username: zod_1.z.string(),
    password: zod_1.z.string().min(3),
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    division: zod_1.z.string(),
    section: zod_1.z.string(),
    position: zod_1.z.string(),
    contact: zod_1.z.string(),
    report_to: zod_1.z.string(),
    notes: zod_1.z.string(),
    authority_level: zod_1.z.number(),
    isStillActive: zod_1.z.boolean(),
    createdAt: zod_1.z.date(),
    createdBy: exports.user_id,
    updatedAt: zod_1.z.date(),
    updatedBy: exports.user_id,
});
