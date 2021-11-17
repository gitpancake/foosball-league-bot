import { buildTemplate } from '../messages/game';
import { buildGames } from '../games/games';
import { Game } from 'src/types/Game';
import { postToSlack } from './post';

export const postGameScores = async (gamesData: Game[]) => {
	const hasGames = gamesData && gamesData.length;

	if (hasGames) {
		const games = buildGames(gamesData);

		if (!games || games.length <= 0) {
			return;
		}

		const data = buildTemplate({ games });

		await postToSlack({ data });
	}
};
