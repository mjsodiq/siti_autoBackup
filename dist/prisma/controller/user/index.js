"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("@/prisma/controller/user/create");
const delete_1 = require("./delete");
const read_1 = require("./read");
const readOne_1 = require("./readOne");
const update_1 = require("./update");
const changePassword_1 = require("./changePassword");
const create_with_minimum_level_1 = require("./create_with_minimum_level");
const read_with_minimum_level_1 = require("./read_with_minimum_level");
const readMySelf_1 = require("./readMySelf");
const read_sti_quality_pod_fqc_list_1 = require("./read_sti_quality_pod_fqc_list");
const user = {
    create: create_1.create,
    createWithMinimumLevel: create_with_minimum_level_1.createWithMinimumLevel,
    read: read_1.read,
    readMySelf: readMySelf_1.readMySelf,
    readOne: readOne_1.readOne,
    readStiQualityPodFqcList: read_sti_quality_pod_fqc_list_1.readStiQualityPodFqcList,
    readWithMinimumLevel: read_with_minimum_level_1.readWithMinimumLevel,
    update: update_1.update,
    update_changePassword: changePassword_1.changePassword,
    delete: delete_1.deleteUser,
};
exports.default = user;
