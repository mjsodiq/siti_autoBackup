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
exports.read_by_filter = exports.read_by_filter_INPUT_SCHEMA = void 0;
const index_1 = __importDefault(require("@/helper/index"));
const client_1 = require("@/prisma/client");
const MyLogger_1 = __importDefault(require("@/utils/MyLogger"));
const index_schema_1 = require("../user/index_schema");
const zod_1 = require("zod");
exports.read_by_filter_INPUT_SCHEMA = zod_1.z.object({
    sender: index_schema_1.db_SCHEMA.shape.user_id,
    name: zod_1.z.array(zod_1.z.string()).optional(),
    employeeID: zod_1.z.array(zod_1.z.string()).optional(),
    startDate: zod_1.z.date().optional(),
    endDate: zod_1.z.date().optional(),
    week: zod_1.z.array(zod_1.z.string()).optional(),
    shift: zod_1.z.array(zod_1.z.string()).optional(),
    line: zod_1.z.array(zod_1.z.string()).optional(),
    section: zod_1.z.array(zod_1.z.string()).optional(),
    flavor: zod_1.z.array(zod_1.z.string()).optional(),
    concentration: zod_1.z.array(zod_1.z.string()).optional(),
    category: zod_1.z.array(zod_1.z.string()).optional(),
    confirm: zod_1.z.array(zod_1.z.string()).optional(),
    score: zod_1.z.array(zod_1.z.number()).optional(),
    status: zod_1.z.array(zod_1.z.string()).optional(),
});
const read_by_filter = (_a) => __awaiter(void 0, [_a], void 0, function* ({ sender, name, employeeID, startDate, endDate, shift, week, line, section, flavor, concentration, category, confirm, score, status, }) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const validate_input = yield exports.read_by_filter_INPUT_SCHEMA.safeParseAsync({
        sender,
        name,
        employeeID,
        startDate,
        endDate,
        week,
        shift,
        line,
        section,
        flavor,
        concentration,
        category,
        confirm,
        score,
        status,
    });
    if (!validate_input.success)
        return index_1.default.db_response.error_zod_validation_input(validate_input.error, []);
    try {
        const where = {};
        if ((_b = validate_input.data.name) === null || _b === void 0 ? void 0 : _b.length) {
            where.name = { in: validate_input.data.name };
        }
        if ((_c = validate_input.data.employeeID) === null || _c === void 0 ? void 0 : _c.length) {
            where.employee_id = { in: validate_input.data.employeeID };
        }
        if (validate_input.data.startDate && validate_input.data.endDate) {
            where.date = {
                gte: validate_input.data.startDate,
                lte: validate_input.data.endDate,
            };
        }
        if (validate_input.data.startDate && !validate_input.data.endDate) {
            where.date = {
                gte: validate_input.data.startDate,
            };
        }
        if (!validate_input.data.startDate && validate_input.data.endDate) {
            where.date = {
                lte: validate_input.data.endDate,
            };
        }
        if ((_d = validate_input.data.week) === null || _d === void 0 ? void 0 : _d.length) {
            where.employee_id = { in: validate_input.data.week };
        }
        if ((_e = validate_input.data.shift) === null || _e === void 0 ? void 0 : _e.length) {
            where.shift = { in: validate_input.data.shift };
        }
        if ((_f = validate_input.data.line) === null || _f === void 0 ? void 0 : _f.length) {
            where.line = { in: validate_input.data.line };
        }
        if ((_g = validate_input.data.section) === null || _g === void 0 ? void 0 : _g.length) {
            where.section = { in: validate_input.data.section };
        }
        if ((_h = validate_input.data.flavor) === null || _h === void 0 ? void 0 : _h.length) {
            where.flavor = { in: validate_input.data.flavor };
        }
        if ((_j = validate_input.data.concentration) === null || _j === void 0 ? void 0 : _j.length) {
            where.concentration = { in: validate_input.data.concentration };
        }
        if ((_k = validate_input.data.category) === null || _k === void 0 ? void 0 : _k.length) {
            where.category = { in: validate_input.data.category };
        }
        if ((_l = validate_input.data.confirm) === null || _l === void 0 ? void 0 : _l.length) {
            where.confirm = { in: validate_input.data.confirm };
        }
        if ((_m = validate_input.data.score) === null || _m === void 0 ? void 0 : _m.length) {
            where.score = { in: validate_input.data.score };
        }
        if ((_o = validate_input.data.status) === null || _o === void 0 ? void 0 : _o.length) {
            where.status = { in: validate_input.data.status };
        }
        console.log(where);
        const response = yield client_1.db.sTI_Quality_All_Finding_MixAudit.findMany({
            where: Object.assign({}, where),
            orderBy: {
                createdAt: "desc",
            },
        });
        return index_1.default.db_response.success(response);
    }
    catch (error) {
        MyLogger_1.default.log(error);
        return index_1.default.db_response.error_internalServer([]);
    }
});
exports.read_by_filter = read_by_filter;
