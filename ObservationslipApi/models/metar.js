var db = require('../dbconnection');

var MetarForm = {
    getAllmetarforms: function(callback) {
        return db.query("Select * from  archivemetarformdata ", callback);
    },

     //fetch all metar forms by id
     getmetarreportById: function(id, callback) {
    return db.query("Select * from archivemetarformdata  where id = ?", [id], callback);
  },

      // add archive metar form data
  addMetarform: function(metar, callback){
    let sql = "INSERT INTO archivemetarformdata  ( Date, station, TIME, METARSPECI, CCCC, YYGGgg, Dddfffmfm, WWorCAVOK, W1W1, NlCCNmCCNhCC, TTTdTd, Qnhhpa, Qnhin, Qfehpa, Qfein, REW1W1, AM_SubmittedBy, Approved) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) "; 
    return db.query(sql,[  metar.Date, metar.station, metar.TIME, metar.METARSPECI, metar.CCCC, metar.YYGGgg, metar.Dddfffmfm, 
      metar.WWorCAVOK, metar.W1W1, metar.NlCCNmCCNhCC, metar.TTTdTd, metar.Qnhhpa, metar.Qnhin,
      metar.Qfehpa, metar.Qfein, metar.REW1W1, metar.AM_SubmittedBy, 'FALSE'],callback);
  },
  updatemetar: function(metar, callback){
    let sql = "UPDATE archivemetarformdata SET Date = ?, station = ?, TIME = ?, METARSPECI = ?, CCCC = ?, YYGGgg = ?, Dddfffmfm = ?, WWorCAVOK = ?, W1W1 = ?, NlCCNmCCNhCC = ?, TTTdTd = ?, Qnhhpa = ?, Qnhin = ?, Qfehpa = ?, Qfein = ?, REW1W1 = ?, AM_SubmittedBy = ?, Approved = ?"; 
    return db.query(sql,[  metar.Date, metar.station, metar.TIME, metar.METARSPECI, metar.CCCC, metar.YYGGgg, metar.Dddfffmfm, 
      metar.WWorCAVOK, metar.W1W1, metar.NlCCNmCCNhCC, metar.TTTdTd, metar.Qnhhpa, metar.Qnhin,
      metar.Qfehpa, metar.Qfein, metar.REW1W1, metar.AM_SubmittedBy, 'FALSE'],callback);
  },
}



module.exports = MetarForm;