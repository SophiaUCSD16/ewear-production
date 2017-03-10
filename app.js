
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

// here is the route to the pages
var landing = require('./routes/landing');
var login = require('./routes/login');
var dashboard = require('./routes/dashboard');
//var like = require('./routes/like');
var closet = require('./routes/closet');
var upload = require('./routes/upload');
var outfit = require('./routes/outfit');


// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', landing.view);
app.get('/login', login.view);
// register the control (original) condiotion
app.get('/dashboard', dashboard.view);
// register the experimenetal condition 
//app.get('/like', like.view);
app.get('/closet', closet.view);
app.get('/upload', upload.view);
app.get('/outfit', outfit.outfitInfo);

/*app.post('/closet', function(req,res){
  res.send('You sent the name');
});*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
