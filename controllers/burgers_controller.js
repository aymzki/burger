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
	burger.insertOne(['burger_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});



// updateOne
router.put('/burgers/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);
    //function() or function(res)?
	burger.updateOne({devoured: req.body.devoured}, condition, function(res) {
		res.redirect('/index');
	});
});


// Exporting Router
module.exports = router;