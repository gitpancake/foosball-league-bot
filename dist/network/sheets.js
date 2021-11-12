"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSheetData = void 0;
const googleapis_1 = require("googleapis");
const constants_1 = require("../config/constants");
const sheetsAuth = (auth) => googleapis_1.google.sheets({ version: 'v4', auth });
const getSheetData = async (auth, spreadsheetId) => {
    const sheets = sheetsAuth(auth);
    const res = await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: constants_1.range,
    });
    return res.data.values;
};
exports.getSheetData = getSheetData;
