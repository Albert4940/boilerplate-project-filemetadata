var express = require('express');
var cors = require('cors');
require('dotenv').config()
var app = express();
const FOLDER_PATH = "public"
const FOLDER_DESTINATION = "files"

const multer = require('multer');
//const upload = multer({dest: "public/files"})
const multerStorage = multer.diskStorage({
  destination:(req,file,cb) => {
    cb(null,FOLDER_PATH)
  },
  filename:(req,file,cb) => {
    const ext = file.mimetype.split("/")[1]
    cb(null,`${FOLDER_DESTINATION}/admin-${file.fieldname}-${Date.now()}.${ext}`)
  },
})
const upload = multer({
  storage: multerStorage
})

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse", upload.single("upfile"),function(req, res){
  console.log("Upload",req.file)
})
module.exports = app;