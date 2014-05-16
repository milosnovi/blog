var express = require('express')
	, app = express() // Web framework to handle routing requests
	, cons = require('consolidate') // Templating library adapter for Express
	, MongoClient = require('mongodb').MongoClient // Driver for connecting to MongoDB
	, Mongoose = require('mongoose')
	, routes = require('./routes'); // Routes for our application

//  Install module by updating package.json  npm install mongoose --save
MongoClient.connect('mongodb://localhost:27017/blog', function(err, db) {
	"use strict";
	if(err) throw err;

	// Register our templating engine
	app.engine('html', cons.swig);
	app.set('view engine', 'html');
	app.set('views', __dirname + '/views');

	// Express middleware to populate 'req.cookies' so we can access cookies
	app.use(express.cookieParser());

	// Express middleware to populate 'r1outes§§§et'/q.body' so we can access POST variables
	app.use(express.bodyParser());

	// Application routes
	routes(app, db);

	app.listen(8082);
	console.log('Express server listening on port 8082');
});

/*
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/school', function(err, db) {
	if(err) throw err;

	var query = { };
	var cursor = db.collection('students').find(query);

var i = 10;
var index = 0;
	cursor.each(function(err, doc) {
		index += 1;
		if(err) {
			throw err;
		}
		if(doc == null) {
			return db.close();
		}
		// console.dir(doc);

		// var lowestResIndex = false;
		// for(var i in doc.scores) {
		// 	if('homework' === doc.scores[i].type) {
		// 		if (false === lowestResIndex) {
		// 			lowestResIndex = i;
		// 		} else  {
		// 			if(doc.scores[i].score < doc.scores[lowestResIndex].score) {
		// 				lowestResIndex = i;

		// 			}
		// 		}
		// 	}
		// }
		// db.collection('students').update(doc, {$pull: {'scores':{'score':doc.scores[lowestResIndex].score}}}, function(err, updated) {
// console.log(i);
// i = i + 12;
// db.collection('students').update(doc, {$set: {'category': 'car' }}, function(err, updated) {});
// 		if (0 == index % 8) {
// 			db.collection('students').update(doc, {$set: {'category': 'combi' }}, function(err, updated) {});
// 		}
// 		if (0 == index % 6) {
// 			db.collection('students').update(doc, {$set: {'category': 'mini-van' }}, function(err, updated) {});
// 		}
		// if (0 == index % 11) {
		// 	console.log('mod');
		// 	console.log(index);
		// 	console.log(doc._id);
		// 	db.collection('students').update(doc, {$set: {'brand': 'Ford' }}, function(err, updated) {});
		// }
		// db.collection('students').update(doc, {$set: {'price': i }}, function(err, updated) {

		// });
		// console.log(lowestResIndex);
		// console.dir(doc.scores[lowestResIndex].score);
		// return db.close();
	});
});
*/
