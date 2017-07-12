var express =  require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var path = require("path");

var User = require('../models/User');
//==================== GET ============================
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

router.get('/index_bundle.js',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index_bundle.js'));
});

router.get('/battle',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

router.get('/popular',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

router.get('/topics',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

router.get('/form',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

router.get('/form2',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});

router.get('/mongoresults',function(req,res){
    res.sendFile(path.join(__dirname+'/../dist/index.html'));
});
//================== AJAX ==============================
router.get('/data',function(req,res){

    User.find({},function(err, docs) {
      console.log(docs);
      if (err) { return next(err); }
      res.send(docs);
})
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