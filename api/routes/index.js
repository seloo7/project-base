var express = require('express');
var router = express.Router();

//const config = require("../config");
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Selimm',config });
});*/

//dinamik alma 

const fs = require("fs");

let routes = fs.readdirSync(__dirname); //global tanımladık

for(let route of routes){
  if(route.includes(".js") && route != "index.js"){
    router.use("/"+route.replace(".js",""), require('./'+route));
  }
}

module.exports = router;
