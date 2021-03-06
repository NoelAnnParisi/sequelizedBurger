const mysql = require('mysql'); 

var connection;
connection = mysql.createConnection(process.env.JAWSDB_URL); 
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
module.exports = { connection:connection };