import { Game } from '../types/Game';
import { GameRow } from '../types/Row';
import { format, addHours, differenceInMinutes } from 'date-fns';

export const buildGames = (rows: any[]): Game[] => {
	if (!rows || rows.length <= 0) {
		return [];
	}

	const gamesFromTheCurrentHour = rows.filter((row) => {
		if (!row.length) return false;

		const gameTime = new Date(row[GameRow.Timestamp]);

		const timeDifference =
			Number(format(gameTime, 'HH')) - Number(format(new Date(), 'HH'));

		const offsetDateTime = addHours(new Date(), timeDifference);

		const timeDifferenceInMinutes = differenceInMinutes(
			offsetDateTime,
			gameTime,
		);

		return timeDifferenceInMinutes <= 5 && timeDifferenceInMinutes >= 0;
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
