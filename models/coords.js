var mongoose = require('mongoose');

var coordSchema = new mongoose.Schema({
	latitude:{
		type:String
	},
	longitude:{
		type:String
	}	
},{timestamps:true});

var coor = mongoose.model('coords',coordSchema);
module.exports = coor;