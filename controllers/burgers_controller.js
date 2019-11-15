//Dependencies, import express, router, and burger.js
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Router
//Index redirect
router.get("/", function(req, res) {
      res.redirect('/index');
    });
// selectAll
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {burgers: data};
		res.render('index', hbsObject);
	});
});

// insertOne
router.post('/burgers/insertOne', function(req, res) {
	console.log(req.body);
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});

// updateOne
router.put('/burgers/updateOne/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: true}, condition, function() {
		res.json({ });
	});
});

// Exporting Router
module.exports = router;