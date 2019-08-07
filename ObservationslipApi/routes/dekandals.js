var express = require('express');
var router = express.Router();
var Dekandal = require('../models/Dekandal');

//select observationslip form
router.get('/dekandalforms', function (req, res, next) {
  Dekandal.getAlldekandalforms(function (err, rows){
    if(err){
      res.json(err);
    } else {
      // console.log(rows.length);
      res.json(rows);
    }
  });
});


    //add archive dekandal form
    router.post('/adddekandalform', function (req, res, next ) {
        Dekandal.addDekandalform(req.body, function (err, rows) {
          console.log(req.body);
            if (err) {
              res.json(err);
            } 
            else{
                  res.json(rows)
                }
              })
            
        });
  //Update dekandal forms
        router.put('/updatedekandal', function(req, res, next) {
          Dekandal.updatedekandal(req.body, function(err, rows){
              if(err) {
                console.log(err);
                res.json(err);
              } else {
                res.json(rows);
              }
          });
        });

  //get dekandal forms by id for editing
router.get('/getdekandal/:id?', function (req, res, next) {
  Dekandal.getdekandalreportById(req.params.id, function (err, rows) {
      if (err){
        res.json(err);
      } else {
        res.json(rows);
      }
    });
}); 
  



module.exports = router;
