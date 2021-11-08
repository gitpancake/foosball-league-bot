import { BasePoint } from 'src/types/BasePoint';

const buildHeaderBlock = () => ({
	type: 'section',
	text: {
		type: 'mrkdwn',
		text: '*Vandebron Foosball League Table* \n The latest scores and team standings. \n GS = Goals Scored, GA = Goals Against \n Points = (Wins * 3)',
	},
	accessory: {
		type: 'image',
		image_url: 'https://i.imgur.com/H9B28D8.png',
		alt_text: 'calendar thumbnail',
	},
});

const buildDividerBlock = () => ({
	type: 'divider',
});

const buildTeamScoreBlock = ({
	goalsAgainst,
	totalGoals,
	wins,
	losses,
	name,
	members,
	points,
	position,
}: BasePoint & { position: number }) => ({
	type: 'section',
	text: {
		type: 'mrkdwn',
		text: `*${position}. - ${name}* | ${members}\n *Points:* ${points}, *Wins:* ${wins}, *Losses:* ${losses}, *GS:* ${totalGoals}, *GA:* ${goalsAgainst}`,
	},
});

interface LeagueTableProps {
	scores: BasePoint[];
}

export const buildTemplate = ({ scores }: LeagueTableProps) => {
	const headerBlock = buildHeaderBlock();
	const dividerBlock = buildDividerBlock();
	const teamScoreBlocks = scores.map((score, index) =>
		buildTeamScoreBlock({ ...score, position: index + 1 }),
	);

	const leagueTable = [headerBlock, dividerBlock, ...teamScoreBlocks];

	const template = { blocks: leagueTable };

	return template;
};
