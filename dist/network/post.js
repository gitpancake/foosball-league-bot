"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postToSlack = void 0;
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../config/constants");
const postToSlack = ({ data, }) => {
    return axios_1.default.post(constants_1.slackWebhookUrl, data);
};
exports.postToSlack = postToSlack;
