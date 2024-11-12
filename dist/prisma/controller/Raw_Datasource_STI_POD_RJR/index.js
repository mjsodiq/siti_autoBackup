"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const delete_1 = require("./delete");
const read_1 = require("./read");
const read_all_ProductionOrderNumber_1 = require("./read-all-ProductionOrderNumber");
const read_by_DateRange_1 = require("./read-by-DateRange");
const read_filter_by_ProductionOrderNumber_and_TanggalMulai_1 = require("./read-filter-by-ProductionOrderNumber_and_TanggalMulai");
const read_last_n_data_1 = require("./read-last-n-data");
const update_1 = require("./update");
const Raw_Datasource_STI_POD_RJR = {
    create: create_1.create,
    read: read_1.read,
    read_all_ProductionOrderNumber: read_all_ProductionOrderNumber_1.read_all_ProductionOrderNumber,
    read_by_dateRange: read_by_DateRange_1.read_by_dateRange,
    read_latest_n_data: read_last_n_data_1.read_latest_n_data,
    read_filter_by_ProductionOrderNumber_and_TanggalMulai: read_filter_by_ProductionOrderNumber_and_TanggalMulai_1.read_filter_by_ProductionOrderNumber_and_TanggalMulai,
    update: update_1.update,
    delete: delete_1.deleteData,
};
exports.default = Raw_Datasource_STI_POD_RJR;
