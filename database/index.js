const mysql = require('mysql');
const request = require('request');
const parseString = require('xml2js').parseString;

const connection = mysql.createConnection({   
  host     : 'localhost',
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
})
   
module.exports = connection; 