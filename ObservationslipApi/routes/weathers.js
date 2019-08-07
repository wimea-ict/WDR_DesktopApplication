var express = require('express');
var router = express.Router();
var Weather = require('../models/Weather');

//get archive weather summary form data from the db
router.get('/weatherforms', function (req, res, next) {
  Weather.getAllweatherforms(function (err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//add archive weather summary form data
router.post('/weathersummary', function (req, res, next ) {
    Weather.addWeathersummaryform(req.body, function (err, rows) {
      console.log(req.body);
        if (err) {
          res.json(err);
        } 
        else{
              res.json(rows)
            }
          })
        
    });

    //get weather summary forms by id for editing
router.get('/getweathersummary/:id?', function (req, res, next) {
  Weather.getweathersummaryreportById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
}); 

//Update synoptic forms
router.put('/updateweathersummary', function(req, res, next) {
  Weather.updateweathersummary(req.body, function(err, rows){
      if(err) {
        console.log(err);
        res.json(err);
      } else {
        res.json(rows);
      }
  });
});



module.exports = router;
