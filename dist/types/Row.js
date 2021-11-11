"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamRow = exports.GameRow = void 0;
var GameRow;
(function (GameRow) {
    GameRow[GameRow["Timestamp"] = 0] = "Timestamp";
    GameRow[GameRow["HomeTeam"] = 2] = "HomeTeam";
    GameRow[GameRow["AwayTeam"] = 3] = "AwayTeam";
    GameRow[GameRow["HomeTeamScore"] = 4] = "HomeTeamScore";
    GameRow[GameRow["AwayTeamScore"] = 5] = "AwayTeamScore";
    GameRow[GameRow["Highlight"] = 6] = "Highlight";
})(GameRow = exports.GameRow || (exports.GameRow = {}));
var TeamRow;
(function (TeamRow) {
    TeamRow[TeamRow["Timestamp"] = 0] = "Timestamp";
    TeamRow[TeamRow["Email"] = 1] = "Email";
    TeamRow[TeamRow["Name"] = 2] = "Name";
    TeamRow[TeamRow["Members"] = 3] = "Members";
})(TeamRow = exports.TeamRow || (exports.TeamRow = {}));
