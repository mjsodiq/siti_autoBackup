"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const read_1 = require("./read");
const update_1 = require("./update");
const delete_1 = require("./delete");
const read_by_DateRange_1 = require("./read-by-DateRange");
const index = {
    create: create_1.create,
    read: read_1.read,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = index;
