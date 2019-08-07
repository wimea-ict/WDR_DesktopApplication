var db = require('../dbconnection');

var SynopticForm = {
    getAllSynopticforms: function(callback) {
        return db.query("Select * from  archivesynopticformreportdata ", callback);
    },

    addSynopticform: function(synoptic, callback){
        let sql = "INSERT INTO archivesynopticformreportdata  (Date, station, TIME, UWS, BN, IOOP, TSPPW, HLC, HV, TCC, WD, WS, GI1_1, SignOfData_1, Air_temperature, GI2_1, SignOfData_2, Dewpoint_temperature, GI3_1, PASL, GI4_1, SIS, GSIS, GI6_1, AOP, DPOP, GI7_1, Present_Weather, Past_Weather, GI8_1, AOC, CLOG, CGOG, CHOG, Section_Indicator333, GI0_1, GMT, CIOP, BEOP, ThunderStorm, HailStorm, Fog, EarthQuake, Anemometer_Reading, Actual_Rainfall, GI1_2, SignOfData_3, Max_TempTx, GI2_2, SignOfData_4, Max_TempTn, GI5_1, AOE, ITI, GI55, DOS, GI5_2, SPC, PCI24Hrs, GI6_2,AOP_2, DPOP_2, GI8_2, AICL, GOC, HBCLOM, GI8_3, AICL_2, GOC_2, HBCLOM_2, GI8_4, AICL_3, GOC_3, HBCLOM_3, GI8_5, AICL_4, GOC_4, HBCLOM_4, GI9, Supp_Info,Section_Indicator555, GI1_3, SignOfData_5, Wetbulb_Temp, R_Humidity, V_Pressure, remarks, time_, ObserverOnDuty, to_, from_, Approved, AS_SubmittedBy) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) "; 
        return db.query(sql,[ synoptic.Date, synoptic.station, synoptic.TIME, synoptic.UWS, 
          synoptic.BN, synoptic.IOOP, synoptic.TSPPW, synoptic.HLC, synoptic.HV, synoptic.TCC, 
          synoptic.WD, synoptic.WS, synoptic.GI1_1, synoptic.SignOfData_1, synoptic.Air_temperature,
          synoptic.GI2_1, synoptic.SignOfData_2, synoptic.Dewpoint_temperature, synoptic.GI3_1, 
          synoptic.PASL, synoptic.GI4_1, synoptic.SIS, synoptic.GSIS, synoptic.GI6_1, synoptic.AOP, 
          synoptic.DPOP, synoptic.GI7_1, synoptic.Present_Weather, synoptic.Past_Weather, synoptic.GI8_1, 
          synoptic.AOC, synoptic.CLOG, synoptic.CGOG, synoptic.CHOG, synoptic.Section_Indicator333, 
          synoptic.GI0_1, synoptic.GMT, synoptic.CIOP, synoptic.BEOP, synoptic.ThunderStorm, 
          synoptic.HailStorm, synoptic.Fog, synoptic.EarthQuake, synoptic.Anemometer_Reading, 
          synoptic.Actual_Rainfall, synoptic.GI1_2, 
          synoptic.SignOfData_3, synoptic.Max_TempTx, synoptic.GI2_2, synoptic.SignOfData_4, 
          synoptic.Max_TempTn, synoptic.GI5_1, synoptic.AOE, synoptic.ITI, synoptic.GI55,
          synoptic.DOS, synoptic.GI5_2, synoptic.SPC, synoptic.PCI24Hrs, synoptic.GI6_2,
          synoptic.AOP_2, synoptic.DPOP_2, synoptic.GI8_2, synoptic.AICL, synoptic.GOC, 
          synoptic.HBCLOM, synoptic.GI8_3, synoptic.AICL_2, synoptic.GOC_2, synoptic.HBCLOM_2,
          synoptic.GI8_4, synoptic.AICL_3, synoptic.GOC_3, synoptic.HBCLOM_3, synoptic.GI8_5, 
          synoptic.AICL_4, synoptic.GOC_4, synoptic.HBCLOM_4, synoptic.GI9, synoptic.Supp_Info,
          synoptic.Section_Indicator555, synoptic.GI1_3, synoptic.SignOfData_5, synoptic.Wetbulb_Temp,
          synoptic.R_Humidity, synoptic.V_Pressure, synoptic.remarks, synoptic.time_,
          synoptic.ObserverOnDuty, synoptic.to_, synoptic.from_, 'FALSE', synoptic.AS_SubmittedBy],callback);
      },

    updatesynoptic: function(synoptic, callback){
        let sql = "UPDATE archivesynopticformreportdata SET Date = ?, station = ?, TIME = ?, UWS = ?, BN = ?, IOOP = ?, TSPPW = ?, HLC = ?, HV = ?, TCC = ?, WD = ?, WS = ?, GI1_1 = ?, SignOfData_1 = ?, Air_temperature = ?, GI2_1 = ?, SignOfData_2 = ?, Dewpoint_temperature = ?, GI3_1 = ?, PASL = ?, GI4_1 = ?, SIS = ?, GSIS = ?, GI6_1 = ?, AOP = ?, DPOP = ?, GI7_1 = ?, Present_Weather = ?, Past_Weather = ?, GI8_1 = ?, AOC = ?, CLOG = ?, CGOG = ?, CHOG = ?, Section_Indicator333 = ?, GI0_1 = ?, GMT = ?, CIOP = ?, BEOP = ?, ThunderStorm = ?, HailStorm = ?, Fog = ?, EarthQuake = ?, Anemometer_Reading = ?, Actual_Rainfall = ?, GI1_2 = ?, SignOfData_3 = ?, Max_TempTx = ?, GI2_2 = ?, SignOfData_4 = ?, Max_TempTn = ?, GI5_1 = ?, AOE = ?, ITI = ?, GI55 = ?, DOS = ?, GI5_2 = ?, SPC = ?, PCI24Hrs = ?, GI6_2 = ?,AOP_2 = ?, DPOP_2 = ?, GI8_2 = ?, AICL = ?, GOC = ?, HBCLOM = ?, GI8_3 = ?, AICL_2 = ?, GOC_2 = ?, HBCLOM_2 = ?, GI8_4 = ?, AICL_3 = ?, GOC_3 = ?, HBCLOM_3 = ?, GI8_5 = ?, AICL_4 = ?, GOC_4 = ?, HBCLOM_4 = ?, GI9 = ?, Supp_Info = ?,Section_Indicator555 = ?, GI1_3 = ?, SignOfData_5 = ?, Wetbulb_Temp = ?, R_Humidity = ?, V_Pressure = ?, remarks = ?, time_ = ?, ObserverOnDuty = ?, to_ = ?, from_ = ?, Approved = ?, AS_SubmittedBy = ?"; 
        return db.query(sql,[ synoptic.Date, synoptic.station, synoptic.TIME, synoptic.UWS, 
          synoptic.BN, synoptic.IOOP, synoptic.TSPPW, synoptic.HLC, synoptic.HV, synoptic.TCC, 
          synoptic.WD, synoptic.WS, synoptic.GI1_1, synoptic.SignOfData_1, synoptic.Air_temperature,
          synoptic.GI2_1, synoptic.SignOfData_2, synoptic.Dewpoint_temperature, synoptic.GI3_1, 
          synoptic.PASL, synoptic.GI4_1, synoptic.SIS, synoptic.GSIS, synoptic.GI6_1, synoptic.AOP, 
          synoptic.DPOP, synoptic.GI7_1, synoptic.Present_Weather, synoptic.Past_Weather, synoptic.GI8_1, 
          synoptic.AOC, synoptic.CLOG, synoptic.CGOG, synoptic.CHOG, synoptic.Section_Indicator333, 
          synoptic.GI0_1, synoptic.GMT, synoptic.CIOP, synoptic.BEOP, synoptic.ThunderStorm, 
          synoptic.HailStorm, synoptic.Fog, synoptic.EarthQuake, synoptic.Anemometer_Reading, 
          synoptic.Actual_Rainfall, synoptic.GI1_2, 
          synoptic.SignOfData_3, synoptic.Max_TempTx, synoptic.GI2_2, synoptic.SignOfData_4, 
          synoptic.Max_TempTn, synoptic.GI5_1, synoptic.AOE, synoptic.ITI, synoptic.GI55,
          synoptic.DOS, synoptic.GI5_2, synoptic.SPC, synoptic.PCI24Hrs, synoptic.GI6_2,
          synoptic.AOP_2, synoptic.DPOP_2, synoptic.GI8_2, synoptic.AICL, synoptic.GOC, 
          synoptic.HBCLOM, synoptic.GI8_3, synoptic.AICL_2, synoptic.GOC_2, synoptic.HBCLOM_2,
          synoptic.GI8_4, synoptic.AICL_3, synoptic.GOC_3, synoptic.HBCLOM_3, synoptic.GI8_5, 
          synoptic.AICL_4, synoptic.GOC_4, synoptic.HBCLOM_4, synoptic.GI9, synoptic.Supp_Info,
          synoptic.Section_Indicator555, synoptic.GI1_3, synoptic.SignOfData_5, synoptic.Wetbulb_Temp,
          synoptic.R_Humidity, synoptic.V_Pressure, synoptic.remarks, synoptic.time_,
          synoptic.ObserverOnDuty, synoptic.to_, synoptic.from_, 'FALSE', synoptic.AS_SubmittedBy],callback);
      },

      //fetch all Synoptic Form by id
      getsynopticreportById: function(id, callback) {
        return db.query("Select * from archivesynopticformreportdata  where id = ?", [id], callback);
      },
    
}



module.exports = SynopticForm;