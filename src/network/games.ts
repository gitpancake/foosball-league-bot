import { buildTemplate } from '../messages/game';
import { buildGames } from '../games/games';
import { Game } from 'src/types/Game';
import { postToSlack } from './post';

export const postGameScores = async (gamesData: Game[]) => {
	const hasGames = gamesData.length;

	if (hasGames) {
		const games = buildGames(gamesData);

		const data = buildTemplate({ games });

		await postToSlack({ data });
	}
};
