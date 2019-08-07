var express = require('express');
var router = express.Router();
var Station = require('../models/Station');

// STATION

  // add new station
      router.post('/newstation', function (req, res, next ) {
        Station.addStation(req.body, function (err) {
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
        Station.getStationById(req.params.id, function (err, rows) {
          if (err){
            res.json(err);
          } else {
            console.log('Works');
            res.json(rows);
          }
        });
      } else{
        // get all
        Station.getAllStations( function (err, rows ) {
          if (err) {
            res.json(err);
          } else {
            console.log('Works');
            res.json (rows);
          }
        });
      }
    });

    //delete station
    router.delete('/delStation/:id?', function (req, res, next ) {
      Station.deleteStation(req.params.id, function (err, count) {
        if (err) {
          res.json(err);
        } else {
          res.json(count);
        }
    });
  });

    //Update station
    router.put('/updateStation', function(req, res, next) {
      Station.updateStation(req.body, function(err, rows){
          if(err) {
            console.log(err);
            res.json(err);
          } else {
            res.json(rows);
          }
      });
    });

    //get archive station by name for editing
    router.get('/getarchivestation/:station?', function (req, res, next) {
      Station.getArchiveStationByName(req.params.station, function (err, rows) {
        if (err){
          res.json(err);
        } else {
          res.json(rows);
        }
      });
    });

module.exports = router;
