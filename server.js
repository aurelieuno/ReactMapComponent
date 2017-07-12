var express        =         require("express");
var bodyParser     =         require("body-parser");
var path    = require("path");
var mongoose = require('mongoose');

//===========================================================================
var app            =         express();

//===========================================================================
var index = require('./routes/index');
var configDB = require('./config/database.js');
var dbURL = configDB.url;

//===========================================================================
mongoose.connect(dbURL);
var db = mongoose.connection;
db.on('error', function (err) {
  console.error('There was a db connection error');
  return  console.error(err.message);
});
db.once('connected', function () {
  return console.log('Successfully connected to ' + dbURL);
});
db.once('disconnected', function () {
  return console.error('Successfully disconnected from ' + dbURL);
});

//===========================================================================

app.use(bodyParser.urlencoded({ extended: false }));

//===========================================================================
app.use('/', index);

//===========================================================================
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


//===========================================================================
var port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}


app.listen(port, function(){
  console.log(`Started on PORT ${port}`);
})
