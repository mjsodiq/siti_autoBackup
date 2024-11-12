"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const copyFile_if_modified_1 = require("@/utils/Fs/copyFile_if_modified");
const fs_1 = __importDefault(require("fs"));
const HEATERPUFF_1 = __importDefault(require("./HEATERPUFF"));
const LIQUID_1 = __importDefault(require("./LIQUID"));
const BAREL_1 = __importDefault(require("./BAREL"));
const dir_copy = fs_1.default.realpathSync("./prisma/controller/SYNC_DB/STI/Quality/POD/FQC/TEST_RESULT");
const datasource = `${process.env.DATASHARE_FOLDER}/FQC/TEST_RESULT.xlsx`;
const destination = `${dir_copy}/TEST_RESULT.xlsx`;
const TEST_RESULT = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const need_to_update = (0, copyFile_if_modified_1.copyFile_if_modified)(datasource, destination);
        if (need_to_update) {
            yield Promise.all([(0, HEATERPUFF_1.default)(destination), (0, LIQUID_1.default)(destination), (0, BAREL_1.default)(destination)]);
        }
        else {
            console.log("No update for Quality/POD/FQC/TEST_RESULT ");
        }
    }
    catch (error) {
        console.log("Can not copy TEST_RESULT file");
    }
    console.log("Copy file 'TEST_RESULT' done");
});
exports.default = TEST_RESULT;
