var express = require('express');
var router = express.Router();
var Metar = require('../models/Metar');

//select observationslip form
router.get('/metarforms', function (req, res, next) {
  Metar.getAllmetarforms(function (err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

 //add archive metar form 
 router.post('/addmetarform', function (req, res, next ) {
    Metar.addMetarform(req.body, function (err, rows) {
      console.log(req.body);
        if (err) {
          res.json(err);
        } 
        else{
              res.json(rows)
            }
          })
        
    });

     //get metar forms by id for editing
router.get('/getmetar/:id?', function (req, res, next) {
  Metar.getmetarreportById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
}); 

//Update Metar forms
router.put('/updatemetar', function(req, res, next) {
  Metar.updatemetar(req.body, function(err, rows){
      if(err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(rows);
      }
  });
});


module.exports = router;
