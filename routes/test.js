var express = require('express');
var router = express.Router();

router.use(function(req,res,next){
	console.log("Something is happening");
	next();
});

router.get('/',function(req,res,next){
	res.json({message:'hooray! welcome to our api!'});
});

module.exports = router;