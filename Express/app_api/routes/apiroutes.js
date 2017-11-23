var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


router.get('/help-demo', function(req, res, next){
    res.send("you hit the demo");
  });

router.get('/Register' ,function(req, res, next) {
  mongoose.model('Register').find(function(err, register) {
    res.send(register);
  })
});

// router.post('/Register', req, res) =>{
//   db.collection('Register').save(req,body, (err, result) =>{
//     if(err) return console.log(err);
//
//     console.log('saved to database');
//     res.redirect('/');
//   })
// }
router.post('/Register', function(req, res, next) {
  console.log("the request", req.body);
  mongoose.model('Register').create(req.body, function(err, register){
    if(err){
      err.status = 500;
      next(err);
      return;
    }
    res.statusCode = 201;
    res.send(register);
  })
 });



router.get('/users', function(req, res, next){
  mongoose.model('users').find(function(err, user) {
    res.send("users are in");
  })
});

router.post('users',function(req, res, next) {
 mongoose.model('users').create(req.body, function(err, user) {
   if(err) {
     err.status = 500;
     next(err);
     return;
   }
   res.statusCode = 201;
   res.send(user);
 })
});
 



module.exports = router;
