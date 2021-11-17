"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGameScores = void 0;
const game_1 = require("../messages/game");
const games_1 = require("../games/games");
const post_1 = require("./post");
const postGameScores = async (gamesData) => {
    const hasGames = gamesData && gamesData.length > 0;
    if (hasGames) {
        const games = (0, games_1.buildGames)(gamesData);
        if (games.length <= 0) {
            return;
        }
        const data = (0, game_1.buildTemplate)({ games });
        await (0, post_1.postToSlack)({ data });
    }
};
exports.postGameScores = postGameScores;
