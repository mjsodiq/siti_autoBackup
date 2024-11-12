"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonthName_from_MonthIndex = void 0;
const MyDate_1 = __importDefault(require("@/constants/MyDate"));
const getMonthName_from_MonthIndex = (monthIndex, mode = "long") => {
    const newMonthIndex = monthIndex % 12;
    const monthName = MyDate_1.default.Date.month_list[newMonthIndex].lang.eng;
    if (mode == "short") {
        return monthName.slice(0, 3);
    }
    else {
        return monthName;
    }
};
exports.getMonthName_from_MonthIndex = getMonthName_from_MonthIndex;
