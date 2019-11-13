//import orm.js 
var orm = require("../config/orm.js");

//code that will call the ORM functions using burger specific input for the ORM
var burger = {
    //Select All
    selectAll: function(cb) {
      orm.selectAll('burgers', function(res){
          cb(res);
      });
    },
    //Insert one
    insertOne: function(cols, vals, cb) {
      orm.insertOne('burgers', cols, vals, function(res){
          cb(res);
      });
    },
    // Update one
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('burgers', objColVals, condition, function(res){
          cb(res);
      });
    }
  };
//Export at end
module.exports = burger;