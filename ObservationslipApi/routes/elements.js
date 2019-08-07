var express = require('express');
var router = express.Router();
var Elements = require('../models/elements');

//Element

    // add new element
    router.post('/newelement', function (req, res, next ) {
        Elements.addElement(req.body, function (err) {
            if (err) {
              res.json(err);
            } else {
              res.json(req.body);
            }
          });
    });
    
    // return  element(s)
    router.get('/:id?', function(req, res, next) {
        if (req.params.id) {
            Elements.getElementById(req.params.id, function (err, rows) {
            if (err){
              res.json(err);
            } else {
              res.json(rows);
            }
          });
        } else{
          // get all
          Elements.getAllElements( function (err, rows ) {
            if (err) {
              res.json(err);
            } else {
              res.json (rows);
            }
          });
        }
      });

      //delete element
    router.delete('/delElement/:id?', function (req, res, next ) {
      Elements.deleteElement(req.params.id, function (err, count) {
        if (err) {
          res.json(err);
        } else {
          res.json(count);
        }
    });
  });

    //Update Element
    router.put('/updateElement', function(req, res, next) {
      Elements.updateElement(req.body, function(err, rows){
          if(err) {
            console.log(err);
            res.json(err);
          } else {
            res.json(rows);
          }
      });
    });


module.exports = router;

  
  
