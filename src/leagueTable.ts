import { client } from './auth/auth';
import { Spreadsheet } from './config/constants';
import { postLeagueTable } from './network/league';
import { getSheetData } from './network/sheets';
import { Game } from './types/Game';
import { Team } from './types/Team';

async function main() {
	createLeagueSlackPost(client);
}

const createLeagueSlackPost = async (auth: any) => {
	const teamData: Team[] = await getSheetData(auth, Spreadsheet.Teams);
	const fixtureData: Game[] = await getSheetData(auth, Spreadsheet.Fixtures);

	postLeagueTable(teamData, fixtureData);
};

main().catch(console.error);
