"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("./auth/auth");
const constants_1 = require("./config/constants");
const league_1 = require("./network/league");
const sheets_1 = require("./network/sheets");
async function main() {
    createLeagueSlackPost(auth_1.client);
}
const createLeagueSlackPost = async (auth) => {
    const teamData = await (0, sheets_1.getSheetData)(auth, constants_1.Spreadsheet.Teams);
    const fixtureData = await (0, sheets_1.getSheetData)(auth, constants_1.Spreadsheet.Fixtures);
    (0, league_1.postLeagueTable)(teamData, fixtureData);
};
main().catch(console.error);
