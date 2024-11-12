"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const read_1 = require("./read");
const update_1 = require("./update");
const delete_1 = require("./delete");
const read_by_DateRange_1 = require("./read-by-DateRange");
const read_last_n_data_1 = require("./read-last-n-data");
const read_one_by_WO_and_Line_1 = require("./read_one_by_WO_and_Line");
const read_testedUntested_byDateRange_1 = require("./read-testedUntested-byDateRange");
const index = {
    create: create_1.create,
    read: read_1.read,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    read_latest_n_data: read_last_n_data_1.read_latest_n_data,
    read_one_by_WO_and_Line: read_one_by_WO_and_Line_1.read_one_by_WO_and_Line,
    read_testedUntested_byDateRange: read_testedUntested_byDateRange_1.read_testedUntested_byDateRange,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = index;
