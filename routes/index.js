var express =  require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var User = require('../models/User');

//===================================================
var DIST_DIR = path.join(__dirname+'/../dist');
//C:\Users\u00136\myprojects\React\reactGitBattle2\dist

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//==================== GET ============================
router.get('/index_bundle.js',function(req,res){
    res.sendFile((path.join(DIST_DIR, "index_bundle.js")))
});

//================== AJAX GET==============================
router.get('/data',function(req,res){

    User.find({},function(err, docs) {
      console.log(docs);
      if (err) { return next(err); }
      res.send(docs);
})
  });

//===============GET EVERYTHING ELSE============================
router.get("*", function (req, res) {
  res.sendFile((path.join(DIST_DIR, "index.html")))
});

//================== POST ==============================

router.post('/form',function(req,res){

  var name=req.body.player1;

  var contact = new User({name: name});
  contact.save(function (err, contact) {
    if (err) { return next(err); }
    console.log(contact);

    res.redirect("/");
  });
});

module.exports = router;