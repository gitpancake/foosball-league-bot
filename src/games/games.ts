import { Game } from '../types/Game';
import { GameRow } from '../types/Row';
import { format } from 'date-fns';

export const buildGames = (rows: any[]): Game[] => {
	if (!rows || rows.length <= 0) {
		return [];
	}

	const gamesFromTheCurrentHour = rows.filter((row) => {
		const theDatetimeRightNow = format(new Date(), 'yyyy-MM-dd HH');
		const theGameTime = format(
			new Date(row[GameRow.Timestamp]),
			'yyyy-MM-dd HH',
		);

		return theDatetimeRightNow === theGameTime;
	});

	const games: Game[] = gamesFromTheCurrentHour.map((row) => {
		const formattedGameDate = format(new Date(row[GameRow.Timestamp]), 'HH:mm');

		return {
			homeTeam: row[GameRow.HomeTeam],
			awayTeam: row[GameRow.AwayTeam],
			homeTeamScore: row[GameRow.HomeTeamScore],
			awayTeamScore: row[GameRow.AwayTeamScore],
			highlight: row[GameRow.Highlight],
			timestamp: formattedGameDate,
		};
	});

	return games;
};
