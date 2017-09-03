var mongoose = require('mongoose');

var testSchema = new mongoose.Schema({
	name: String;
});

var test = mongoose.model('test',testSchema);
module.exports = test;