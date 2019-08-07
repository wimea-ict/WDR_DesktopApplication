var express = require('express');
var router = express.Router();
var Archive = require('../models/Archive');

//get archive annual raifall form
router.get('/archiveforms', function (req, res, next) {
  Archive.getAllarchiveforms(function (err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//get archive forms by id for editing
router.get('/getarchive/:id?', function (req, res, next) {
    Archive.getarchiveFormById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
}); 

router.post('/archive', function (req, res, next ) {
    Archive.addArchiverainfall(req.body, function (err, rows) {
      console.log(req.body);
        if (err) {
          res.json(err);
        } 
        else{
              res.json(rows)
            }
          })
        
    });

    router.put('/updatearchive', function(req, res, next) {
      Archive.updateArchiverainfall(req.body, function(err, rows){
          if(err) {
            console.log(err);
            res.json(err);
          } else {
            res.json(rows);
          }
      });
    });

    /**
     * 
     * ARCHIVE SCANNED MONTHLY RAINFALL FORMS
     * 
     */
    router.post('/archivescanned', function (req, res, next ) {
      Archive.addArchivescannedforms(req.body, function (err, rows) {
        console.log(req.body);
          if (err) {
            res.json(err);
          } 
          else{
                res.json(rows)
              }
            })
          
      });

      //get archive scanned monthly raifall form
router.get('/scannedmonthlyrainfall', function (req, res, next) {
  Archive.getAllScannedMonthlyRainfall(function (err, rows){
    if(err){
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

//Scanned Annual rainfall

    router.post('/scannedannualrainfall', function (req, res, next ) {
      Archive.addscannedAnnualrainfall(req.body, function (err, rows) {
        console.log(req.body);
          if (err) {
            res.json(err);
          } 
          else{
                res.json(rows)
              }
            })
          
      });

      router.get('/scannedAnnualRainfall', function (req, res, next) {
        Archive.getAllscannedAnnualRainfall(function (err, rows){
          if(err){
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });

//Scanned dekandal

    router.post('/addscannDekandal', function (req, res, next ) {
      Archive.addscannDekandal(req.body, function (err, rows) {
        console.log(req.body);
          if (err) {
            res.json(err);
          } 
          else{
                res.json(rows)
              }
            })
          
      });

      router.get('/getAllscannedDekandal', function (req, res, next) {
        Archive.getAllscannedDekandal(function (err, rows){
          if(err){
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
//Scanned synoptic

    router.post('/addscannedSynoptic', function (req, res, next ) {
      Archive.addscannedSynoptic(req.body, function (err, rows) {
        console.log(req.body);
          if (err) {
            res.json(err);
          } 
          else{
                res.json(rows)
              }
            })
          
      });

      router.get('/getAllscannedSynoptic', function (req, res, next) {
        Archive.getAllscannedSynoptic(function (err, rows){
          if(err){
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
//Scanned metar

    router.post('/addscannedMetar', function (req, res, next ) {
      Archive.addscannedMetar(req.body, function (err, rows) {
        console.log(req.body);
          if (err) {
            res.json(err);
          } 
          else{
                res.json(rows)
              }
            })
          
      });

      router.get('/getAllscannedMetar', function (req, res, next) {
        Archive.getAllscannedMetar(function (err, rows){
          if(err){
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });
//Scanned obseravtionslip

    router.post('/addscannedObservationslip', function (req, res, next ) {
      Archive.addscannedObservationslip(req.body, function (err, rows) {
        console.log(req.body);
          if (err) {
            res.json(err);
          } 
          else{
                res.json(rows)
              }
            })
          
      });

      router.get('/getAllscannedObservationslip', function (req, res, next) {
        Archive.getAllscannedObservationslip(function (err, rows){
          if(err){
            res.json(err);
          } else {
            res.json(rows);
          }
        });
      });

module.exports = router;
