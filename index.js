const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const os = require('os');
const _ = require('lodash');

const app = express();

const multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files/images/')
  },
  filename: function (req, file, cb) { 
      cb(null,  file.originalname ); 
  }
});
var upload = multer({ storage: storage }); 

app.post('/upload', upload.single('file'), function(req, res) {
  console.log("received req")
  const title = req.body.title;
  const file = req.file; 
   console.log("saved "+title)
  res.sendStatus(200);
});
 
const port = process.env.PORT || 4077;
app.listen(port, () => 
  console.log(`Motif fileserver is listening on port ${port}.`)
);