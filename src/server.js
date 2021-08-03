const ServerlessHttp = require("serverless-http");
const express = require("express");
app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Expose-Headers", "*")
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  next();
});

var route = require("./routes")
route(app)
//module.exports.handler = serverless(app)
app.listen(4000, ()=>{
    console.log("Server is listening on port 4000...");
})
module.exports.handler = ServerlessHttp(app);