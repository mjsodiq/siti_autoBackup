"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./create");
const read_by_userId_1 = require("./read_by_userId");
const Notifications_History = {
    create: create_1.create,
    read_by_userId: read_by_userId_1.read_by_userId,
};
exports.default = Notifications_History;
