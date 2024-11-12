"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db_SCHEMA = void 0;
const index_schema_1 = require("@/prisma/controller/user/index_schema");
const zod_1 = require("zod");
exports.db_SCHEMA = zod_1.z.object({
    id: zod_1.z.string(),
    type: zod_1.z.string(),
    sender: index_schema_1.db_SCHEMA.shape.user_id,
    target: zod_1.z.string(),
    title: zod_1.z.string(),
    message: zod_1.z.string(),
    createdAt: zod_1.z.date(),
    createdBy: index_schema_1.db_SCHEMA.shape.user_id,
});
