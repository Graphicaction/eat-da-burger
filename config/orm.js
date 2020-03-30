const conn = require("./connection.js");

const orm = {
  selectAll: function(table, cb) {
    const queryString = "SELECT * FROM ??";
    const query = conn.query(queryString, [table], function(err, result) {
      cb(err, result);
    });
    console.log(query.sql);
  },
  insertOne: function(table, vals, cb) {
    const sql = "insert into ?? set ?";

    const query = conn.query(sql, [table, vals], (err, result) => {
      cb(err, result);
    });
    console.log(query.sql);
  },
  updateOne: function(table, cols, id, cb) {
    const query = conn.query("update ?? set ? where id=?", [table, cols, id], (err, result) => {
      cb(err, result);
    });
    console.log(query.sql);
  }
};

module.exports = orm;