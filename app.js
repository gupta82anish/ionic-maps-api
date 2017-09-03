var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

/*------------------------------|
*      Requiring Routes
*-------------------------------|*/
var index = require('./routes/index');
var users = require('./routes/users');
var test = require('./routes/test');
var saveCoords = require('./routes/saveCoords');


var app = express();
var router = express.Router();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
/*----------------------------------|
  *   Connecting MongoDB
  *---------------------------------|*/
var db = mongoose.connect('mongodb://anish:anish1234@ds161913.mlab.com:61913/test_db');
mongoose.connection.on('error',console.error.bind(console,'mongodb connection error: '));
var db = mongoose.connection;
db.on('connected',function(){
  console.log('Database Connected!');
});
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


/*----------------------------------|
  *           Using Routes
  *---------------------------------|*/
app.use('/', index);
app.use('/users', users);
app.use('/api',test);
app.use('/saveCoords',saveCoords);


// catch 404 and forward to error handler

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
