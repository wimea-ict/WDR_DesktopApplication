var db = require('../dbconnection');

var ArchiveForm = {
    getAllarchiveforms: function(callback) {
        return db.query("Select * from  archivemonthlyrainfallformreportdata ", callback);
    },

       // add archive monthly rainfall form data
       addArchiverainfall: function(archive, callback){
        let sql = "INSERT INTO archivemonthlyrainfallformreportdata SET Date = ?, station = ?,StationNumber = ?, Rainfall = ?, AR_SubmittedBy = ?, Approved = ?";  
        return db.query(sql,[archive.Date, archive.station, archive.StationNumber,archive.Rainfall, archive.Username, 'FALSE'],callback);
    },

    getarchiveFormById: function(id, callback) {
        return db.query("Select * from archivemonthlyrainfallformreportdata  where id = ?", [id], callback);
      },

      updateArchiverainfall: function (archive, callback){
        let sql = "UPDATE archivemonthlyrainfallformreportdata SET Date = ?, station = ?, StationNumber = ?, Rainfall = ?  WHERE id = ?";
        return db.query(sql,[archive.Date, archive.station, archive.StationNumber, archive.Rainfall ,archive.id], callback);
      },

      /**
       * ARCHIVE SCANNED MONTHLY FORMS
       * 
       * ADD
       * GET 
       * UPDATE
       *  DELETE
       * 
       */
       // add archive monthly rainfall form data
       addArchivescannedforms: function(archivescanned, callback){
        let sql = "INSERT INTO scans_monthly ( Form_scanned, station, year, month, Description, FileRef, SM_SubmittedBy, ApprovedBy, Approved) VALUES (?,?,?,?,?,?,?,?,?)";  
        return db.query(sql,[archivescanned.Form_scanned, archivescanned.station,  archivescanned.year, archivescanned.month, archivescanned.Description, archivescanned.FileRef, archivescanned.SM_SubmittedBy, archivescanned.ApprovedBy, archivescanned.Approved],callback);
      },

      getAllScannedMonthlyRainfall: function(callback) {
      return db.query("Select * from  scans_monthly ", callback);
    },

       // add scanned annual rainfall form data
       addscannedAnnualrainfall: function(scannedannualrainfall, callback){
        let sql = "INSERT INTO scans_yearly ( Form_scanned, station, year, Description, FileRef, SY_SubmittedBy, ApprovedBy, Approved) VALUES (?,?,?,?,?,?,?,?)";  
        return db.query(sql,[scannedannualrainfall.Form_scanned, scannedannualrainfall.station,  scannedannualrainfall.year,  scannedannualrainfall.Description, scannedannualrainfall.FileRef, scannedannualrainfall.SY_SubmittedBy, scannedannualrainfall.ApprovedBy, scannedannualrainfall.Approved],callback);
      },

      getAllscannedAnnualRainfall: function(callback) {
      return db.query("Select * from  scans_yearly ", callback);
    },
       // add dekandal form data
       addscannDekandal: function(scannedDekandal, callback){
        let sql = "INSERT INTO scans_dekadals (station, from_date, to_date, Description, FileRef, SDE_SubmittedBy, ApprovedBy, Approved) VALUES (?,?,?,?,?,?,?,?)";  
        return db.query(sql,[scannedDekandal.station,  scannedDekandal.from_date, scannedDekandal.to_date,  scannedDekandal.Description, scannedDekandal.FileRef, scannedDekandal.SDE_SubmittedBy, scannedDekandal.ApprovedBy, scannedDekandal.Approved],callback);
      },

      getAllscannedDekandal: function(callback) {
      return db.query("Select * from  scans_dekadals ", callback);
    },
       // add synoptic form data
       addscannedSynoptic: function(scannedSynoptic, callback){
        let sql = "INSERT INTO scans_daily (Form_scanned, station, form_date, Description, FileName_FirstPage, FileName_SecondPage, SD_SubmittedBy, ApprovedBy, Approved) VALUES (?,?,?,?,?,?,?,?,?)";  
        return db.query(sql,[scannedSynoptic.Form_scanned, scannedSynoptic.station,  scannedSynoptic.form_date,  scannedSynoptic.Description, scannedSynoptic.FileName_FirstPage, scannedSynoptic.FileName_SecondPage, scannedSynoptic.SD_SubmittedBy, scannedSynoptic.ApprovedBy, scannedSynoptic.Approved],callback);
      },

      getAllscannedSynoptic: function(callback) {
      return db.query("Select * from  scans_daily WHERE Form_scanned = 'synopticform'", callback);
    },
       // add metar form data
       addscannedMetar: function(scannedMetar, callback){
        let sql = "INSERT INTO scans_daily (Form_scanned, station, form_date, Description, FileRef, SD_SubmittedBy, ApprovedBy, Approved) VALUES (?,?,?,?,?,?,?,?)";  
        return db.query(sql,[scannedMetar.Form_scanned, scannedMetar.station,  scannedMetar.form_date, scannedMetar.Description, scannedMetar.FileRef, scannedMetar.SD_SubmittedBy, scannedMetar.ApprovedBy, scannedMetar.Approved],callback);
      },

      getAllscannedMetar: function(callback) {
      return db.query("Select * from  scans_daily WHERE Form_scanned = 'metarreport'", callback);
    },
       // add obseravtionslip form data
       addscannedObservationslip: function(scannedObseravtionslip, callback){
        let sql = "INSERT INTO scans_daily (Form_scanned, station, form_date, TIME, Description, FileRef, SD_SubmittedBy, ApprovedBy, Approved) VALUES (?,?,?,?,?,?,?,?,?)";  
        return db.query(sql,[scannedObseravtionslip.Form_scanned, scannedObseravtionslip.station,  scannedObseravtionslip.form_date, scannedObseravtionslip.TIME, scannedObseravtionslip.Description, scannedObseravtionslip.FileRef, scannedObseravtionslip.SD_SubmittedBy, scannedObseravtionslip.ApprovedBy, scannedObseravtionslip.Approved],callback);
      },

      getAllscannedObservationslip: function(callback) {
      return db.query("Select * from  scans_daily WHERE Form_scanned = 'observationslip'", callback);
    },

}



module.exports = ArchiveForm;