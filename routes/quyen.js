var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');

var connection = mysql.createConnection({
	host: 'sql9.freemysqlhosting.net',
	user: 'sql9168037',
	password: 'FjvLILXy5d',
	database: 'sql9168037'
});

connection.connect();

//lay danh sach thanh vien
router.get('/roles',function(req,res){
    connection.query('SELECT * from access ', function (err, rows, fields) {
		if (err) {
			connection.end();
			throw err;
		}
		else {
			res.json(rows)
		}
	});
});

module.exports = router;