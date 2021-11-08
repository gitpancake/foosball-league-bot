import { Game } from '../types/Game';
import { GameRow } from '../types/Row';
import { format } from 'date-fns';

export const buildGames = (rows: any[]): Game[] => {
	const games: Game[] = rows.map((row) => {
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
