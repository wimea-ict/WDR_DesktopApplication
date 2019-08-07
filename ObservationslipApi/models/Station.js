var db = require('../dbconnection');

var Station = {
      
    addStation: function(station, callback){
      let sql = "insert into  stations SET StationName = ? , StationNumber = ? , StationRegNumber = ? , Location = ? , Indicator = ? , StationRegion = ? ,  Country = ? , Latitude = ? ,Longitude = ?,Height = ? ,Altitude = ? , StationStatus = ? , StationType = ? , Opened = ? ,Closed = ? , SubmittedBy = ? , stationCategory = ? ";

      return db.query(sql,[station.StationName, station.StationNumber, station.StationRegNumber, station.Location, station.Indicator, station.StationRegion, station.Country, station.Latitude, station.Longitude, station.Height, station.Altitude, station.StationStatus, station.StationType, station.Opened, station.Closed, station.SubmittedBy, 'Manual'],callback);
    },
    getStationById: function(id, callback) {         
        return db.query("Select * from  stations where station_id = ?",[id], callback);
    },
    getAllStations: function(callback) {
      return db.query("Select * from  stations", callback);
    },
    deleteStation: function(id, callback) {
      return db.query("delete from stations where station_id = ?", [id], callback);
    },
    getArchiveStationByName: function(station, callback) {         
      return db.query("Select * from  stations where StationName = ?",[station], callback);
    },
    updateStation: function(station, callback){
      let sql = "UPDATE  stations SET StationName = ? , StationNumber = ? , StationRegNumber = ? , Location = ? , Indicator = ? , StationRegion = ? ,  Country = ? , Latitude = ? ,Longitude = ?,Height = ? ,Altitude = ? , StationStatus = ? , StationType = ? , Opened = ? ,Closed = ? WHERE  station_id  =  ?";
      return db.query(sql,[station.StationName, station.StationNumber, station.StationRegNumber, station.Location, station.Indicator, station.StationRegion, station.Country, station.Latitude, station.Longitude, station.Height, station.Altitude, station.StationStatus, station.StationType, station.Opened, station.Closed, station.station_id], callback);
    }
};

module.exports = Station;
