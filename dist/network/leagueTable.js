"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postGameScores = void 0;
const postGameScores = async (err, res) => {
    if (err)
        return console.log('The API returned an error: ' + err);
    const rows = res.data.values;
    const hasGames = rows.length;
    if (hasGames) {
        console.log('hey');
    }
};
exports.postGameScores = postGameScores;
