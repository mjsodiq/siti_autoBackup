"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const delete_1 = require("./delete");
const read_MonthlyFindingCount_byYear_1 = require("./read-MonthlyFindingCount-byYear");
const read_by_DateRange_1 = require("./read-by-DateRange");
const read_by_filter_1 = require("./read-by-filter");
const read_by_id_1 = require("./read-by-id");
const read_findingCount_byDate_1 = require("./read-findingCount-byDate");
const read_scoreRank_byMonth_1 = require("./read-scoreRank-byMonth");
const update_1 = require("./update");
const sti_quality_all_finding_mixAudit = {
    createOne: create_1.create,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    read_by_filter: read_by_filter_1.read_by_filter,
    read_by_id: read_by_id_1.read_by_id,
    read_findingCount_byDate: read_findingCount_byDate_1.read_findingCount_byDate,
    read_scoreRank_byMonth: read_scoreRank_byMonth_1.read_scoreRank_byMonth,
    read_MonthlyFindingCount_byYear: read_MonthlyFindingCount_byYear_1.read_MonthlyFindingCount_byYear,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = sti_quality_all_finding_mixAudit;
