const express = require('express');
const path = require('path')
const controller = require('../database/dbMethods.js');
const cors = require('cors');
const app = express()
const port = 9000
const bodyParser = require("body-parser");

// app.get('/', (req, res) => res.send('Hello World!'))
app.use(bodyParser.json())
app.use(cors());
app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use('/listing/:id', express.static(path.join(__dirname, '/../client/dist')))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))



app.get("/allHomes", (req,res) => {
  // console.log('getting get req inside server function');   //get by specific id
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


// app.get("/currListing", (req,res) => {
//   controller.getCurrListing((err,dbObj)=> {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       console.log('SENT current listing')
//       res.status(200).send(dbObj);
//     }
//   })
// })

