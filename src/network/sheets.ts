import { google } from 'googleapis';
import { range, Spreadsheet } from '../config/constants';

const sheetsAuth = (auth: any) => google.sheets({ version: 'v4', auth });

export const getSheetData = async (
	auth: any,
	spreadsheetId: Spreadsheet,
): Promise<any> => {
	const sheets = sheetsAuth(auth);

	const res = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range,
	});

	return res.data.values;
};
