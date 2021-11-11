'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const auth_1 = require('./auth/auth');
const games_1 = require('./network/games');
const sheets_1 = require('./network/sheets');
async function main() {
	createScoreSlackMessage(auth_1.client);
}
const createScoreSlackMessage = (auth) => {
	(0, sheets_1.getFixtureSheetData)(games_1.postGameScores, auth);
};
main().catch(console.error);
