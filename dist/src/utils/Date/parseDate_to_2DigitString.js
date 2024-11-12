"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate_to_2DigitString = void 0;
const parseDate_to_2DigitString = (date) => {
    return {
        date: `0${date.getDate()}`.slice(-2),
        month: `0${date.getMonth() + 1}`.slice(-2),
        year: `${date.getFullYear()}`,
        hour: `0${date.getHours()}`.slice(-2),
        minute: `0${date.getMinutes()}`.slice(-2),
        second: `0${date.getSeconds()}`.slice(-2),
        millisecond: `0${date.getMilliseconds()}`.slice(-2),
    };
};
exports.parseDate_to_2DigitString = parseDate_to_2DigitString;
