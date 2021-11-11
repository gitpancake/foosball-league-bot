"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth/auth");
const constants_1 = require("./config/constants");
const games_1 = require("./network/games");
const sheets_1 = require("./network/sheets");
async function main() {
    createScoreSlackMessage(auth_1.client);
}
const createScoreSlackMessage = async (auth) => {
    const fixtureData = await (0, sheets_1.getSheetData)(auth, constants_1.Spreadsheet.Fixtures);
    (0, games_1.postGameScores)(fixtureData);
};
main().catch(console.error);
