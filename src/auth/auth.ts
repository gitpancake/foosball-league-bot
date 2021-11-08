import { JWT } from 'google-auth-library';
const keys = require('./credentials.json');
import { readOnlyScope } from '../config/constants';

export const client = new JWT({
	email: keys.client_email,
	key: keys.private_key,
	scopes: [readOnlyScope],
});
