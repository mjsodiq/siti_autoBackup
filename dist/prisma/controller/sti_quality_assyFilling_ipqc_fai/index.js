"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const delete_1 = require("./delete");
const read_1 = require("./read");
const update_1 = require("./update");
const read_by_DateRange_1 = require("./read-by-DateRange");
const read_by_filter_1 = require("./read-by-filter");
const readOne_by_ID_1 = require("./readOne-by-ID");
const sti_quality_assyFilling_ipqc_fai = {
    create: create_1.create,
    read: read_1.read,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    read_by_filter: read_by_filter_1.read_by_filter,
    readOne_by_ID: readOne_by_ID_1.readOne_by_ID,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = sti_quality_assyFilling_ipqc_fai;
