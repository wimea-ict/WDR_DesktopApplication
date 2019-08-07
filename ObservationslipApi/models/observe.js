var db = require('../dbconnection');

var ObserveForm = {
    getAllarchiveobserveforms: function(callback) {
        return db.query("Select * from  archiveobservationslipformdata ", callback);
    },

    //add archive observation slip
  addArchiveobservationslip: function(observe, callback){
    let sql = "INSERT INTO archiveobservationslipformdata  (Date, station, TIME, TotalAmountOfAllClouds, TotalAmountOfLowClouds, TypeOfLowClouds1, OktasOfLowClouds1, HeightOfLowClouds1, CLCODEOfLowClouds1, TypeOfLowClouds2, OktasOfLowClouds2, HeightOfLowClouds2, CLCODEOfLowClouds2, TypeOfLowClouds3, OktasOfLowClouds3, HeightOfLowClouds3, CLCODEOfLowClouds3, TypeOfMediumClouds1, OktasOfMediumClouds1, HeightOfMediumClouds1, CLCODEOfMediumClouds1, TypeOfMediumClouds2, OktasOfMediumClouds2, HeightOfMediumClouds2, CLCODEOfMediumClouds2, TypeOfMediumClouds3, OktasOfMediumClouds3, HeightOfMediumClouds3, CLCODEOfMediumClouds3, TypeOfHighClouds1, OktasOfHighClouds1, HeightOfHighClouds1, CLCODEOfHighClouds1, TypeOfHighClouds2, OktasOfHighClouds2, HeightOfHighClouds2, CLCODEOfHighClouds2, TypeOfHighClouds3, OktasOfHighClouds3, HeightOfHighClouds3, CLCODEOfHighClouds3, CloudSearchLightReading, Rainfall, Dry_Bulb, Wet_Bulb, Max_Read, Max_Reset, Min_Read, Min_Reset, Piche_Read, Piche_Reset, TimeMarksThermo, TimeMarksHygro, TimeMarksRainRec, Present_Weather, Visibility, Wind_Direction, Wind_Speed, Gusting, AttdThermo, PrAsRead, Correction, CLP, MSLPr, TimeMarksBarograph, TimeMarksAnemograph, OtherTMarks, Remarks, AO_SubmittedBy, Approved ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) "; 
    return db.query(sql,[observe.Date,observe.station, observe.TIME, observe.TotalAmountOfAllClouds, observe.TotalAmountOfLowClouds, 
      observe.TypeOfLowClouds1, observe.OktasOfLowClouds1, observe.HeightOfLowClouds1, observe.CLCODEOfLowClouds1, observe.TypeOfLowClouds2, 
      observe.OktasOfLowClouds2, observe.HeightOfLowClouds2, observe.CLCODEOfLowClouds2, observe.TypeOfLowClouds3, observe.OktasOfLowClouds3, 
      observe.HeightOfLowClouds3, observe.CLCODEOfLowClouds3, observe.TypeOfMediumClouds1, observe.OktasOfMediumClouds1, 
      observe.HeightOfMediumClouds1, observe.CLCODEOfMediumClouds1, observe.TypeOfMediumClouds2, observe.OktasOfMediumClouds2, 
      observe.HeightOfMediumClouds2, observe.CLCODEOfMediumClouds2, observe.TypeOfMediumClouds3, observe.OktasOfMediumClouds3, 
      observe.HeightOfMediumClouds3, observe.CLCODEOfMediumClouds3, observe.TypeOfHighClouds1, observe.OktasOfHighClouds1, 
      observe.HeightOfHighClouds1, observe.CLCODEOfHighClouds1, observe.TypeOfHighClouds2, observe.OktasOfHighClouds2, 
      observe.HeightOfHighClouds2, observe.CLCODEOfHighClouds2, observe.TypeOfHighClouds3, observe.OktasOfHighClouds3, 
      observe.HeightOfHighClouds3, observe.CLCODEOfHighClouds3, observe.CloudSearchLightReading, observe.Rainfall, 
      observe.Dry_Bulb, observe.Wet_Bulb, observe.Max_Read, observe.Max_Reset, observe.Min_Read, observe.Min_Reset, observe.Piche_Read, observe.Piche_Reset, 
      observe.TimeMarksThermo, observe.TimeMarksHygro, observe.TimeMarksRainRec, observe.Present_Weather, observe.Visibility, observe.Wind_Direction, 
      observe.Wind_Speed, observe.Gusting, observe.AttdThermo, observe.PrAsRead, observe.Correction, observe.CLP,observe.MSLPr, observe.TimeMarksBarograph, 
      observe.TimeMarksAnemograph, observe.OtherTMarks, observe.Remarks, observe.AO_SubmittedBy, 'FALSE'],callback);
  },

}



module.exports = ObserveForm;