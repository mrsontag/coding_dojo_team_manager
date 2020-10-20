const mongoose = require("mongoose");

/*
const GameSchema = new mongoose.Schema({
	game_number:{
		type: Number, 
		required: [true, "Games must have a game number."]
	},
	playing: Boolean
})
*/

const PlayerSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: [2, "Player name must be at least 2 characters."]
	},
	preferred_position: String,
	games: [ 
		{ 
			game_number: {
				type: Number,
				required: [true, "Game must have a number."]
			},
			playing: {
				type: Boolean,
				default: null,
			}
		}
	]
});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;