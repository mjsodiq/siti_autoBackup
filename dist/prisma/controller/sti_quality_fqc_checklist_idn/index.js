"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const delete_1 = require("./delete");
const read_1 = require("./read");
const update_1 = require("./update");
const read_by_DateRange_1 = require("./read-by-DateRange");
const sti_quality_fqc_checklist_idn = {
    create: create_1.create,
    read: read_1.read,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = sti_quality_fqc_checklist_idn;
