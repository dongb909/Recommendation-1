const express = require('express');
const path = require('path');
const controller = require('../database/dbMethods.js');
const cors = require('cors');
const app = express();
const port = 5500;
const bodyParser = require("body-parser");
const compression = require('compression');


app.use(bodyParser.json())
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')))
// app.use('/air6n6/*/listing', express.static(path.join(__dirname, '/../client/dist')))
app.use(compression());


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get("/allHomes", (req,res) => {
  controller.getAllFromHomes((err,dbObj)=> {
    if (err) {
      console.log('error from index.js SERVER******')
      res.status(500).send(err);
    } else {
      console.log('SENT All')
      res.status(200).send(dbObj);
    }
  })
}) 
