var db = require('../dbconnection');

var Instruments = {

    //Instrument
    addInstrument: function(instrument, callback){
        let sql = "insert into  instruments SET InstrumentName = ? , StationName = ? , StationNumber = ? , DateRegistered = ? , ExpirationDate = ? , InstrumentCode = ?, Manufacturer = ? ,  Description = ? , SubmittedBy = ?";
  
        return db.query(sql,[instrument.InstrumentName, instrument.StationName, instrument.StationNumber, instrument.DateRegistered, instrument.ExpirationDate, instrument.InstrumentCode, instrument.Manufacturer, instrument.Description, instrument.SubmittedBy],callback);
    },
    getInstrumentsById: function(id, callback) {         
        return db.query("Select * from  instruments where id = ?",[id], callback);
    },
    getAllInstruments: function(callback) {
        return db.query("Select * from  instruments", callback);
    }

}

module.exports = Instruments;