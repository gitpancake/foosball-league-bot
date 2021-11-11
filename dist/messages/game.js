"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTemplate = void 0;
const buildScoreSection = (game) => {
    const buildScoreBlock = ({ homeTeam, awayTeam, homeTeamScore, awayTeamScore, timestamp, highlight, }) => {
        const scoreText = () => {
            if (Number(homeTeamScore) > Number(awayTeamScore)) {
                return `:tada:  "_${highlight}_" \n\n *${homeTeam}* win against *${awayTeam}* \n\n ${homeTeamScore} : ${awayTeamScore}`;
            }
            else if (Number(homeTeamScore) < Number(awayTeamScore)) {
                return `:tada:  "_${highlight}_" \n\n *${awayTeam}* win against *${homeTeam}*  \n\n ${awayTeamScore} : ${homeTeamScore}`;
            }
            return `${homeTeam} played ${awayTeam} at ${timestamp}. \n\n\n *${homeTeamScore}* vs *${awayTeamScore}*`;
        };
        return {
            type: 'section',
            text: {
                type: 'mrkdwn',
                text: scoreText(),
            },
            accessory: {
                type: 'image',
                image_url: 'https://i.imgur.com/H9B28D8.png',
                alt_text: 'Vandebron Foosball Bot Logo',
            },
        };
    };
    const buildInfoBlock = ({ highlight }) => ({
        type: 'context',
        elements: [
            {
                type: 'plain_text',
                emoji: true,
                text: `:loudspeaker: Highlight: "${highlight}"`,
            },
        ],
    });
    const buildDividerBlock = () => ({
        type: 'divider',
    });
    const scoreBlock = buildScoreBlock(game);
    const infoBlock = buildInfoBlock(game);
    const dividerBlock = buildDividerBlock();
    const section = [scoreBlock, infoBlock, dividerBlock];
    return section;
};
const buildHeaderBlock = ({ numGames }) => ({
    type: 'section',
    text: {
        type: 'mrkdwn',
        text: `:soccer: *${numGames} fixtures played in the last hour! Scores below!* :soccer: \n \n`,
    },
});
const buildTemplate = ({ games }) => {
    const headerBlock = buildHeaderBlock({ numGames: games.length });
    const scoreSections = games
        .map((game) => buildScoreSection(game))
        .flatMap((score) => score);
    const template = { blocks: [headerBlock, ...scoreSections] };
    return template;
};
exports.buildTemplate = buildTemplate;
