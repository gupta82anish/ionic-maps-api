var express = require('express');
var router = express.Router();
var coords = require('../models/coords');

router.use(function(req,res,next){
	console.log("Something is happening");
	next();
});

router.post('/',function(req,res,next){
	console.log("Save Coords Running");

	var coordinates = new coords({
		latitude:req.body.latitude,
		longitude:req.body.longitude
	});

	coordinates.save(function(err,data){
		if(err){
			console.log("Error saving");
		}
		else{
			res.send(data);
			console.log("Data Saved");
		}
	});
});

module.exports = router;
