"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildGames = void 0;
const Row_1 = require("../types/Row");
const date_fns_1 = require("date-fns");
const buildGames = (rows) => {
    if (!rows || rows.length <= 0) {
        return [];
    }
    const gamesFromTheCurrentHour = rows.filter((row) => {
        const theDatetimeRightNow = (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd HH');
        const theGameTime = (0, date_fns_1.format)(new Date(row[Row_1.GameRow.Timestamp]), 'yyyy-MM-dd HH');
        return theDatetimeRightNow === theGameTime;
    });
    const games = gamesFromTheCurrentHour.map((row) => {
        const formattedGameDate = (0, date_fns_1.format)(new Date(row[Row_1.GameRow.Timestamp]), 'HH:mm');
        return {
            homeTeam: row[Row_1.GameRow.HomeTeam],
            awayTeam: row[Row_1.GameRow.AwayTeam],
            homeTeamScore: row[Row_1.GameRow.HomeTeamScore],
            awayTeamScore: row[Row_1.GameRow.AwayTeamScore],
            highlight: row[Row_1.GameRow.Highlight],
            timestamp: formattedGameDate,
        };
    });
    return games;
};
exports.buildGames = buildGames;
