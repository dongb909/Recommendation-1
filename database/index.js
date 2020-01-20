var mysql = require('mysql');
const request = require('request');
var parseString = require('xml2js').parseString;


var connection = mysql.createConnection({   
  host: 'localhost',
  user     : 'root',
  password : '',
  database : 'recommendations' 
});
 
connection.connect((err) => {
  if (err) {
    console.error('error connecting from DATABASE index.js: ', err);
    return;
  }
 
  console.log('DATABASE IS CONNECTING');  
  //
})
   
module.exports = connection; 