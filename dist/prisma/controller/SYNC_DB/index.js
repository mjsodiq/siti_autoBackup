"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const IDN_1 = require("./STI/Datasource/POD/IDN");
const RJR_1 = require("./STI/Datasource/POD/RJR");
const MixAudit_1 = require("./STI/Quality/ALL/Finding/MixAudit");
const TEST_RESULT_1 = __importDefault(require("./STI/Quality/POD/FQC/TEST_RESULT"));
const SYNC_DB = {
    STI: {
        DATASOURCE: {
            POD: {
                IDN: IDN_1.IDN,
                RJR: RJR_1.RJR,
            },
        },
        QUALITY: {
            POD: {
                FQC: {
                    TEST_RESULT: TEST_RESULT_1.default,
                },
            },
            ALL: {
                Finding: {
                    MixAudit: MixAudit_1.MixAudit,
                },
            },
        },
    },
};
exports.default = SYNC_DB;
