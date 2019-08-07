var db = require('../dbconnection');

var Elements = {

    //Elements
    addElement: function(element, callback){
        let sql = "insert into  elements SET ElementName = ? ,InstrumentName = ? , StationName = ? , StationNumber = ? , Abbrev = ? , Type = ? , Units = ?, Scale = ? ,  Limits = ? , Description = ? , SubmittedBy = ?";
  
        return db.query(sql,[element.ElementName, element.InstrumentName, element.StationName, element.StationNumber, element.Abbrev, element.Type, element.Units, element.Scale, element.Limits, element.Description, element.SubmittedBy],callback);
    },
    getElementById: function(id, callback) {         
        return db.query("Select * from  elements where id = ?",[id], callback);
    },
    getAllElements: function(callback) {
        return db.query("Select * from  elements", callback);
    },
    deleteElement: function(id, callback) {
        return db.query("delete from elements where id = ?", [id], callback);
    },
    updateElement: function(element, callback){
    let sql = "UPDATE  elements SET ElementName = ? ,InstrumentName = ? , StationName = ? , StationNumber = ? , Abbrev = ? , Type = ? , Units = ?, Scale = ? ,  Limits = ? , Description = ? WHERE  id  =  ?";
    return db.query(sql,[element.ElementName, element.InstrumentName, element.StationName, element.StationNumber, element.Abbrev, element.Type, element.Units, element.Scale, element.Limits, element.Description, element.id], callback);
    }

}

module.exports = Elements;