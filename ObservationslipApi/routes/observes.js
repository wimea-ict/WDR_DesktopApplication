var express = require('express');
var router = express.Router();
var Observe = require('../models/Observe');

//select  archive observationslip form
router.get('/observeforms', function (req, res, next) {
  Observe.getAllarchiveobserveforms(function (err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//add archive observationslip form data 
router.post('/observe', function (req, res, next ) {
    Observe.addArchiveobservationslip(req.body, function (err, rows) {
      console.log(req.body);
        if (err) {
          res.json(err);
        } 
        else{
              res.json(rows)
            }
          })
        
    });

 
module.exports = router;
