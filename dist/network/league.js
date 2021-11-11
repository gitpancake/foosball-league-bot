"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLeagueTable = void 0;
const leagueTable_1 = require("../messages/leagueTable");
const league_1 = require("../league/league");
const post_1 = require("./post");
const postLeagueTable = async (teamData, fixtureData) => {
    if (!teamData || !teamData.length) {
        return;
    }
    const leaguePoints = (0, league_1.buildLeaguePoints)(teamData, fixtureData);
    const data = (0, leagueTable_1.buildTemplate)({ scores: leaguePoints });
    (0, post_1.postToSlack)({ data });
};
exports.postLeagueTable = postLeagueTable;
