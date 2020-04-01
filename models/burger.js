const orm = require("../config/orm");
//Call orm functions using burger specific input
const burger = {
    getAll: function(cb) {
      orm.selectAll("burgers", (err, data) => cb(err, data));
    },
    create: function(data, cb) {
      orm.insertOne("burgers", data, (err, data) => cb(err, data));
    },
    update: function(data, id, cb) {
      orm.updateOne("burgers", data, id, (err, data) => cb(err, data));
    },
    
  };
  
  module.exports = burger;