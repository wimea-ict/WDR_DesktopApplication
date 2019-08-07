var express = require('express');
var router = express.Router();
var Synoptic = require('../models/Synoptic');

//select observationslip form
router.get('/synopticforms', function (req, res, next) {
  Synoptic.getAllSynopticforms(function (err, rows){
    if(err){
      res.json(err);
    } else {
      // console.log(rows.length);
      res.json(rows);
    }
  });
});

    //add archive synoptic form
    router.post('/addsynopticform', function (req, res, next ) {
        Synoptic.addSynopticform(req.body, function (err, rows) {
          console.log(req.body);
            if (err) {
              res.json(err);
            } 
            else{
                  res.json(rows)
                }
              })
            
        });

         //get synoptic forms by id for editing
router.get('/getsynoptic/:id?', function (req, res, next) {
  Synoptic.getsynopticreportById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
}); 

//Update synoptic forms
router.put('/updatesynoptic', function(req, res, next) {
  Synoptic.updatesynoptic(req.body, function(err, rows){
      if(err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(rows);
      }
  });
});


module.exports = router;
