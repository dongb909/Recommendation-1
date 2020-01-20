const db = require('./index.js') 
  

const getAllFromHomes = (cb) => {
  const queryString = `SELECT * FROM listings;`   
  db.query(queryString, (err, dbResObj) => {
    if (err) {
      console.log('error from GETALLHOMES DB METHODS*****************', err)
      cb(err);
    } else {
      cb(null, dbResObj);
    }
  })
}

module.exports={getAllFromHomes: getAllFromHomes}

