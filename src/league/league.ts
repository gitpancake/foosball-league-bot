import { BasePoint } from '../types/BasePoint';
import { Game } from '../types/Game';
import { GameRow, TeamRow } from '../types/Row';
import { Team } from '../types/Team';

export const buildLeaguePoints = (teamData: Team[], fixtureData: Game[]) => {
	//@ts-ignore
	const basePoints: BasePoint[] = teamData.map((team) => ({
		//@ts-ignore
		name: team[TeamRow.Name] as string,
		//@ts-ignore
		members: team[TeamRow.Members].split(','),
		homeGoals: 0,
		awayGoals: 0,
		totalGoals: 0,
		goalsAgainst: 0,
		wins: 0,
		losses: 0,
	}));

	const gameInfo = fixtureData.map((game) => ({
		//@ts-ignore
		homeTeam: game[GameRow.HomeTeam],
		//@ts-ignore
		awayTeam: game[GameRow.AwayTeam],
		//@ts-ignore
		homeTeamScore: game[GameRow.HomeTeamScore],
		//@ts-ignore
		awayTeamScore: game[GameRow.AwayTeamScore],
	}));

	/**
	 * Home Team Score Calculation
	 */
	//@ts-ignore
	gameInfo.forEach((currentTeam) => {
		const team = basePoints.find((team) => team.name === currentTeam.homeTeam);

		if (!team) {
			throw new Error('Error! Unable to locate team!');
		}

		if (team.name === team.name) {
			const homeGoals = (team.homeGoals += Number(currentTeam.homeTeamScore));

			const totalGoals = (team.totalGoals += Number(currentTeam.homeTeamScore));

			const goalsAgainst = (team.goalsAgainst += Number(
				currentTeam.awayTeamScore,
			));

			const isWin =
				Number(currentTeam.homeTeamScore) > Number(currentTeam.awayTeamScore);

			const teamWithPoints = {
				...team,
				homeGoals,
				totalGoals,
				wins: isWin ? (team.wins += 1) : team.wins,
				losses: !isWin ? (team.losses += 1) : team.losses,
				goalsAgainst,
			};

			const placeToslot = basePoints.indexOf(team);

			basePoints[placeToslot] = teamWithPoints;
		}
	});

	/**
	 * Away Team Score Calculation
	 */
	gameInfo.forEach((currentTeam) => {
		const team = basePoints.find((team) => team.name === currentTeam.awayTeam);

		if (!team) {
			throw new Error('Error! Unable to locate team!');
		}

		if (team.name === team.name) {
			const awayGoals = (team.awayGoals += Number(currentTeam.awayTeamScore));

			const totalGoals = (team.totalGoals += Number(currentTeam.awayTeamScore));

			const goalsAgainst = (team.goalsAgainst += Number(
				currentTeam.homeTeamScore,
			));

			const isWin =
				Number(currentTeam.awayTeamScore) > Number(currentTeam.homeTeamScore);

			const teamWithPoints = {
				...team,
				awayGoals,
				totalGoals,
				wins: isWin ? (team.wins += 1) : team.wins,
				losses: !isWin ? (team.losses += 1) : team.losses,
				goalsAgainst,
			};

			const placeToslot = basePoints.indexOf(team);

			basePoints[placeToslot] = teamWithPoints;
		}
	});

	return basePoints
		.map((basePoint) => ({
			...basePoint,
			points: basePoint.wins * 3,
		}))
		.sort((teamA, teamB) => teamB.totalGoals - teamA.totalGoals)
		.sort((teamA, teamB) => teamB.points - teamA.points);
};
