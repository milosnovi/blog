var mongoose = require('mongoose');
var express = require('express');

// add mongoose query and promise support to express
require('express-mongoose');

var models = require('./models');
var routes = require('./routes');
var middleware = require('./middleware');

// mongoose.set('debug', true);
//  Install module by updating package.json  npm install mongoose --save
//  Install module by updating package.json  npm install express --save
mongoose.connect('mongodb://localhost:27017/blog-final', function(err, db) {
	if (err) throw err;

	var app = express();
	middleware(app);
	routes(app);

	app.listen(3000, function () {
		console.log('now listening on http://localhost:3000');
	})
});