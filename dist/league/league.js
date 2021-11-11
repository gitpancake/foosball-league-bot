"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildLeaguePoints = void 0;
const Row_1 = require("../types/Row");
const buildLeaguePoints = (teamData, fixtureData) => {
    const basePoints = teamData.map((team) => ({
        name: team[Row_1.TeamRow.Name],
        members: team[Row_1.TeamRow.Members].split(','),
        homeGoals: 0,
        awayGoals: 0,
        totalGoals: 0,
        goalsAgainst: 0,
        wins: 0,
        losses: 0,
    }));
    if (!fixtureData) {
        return basePoints;
    }
    const gameInfo = fixtureData.map((game) => ({
        homeTeam: game[Row_1.GameRow.HomeTeam],
        awayTeam: game[Row_1.GameRow.AwayTeam],
        homeTeamScore: game[Row_1.GameRow.HomeTeamScore],
        awayTeamScore: game[Row_1.GameRow.AwayTeamScore],
    }));
    gameInfo.forEach((currentTeam) => {
        const team = basePoints.find((team) => team.name === currentTeam.homeTeam);
        if (!team) {
            throw new Error('Error! Unable to locate team!');
        }
        if (team.name === team.name) {
            const homeGoals = (team.homeGoals += Number(currentTeam.homeTeamScore));
            const totalGoals = (team.totalGoals += Number(currentTeam.homeTeamScore));
            const goalsAgainst = (team.goalsAgainst += Number(currentTeam.awayTeamScore));
            const isWin = Number(currentTeam.homeTeamScore) > Number(currentTeam.awayTeamScore);
            const teamWithPoints = Object.assign(Object.assign({}, team), { homeGoals,
                totalGoals, wins: isWin ? (team.wins += 1) : team.wins, losses: !isWin ? (team.losses += 1) : team.losses, goalsAgainst });
            const placeToslot = basePoints.indexOf(team);
            basePoints[placeToslot] = teamWithPoints;
        }
    });
    gameInfo.forEach((currentTeam) => {
        const team = basePoints.find((team) => team.name === currentTeam.awayTeam);
        if (!team) {
            throw new Error('Error! Unable to locate team!');
        }
        if (team.name === team.name) {
            const awayGoals = (team.awayGoals += Number(currentTeam.awayTeamScore));
            const totalGoals = (team.totalGoals += Number(currentTeam.awayTeamScore));
            const goalsAgainst = (team.goalsAgainst += Number(currentTeam.homeTeamScore));
            const isWin = Number(currentTeam.awayTeamScore) > Number(currentTeam.homeTeamScore);
            const teamWithPoints = Object.assign(Object.assign({}, team), { awayGoals,
                totalGoals, wins: isWin ? (team.wins += 1) : team.wins, losses: !isWin ? (team.losses += 1) : team.losses, goalsAgainst });
            const placeToslot = basePoints.indexOf(team);
            basePoints[placeToslot] = teamWithPoints;
        }
    });
    return basePoints
        .map((basePoint) => (Object.assign(Object.assign({}, basePoint), { points: basePoint.wins * 3 })))
        .sort((teamA, teamB) => teamB.totalGoals - teamA.totalGoals)
        .sort((teamA, teamB) => teamB.points - teamA.points);
};
exports.buildLeaguePoints = buildLeaguePoints;
