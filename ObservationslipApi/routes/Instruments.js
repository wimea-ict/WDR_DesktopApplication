var express = require('express');
var router = express.Router();
var Instruments = require('../models/Instruments');

//INSTRUMENT

    // add new instrument
    router.post('/newinstrument', function (req, res, next ) {
        Instruments.addInstrument(req.body, function (err) {
            if (err) {
              res.json(err);
            } else {
              res.json(req.body);
            }
          });
    });
    
    // return  station(s)
    router.get('/:id?', function(req, res, next) {
        if (req.params.id) {
            Instruments.getInstrumentsById(req.params.id, function (err, rows) {
            if (err){
              res.json(err);
            } else {
              console.log('Works');
              res.json(rows);
            }
          });
        } else{
          // get all
          Instruments.getAllInstruments( function (err, rows ) {
            if (err) {
              res.json(err);
            } else {
              console.log('Works');
              res.json (rows);
            }
          });
        }
      });


module.exports = router;

  
  
