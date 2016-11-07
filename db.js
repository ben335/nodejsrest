var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
    database : 'nodejsrest',
});

connection.connect(function(err) {
  // connected! (unless `err` is set)
    if (err)
    console.log("Connection errors: " + err);
});

//getUserById(1);

var user = function() {
    id = 1;
    connection.query('SELECT * FROM users WHERE ID = ' + id + ';', function (err, result) {
        if (!err)
            console.log('Result: ', result);
        else
            console.log("Query Errors: " + err);
    });
}

module.exports = user;
