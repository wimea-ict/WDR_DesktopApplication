var db = require('../dbconnection');

var DekandalForm = {
    getAlldekandalforms: function(callback) {
        return db.query("Select * from  archivedekadalformreportdata ", callback);
    },

     // add dekandal archive form data
  addDekandalform: function(dekandal, callback){
    let sql = "INSERT INTO archivedekadalformreportdata SET Date = ?, station = ?, MAX_TEMP = ?, MIN_TEMP = ?, DRY_BULB_0600Z = ?, WET_BULB_0600Z = ?, DEW_POINT_0600Z = ?, RELATIVE_HUMIDITY_0600Z = ?, WIND_DIRECTION_0600Z = ?, WIND_SPEED_0600Z = ?, RAINFALL_0600Z = ?, DRY_BULB_1200Z = ?, WET_BULB_1200Z = ?, DEW_POINT_1200Z = ?, RELATIVE_HUMIDITY_1200Z = ?, WIND_DIRECTION_1200Z = ?, WIND_SPEED_1200Z = ?, AD_SubmittedBy = ?, Approved = ? "; 
    return db.query(sql,[dekandal.Date, dekandal.station, dekandal.MAX_TEMP, dekandal.MIN_TEMP, dekandal.DRY_BULB_0600Z, dekandal.WET_BULB_0600Z,dekandal.DEW_POINT_0600Z, dekandal.RELATIVE_HUMIDITY_0600Z, dekandal.WIND_DIRECTION_0600Z, dekandal.WIND_SPEED_0600Z, dekandal.RAINFALL_0600Z, dekandal.DRY_BULB_1200Z, dekandal.WET_BULB_1200Z, dekandal.DEW_POINT_1200Z, dekandal.RELATIVE_HUMIDITY_1200Z, dekandal.WIND_DIRECTION_1200Z, dekandal.WIND_SPEED_1200Z, dekandal.AD_SubmittedBy, 'FALSE'],callback);
  },

  //Update dekandal
  updatedekandal: function(dekandal, callback){
    let sql = "UPDATE archivedekadalformreportdata SET Date = ?, station = ?, MAX_TEMP = ?, MIN_TEMP = ?, DRY_BULB_0600Z = ?, WET_BULB_0600Z = ?, DEW_POINT_0600Z = ?, RELATIVE_HUMIDITY_0600Z = ?, WIND_DIRECTION_0600Z = ?, WIND_SPEED_0600Z = ?, RAINFALL_0600Z = ?, DRY_BULB_1200Z = ?, WET_BULB_1200Z = ?, DEW_POINT_1200Z = ?, RELATIVE_HUMIDITY_1200Z = ?, WIND_DIRECTION_1200Z = ?, WIND_SPEED_1200Z = ?, AD_SubmittedBy = ?, Approved = ? "; 
    return db.query(sql,[dekandal.Date, dekandal.station, dekandal.MAX_TEMP, dekandal.MIN_TEMP, dekandal.DRY_BULB_0600Z, dekandal.WET_BULB_0600Z,dekandal.DEW_POINT_0600Z, dekandal.RELATIVE_HUMIDITY_0600Z, dekandal.WIND_DIRECTION_0600Z, dekandal.WIND_SPEED_0600Z, dekandal.RAINFALL_0600Z, dekandal.DRY_BULB_1200Z, dekandal.WET_BULB_1200Z, dekandal.DEW_POINT_1200Z, dekandal.RELATIVE_HUMIDITY_1200Z, dekandal.WIND_DIRECTION_1200Z, dekandal.WIND_SPEED_1200Z, dekandal.AD_SubmittedBy, 'FALSE'],callback);
  },

  //fetch all dekandal forms by id
  getdekandalreportById: function(id, callback) {
    return db.query("Select * from archivedekadalformreportdata  where id = ?", [id], callback);
  },
    
}



module.exports = DekandalForm;