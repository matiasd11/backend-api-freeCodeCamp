let express = require("express");
let app = express();
console.log("Hello world");
app.use(express.static(__dirname + "/public"));
module.exports = app;
