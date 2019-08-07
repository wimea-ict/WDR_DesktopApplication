var express = require('express');
var router = express.Router();
var User = require('../models/User');
var bcrypt = require('bcryptjs');

const saltRounds = 10;
// user authentication
router.post('/authenticate', function(req, res, next){
  if(req.method == 'POST'){
    console.log('logging in');
    // console.log(req.body.username);
    // console.log(req.body.password);

    User.loginCheck(req.body, function(err, rows){
      if(err){
         res.json(err);
      }
      else {
        res.json(rows);
      }
    })
  }else res.json(err);
})


// select user ng
router.get('/:username?', function(req, res, next) {
  if(req.params.username){
    User.getUserByUsername(req.params.username,  function(err, rows){
      if(err) {
        res.json(err);
      }
      else 
      {
        res.json(rows);
      }
    })
  }else{
    // select all users
    User.getAllUsers(function(err, rows){
      if(err) res.json(err);
      else res.json(rows);
    });
  }
});


router.post('/', function(req, res, next) {
  bcrypt.hash(req.body.passwordsinup, saltRounds, function(err, hash) {

  })
  User.addUser(req.body, function(err, count) {
    if (err) res.json(err);
    else {
      res.json(req.body);
    }
  });
});

//delete user
router.delete('/:id', function(req, res, next) {
  User.deleteUser(req.params.id, function(err, count) {
    if (err) res.json(err);
    else res.json(count);
  });
});

//update user update
router.put('/:id', function(req, res, next) {
  User.updateUser(req.params.id, req.body, function(err, rows) {
    if(err) res.json(err);
    else res.json(rows);
  });
});

module.exports = router;
