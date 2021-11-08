import { client } from './auth/auth';
import { Spreadsheet } from './config/constants';
import { postGameScores } from './network/games';
import { getSheetData } from './network/sheets';

async function main() {
	createScoreSlackMessage(client);
}

const createScoreSlackMessage = async (auth: any) => {
	const fixtureData = await getSheetData(auth, Spreadsheet.Fixtures);

	postGameScores(fixtureData);
};

main().catch(console.error);
