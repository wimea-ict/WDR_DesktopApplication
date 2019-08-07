var db = require('../dbconnection');

var WeatherForm = {
    getAllweatherforms: function(callback) {
        return db.query("Select * from  archiveweathersummaryformreportdata ", callback);
    },

    // add archive weather summary form
    addWeathersummaryform: function(weathersummary, callback){
        let sql = "INSERT INTO archiveweathersummaryformreportdata  (Date, station, TEMP_MAX, TEMP_MIN, SUNSHINE, DB_0600Z, WB_0600Z, DP_0600Z, VP_0600Z, RH_0600Z, CLP_0600Z, GPM_0600Z, WIND_DIR_0600Z, FF_0600Z, DB_1200Z, WB_1200Z, DP_1200Z, VP_1200Z, RH_1200Z, CLP_1200Z, GPM_1200Z, WIND_DIR_1200Z, FF_1200Z, WIND_RUN, R_F, ThunderStorm, Fog, Haze, HailStorm,EarthQuake, AW_SubmittedBy, Approved) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) "; 
        return db.query(sql,[weathersummary.Date, weathersummary.station, weathersummary.TEMP_MAX, weathersummary.TEMP_MIN, 
          weathersummary.SUNSHINE, weathersummary.DB_0600Z, weathersummary.WB_0600Z, 
          weathersummary.DP_0600Z, weathersummary.VP_0600Z, weathersummary.RH_0600Z, weathersummary.CLP_0600Z, weathersummary.GPM_0600Z, weathersummary.WIND_DIR_0600Z, weathersummary.FF_0600Z,
          weathersummary.DB_1200Z, weathersummary.WB_1200Z, weathersummary.DP_1200Z, weathersummary.VP_1200Z, weathersummary.RH_1200Z, weathersummary.CLP_1200Z, weathersummary.GPM_1200Z, weathersummary.WIND_DIR_1200Z,
          weathersummary.FF_1200Z, weathersummary.WIND_RUN, weathersummary.R_F, weathersummary.ThunderStorm, weathersummary.Fog, weathersummary.Haze, 
          weathersummary.HailStorm,weathersummary.EarthQuake, weathersummary.AW_SubmittedBy, 'FALSE', ],callback);
      },

    // Update weather summary form
    updateweathersummary: function(weathersummary, callback){
        let sql = "UPDATE archiveweathersummaryformreportdata SET  Date = ?, station= ?, TEMP_MAX= ?, TEMP_MIN= ?, SUNSHINE= ?, DB_0600Z= ?, WB_0600Z= ?, DP_0600Z= ?, VP_0600Z= ?, RH_0600Z= ?, CLP_0600Z= ?, GPM_0600Z= ?, WIND_DIR_0600Z= ?, FF_0600Z= ?, DB_1200Z= ?, WB_1200Z= ?, DP_1200Z= ?, VP_1200Z= ?, RH_1200Z= ?, CLP_1200Z= ?, GPM_1200Z= ?, WIND_DIR_1200Z= ?, FF_1200Z= ?, WIND_RUN= ?, R_F= ?, ThunderStorm= ?, Fog= ?, Haze= ?, HailStorm= ?,EarthQuake= ?, AW_SubmittedBy= ?, Approved= ?"; 
        return db.query(sql,[weathersummary.Date, weathersummary.station, weathersummary.TEMP_MAX, weathersummary.TEMP_MIN, 
          weathersummary.SUNSHINE, weathersummary.DB_0600Z, weathersummary.WB_0600Z, 
          weathersummary.DP_0600Z, weathersummary.VP_0600Z, weathersummary.RH_0600Z, weathersummary.CLP_0600Z, weathersummary.GPM_0600Z, weathersummary.WIND_DIR_0600Z, weathersummary.FF_0600Z,
          weathersummary.DB_1200Z, weathersummary.WB_1200Z, weathersummary.DP_1200Z, weathersummary.VP_1200Z, weathersummary.RH_1200Z, weathersummary.CLP_1200Z, weathersummary.GPM_1200Z, weathersummary.WIND_DIR_1200Z,
          weathersummary.FF_1200Z, weathersummary.WIND_RUN, weathersummary.R_F, weathersummary.ThunderStorm, weathersummary.Fog, weathersummary.Haze, 
          weathersummary.HailStorm,weathersummary.EarthQuake, weathersummary.AW_SubmittedBy, 'FALSE', ],callback);
      },

      //fetch all weather summary Form by id
      getweathersummaryreportById: function(id, callback) {
        return db.query("Select * from archiveweathersummaryformreportdata  where id = ?", [id], callback);
      },

}



module.exports = WeatherForm;