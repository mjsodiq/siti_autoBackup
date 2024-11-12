"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const read_1 = require("./read");
const read_by_DateRange_1 = require("./read-by-DateRange");
const update_1 = require("./update");
const delete_1 = require("./delete");
const Raw_Datasource_STI_POD_IDN = {
    create: create_1.create,
    read: read_1.read,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = Raw_Datasource_STI_POD_IDN;
