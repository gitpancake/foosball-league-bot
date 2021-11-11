"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { google } = require('googleapis');
const constants_1 = require("./config/constants");
const messages_1 = require("./messages");
const games_1 = require("./games/games");
const auth_1 = require("./auth/auth");
const post_1 = require("./network/post");
async function main() {
    createScoreSlackMessage(auth_1.client);
}
function createScoreSlackMessage(auth) {
    const sheets = google.sheets({ version: 'v4', auth });
    sheets.spreadsheets.values.get({
        spreadsheetId: constants_1.spreadsheetId,
        range: constants_1.range,
    }, async (err, res) => {
        if (err)
            return console.log('The API returned an error: ' + err);
        const rows = res.data.values;
        const hasGames = rows.length;
        if (hasGames) {
            const games = (0, games_1.buildGames)(rows);
            const data = (0, messages_1.buildTemplate)({ games });
            await (0, post_1.postScores)({ data });
        }
    });
}
main().catch(console.error);
