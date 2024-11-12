"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartDateEndDate_ofMonth_fromDate = void 0;
const getStartDateEndDate_ofMonth_fromDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);
    return {
        startDate,
        endDate,
    };
};
exports.getStartDateEndDate_ofMonth_fromDate = getStartDateEndDate_ofMonth_fromDate;
