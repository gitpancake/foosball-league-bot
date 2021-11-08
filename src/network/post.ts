import axios, { AxiosResponse } from 'axios';
import { slackWebhookUrl } from '../config/constants';

export const postToSlack = ({
	//@ts-ignore
	data,
}): Promise<AxiosResponse<unknown, unknown>> => {
	return axios.post(slackWebhookUrl, data);
};
