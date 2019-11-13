//Dependencies, import express, router, and burger.js
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Router
//Index redirect
router.get("/", function(req, res) {
      res.redirect('/index');
    });
//Exporting Router