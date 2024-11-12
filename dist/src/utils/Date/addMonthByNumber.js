"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMonthByNumber = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const addMonthByNumber = ({ currentMonth, currentYear, addMonthBy }) => {
    const date = new Date(currentYear, currentMonth + addMonthBy, 1);
    return {
        month: (0, dayjs_1.default)(date).month(),
        year: (0, dayjs_1.default)(date).year(),
    };
};
exports.addMonthByNumber = addMonthByNumber;
