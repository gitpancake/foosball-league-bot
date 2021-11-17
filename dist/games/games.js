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
        if (!row.length)
            return false;
        const gameTime = new Date(row[Row_1.GameRow.Timestamp]);
        const timeDifference = 1;
        const offsetDateTime = (0, date_fns_1.addHours)(new Date(), timeDifference);
        const timeDifferenceInMinutes = (0, date_fns_1.differenceInMinutes)(offsetDateTime, gameTime);
        return timeDifferenceInMinutes <= 5 && timeDifferenceInMinutes >= 0;
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
