import { google } from 'googleapis';
import { range, Spreadsheet } from '../config/constants';

export const getSheetData = async (
	auth: any,
	spreadsheetId: Spreadsheet,
): Promise<any> => {
	const sheets = google.sheets({ version: 'v4', auth });

	const res = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range,
	});

	return res.data.values;
};
