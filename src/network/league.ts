import { buildTemplate } from '../messages/leagueTable';
import { buildLeaguePoints } from '../league/league';
import { Game } from '../types/Game';
import { Team } from '../types/Team';
import { postToSlack } from './post';

export const postLeagueTable = async (
	teamData: Team[],
	fixtureData: Game[],
) => {
	if (!teamData.length || !fixtureData.length) {
		throw new Error('Fatal - unable to process leagues');
	}

	const leaguePoints = buildLeaguePoints(teamData, fixtureData);

	const data = buildTemplate({ scores: leaguePoints });

	postToSlack({ data });
};