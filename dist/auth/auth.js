"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const google_auth_library_1 = require("google-auth-library");
const keys = require('./credentials.json');
const constants_1 = require("../config/constants");
exports.client = new google_auth_library_1.JWT({
    email: keys.client_email,
    key: keys.private_key,
    scopes: [constants_1.readOnlyScope],
});
