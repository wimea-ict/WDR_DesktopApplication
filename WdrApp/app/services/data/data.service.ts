import { Injectable } from '@angular/core';
import { Station, Instrument, Element } from '../../models/station/station';
import { Observationslip, Archive, Dekandal, Synoptic, Metar, Weathersummary, Observe, Archivescanned, scannedAnnualRainfall,scannedDekandal, scannedMetar, scannedSynoptic, scannedObservationslip} from '../../models/observationslip/observationslip';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Http,Headers,Response,RequestOptions } from '@angular/http';
import 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};



@Injectable()

export class DataService {

  public url:string='http://localhost:3000/Tasks';
  public UsersUrl:string='http://localhost:3000/users';
  public formsUrl:string='http://localhost:3000/forms';
  public stationsUrl:string='http://localhost:3000/stations';
  public instrumentsUrl:string='http://localhost:3000/instruments';
  public elementsUrl:string='http://localhost:3000/elements';
  public archivesUrl:string='http://localhost:3000/archives';
  public dekandalsUrl:string='http://localhost:3000/dekandals';
  public synopticsUrl:string='http://localhost:3000/synoptics';
  public metarsUrl:string='http://localhost:3000/metars';
  public weathersUrl:string='http://localhost:3000/weathers';
  public observesUrl:string='http://localhost:3000/observes';
  private wimeaOnlineApi:string='http://wimea.mak.ac.ug/wdr/wimeaDesktopApiconnect/insert.php';
  private wimeaOfflineURL:string='http://localhost/ionic_login/wimeaDesktopApiconnect/insert.php';
  private observationslipApi = '/api/observationslip';
  private connectionStatus;


  constructor(private _http: Http, private http: HttpClient) {

    }

  //OBSERVATIONSLIP
    getAllObservationslips(){
      return this._http.get(this.formsUrl);
    }

    getObservationslip(id: number): Observable <any> {
      return this.http.get(this.formsUrl+ '/'+id);
    }

    getReportObservationslips(){
      return this._http.get(this.formsUrl)
      .map(res => res.json());
    }

    countSyncObservationslips(){
      return this._http.get(this.formsUrl+'/count');
    }

    getObservationslipFormBySubmission(){
      return this._http.get(this.formsUrl+'/desktopdata');
    }
    getObservationslipFormBySubmissionAws(){
      return this._http.get(this.formsUrl+'/desktopaws');
    }

    updateObservatonslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.formsUrl+'/updateObservationslip', body, options)
      .map((response: Response) => response.json());
    }

    approveObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      console.log(body);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.formsUrl+'/approve', body, options)
      .map((response: Response) => response.json());
    }

    createObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        return this._http.post(this.formsUrl+ '/create', body, options)
      .map((response: Response) => response.json());
    }

    // update sync status
    updateSyncStatus(id){
      console.log(id);
      let body = JSON.stringify(id);
      console.log(body);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
        return this._http.put(this.formsUrl+'/updateSyncStatus', body, options)
      .map((response: Response) => response.json());

    }

    //save observationslip online
    syncObservationslip(observationslip: Observationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
          return this._http.post(this.wimeaOnlineApi, body, options)
      .map((response: Response) => response.json());

    }

    //Stations
    addStation(station: Station){
      let body = JSON.stringify(station);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });

      return this._http.post(this.stationsUrl+'/newstation', body, options)
      .map((response: Response) => response.json());
    }

    getAllStations(){
      return this._http.get(this.stationsUrl);
    }

    getStationById(id: number): Observable <any> {
      return this.http.get(this.stationsUrl+ '/'+id);
    }

    delStation(id: number) {
      return this._http.delete(this.stationsUrl+ '/delStation/'+id);
    }

    updateStation(station: Station){
      let body = JSON.stringify(station);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.stationsUrl+'/updateStation', body, options)
      .map((response: Response) => response.json());
    }

    getArchiveStationByName(station){
      return this._http.get(this.stationsUrl+ '/getarchivestation/'+station)
      .map(res => res.json());
    }

    //Instruments
    addInstrument(instrument: Instrument){
      let body = JSON.stringify(instrument);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });

      return this._http.post(this.instrumentsUrl+'/newinstrument', body, options)
      .map((response: Response) => response.json());
    }

    getAllInstruments(){
      return this._http.get(this.instrumentsUrl);
    }

    getInstrumentsById(id: number): Observable <any> {
      return this.http.get(this.instrumentsUrl+ '/'+id);
    }
    
    //Elements
    addElement(element: Element){
      let body = JSON.stringify(element);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });

      return this._http.post(this.elementsUrl+'/newelement', body, options)
      .map((response: Response) => response.json());
    }

    getAllElements(){
      return this._http.get(this.elementsUrl);
    }

    getElementById(id: number): Observable <any> {
      return this.http.get(this.elementsUrl+ '/'+id);
    }

    deleteElement(id: number) {
      return this._http.delete(this.elementsUrl+ '/delElement/'+id);
    }

    updateElement(element: Element){
      let body = JSON.stringify(element);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.elementsUrl+'/updateElement', body, options)
      .map((response: Response) => response.json());
    }

    //User
    getUserByUsername(username: string){
      return this.http.get(this.UsersUrl+ '/'+username);
    }

    /**
 * ARCHIVE FORMS
 * 
 * archive annual rainfall form
 * archive weather summary data
 * archive dekandal form
 * archive metar form
 * archive observationslip
 * archive synoptic
 * 
 * 
 */
      //get archive monthly report forms from the db

      getAllarchiveforms(){
        return this._http.get(this.archivesUrl+'/archiveforms');
      }

      // get archive dekandal forms
      getAlldekandalforms(){
        return this._http.get(this.dekandalsUrl+'/dekandalforms');
      }

      // get archive synoptic forms
      getAllSynopticforms(){
        return this._http.get(this.synopticsUrl+'/synopticforms');
      }

      // get all archive metar forms data
      getAllmetarforms(){
        return this._http.get(this.metarsUrl+'/metarforms');
      }

      // get all archive weather summary form data copy
      getAllweatherforms(){
        return this._http.get(this.weathersUrl +'/weatherforms');
      }

      // get all archive observation slip form data
      getAllarchiveobserveforms(){
        return this._http.get(this.observesUrl+'/observeforms');
      }

    //add archive monthly rainfallform report
    addArchiverainfall(archive: Archive){
      let body = JSON.stringify(archive);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/archive', body, options)
      .map((response: Response) => response.json());
    }

//add archive dekandal form
    addDekandalform(dekandal: Dekandal){
      let body = JSON.stringify(dekandal);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.dekandalsUrl+'/adddekandalform', body, options)
      .map((response: Response) => response.json());
    }

    //add  archive synoptic form data 
    addSynopticform(synoptic: Synoptic){
      let body = JSON.stringify(synoptic);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.synopticsUrl+'/addsynopticform', body, options)
      .map((response: Response) => response.json());
    }
    
    //add archive metar form data
    addMetarform(metar: Metar){
      let body = JSON.stringify(metar);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.metarsUrl +'/addmetarform', body, options)
      .map((response: Response) => response.json());
    }

    //add archive weather summary form data
    addWeathersummaryform(metar: Weathersummary){
      let body = JSON.stringify(metar);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.weathersUrl+'/weathersummary', body, options)
      .map((response: Response) => response.json());
    }
//add archice observationslip form data 
addArchiveobservationslip(observe: Observe){
      let body = JSON.stringify(observe);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.observesUrl+'/observe', body, options)
      .map((response: Response) => response.json());
    }

    getArchiveformbyid(id){
      return this._http.get(this.archivesUrl+ '/getarchive/'+id)
      .map(res => res.json());
    }

    getdekandalreport(id){
      return this._http.get(this.dekandalsUrl+ '/getdekandal/'+id)
      .map(res => res.json());
    }
    
    getmetarreport(id){
      return this._http.get(this.metarsUrl+ '/getmetar/'+id)
      .map(res => res.json());
    }

    getsynopticreport(id){
      return this._http.get(this.synopticsUrl+ '/getsynoptic/'+id)
      .map(res => res.json());
    }
    
    getweathersummaryreport(id){
      return this._http.get(this.weathersUrl+ '/getweathersummary/'+id)
      .map(res => res.json());
    }

    updateArchiverainfall(archive: Archive){
      let body = JSON.stringify(archive);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.archivesUrl+'/updatearchive', body, options)
      .map((response: Response) => response.json());
    }

    updateDekandalForm(dekandal: Dekandal){
      let body = JSON.stringify(dekandal);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.dekandalsUrl+'/updatedekandal', body, options)
      .map((response: Response) => response.json());
    }

    updateMetarForm(metar: Metar){
      let body = JSON.stringify(metar);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.metarsUrl+'/updatemetar', body, options)
      .map((response: Response) => response.json());
    }

    updateSynopticform(synoptic: Synoptic){
      let body = JSON.stringify(synoptic);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.synopticsUrl+'/updatesynoptic', body, options)
      .map((response: Response) => response.json());
    }

    updateWeathersummaryform(weathersummary: Weathersummary){
      let body = JSON.stringify(weathersummary);
      let headers = new Headers({ 'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers });
      return this._http.put(this.weathersUrl+'/updateweathersummary', body, options)
      .map((response: Response) => response.json());
    }

    /**
     * 
     * ARCHIVE SCANNED FORMS 
     * the code for archive scanned forms goes here
     */
     //scanned archive monthly rainfallform report
     addArchivescanned(archivescanned: Archivescanned){
      let body = JSON.stringify(archivescanned);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/archivescanned', body, options)
      .map((response: Response) => response.json());
    }

    getAllScannedMonthlyRainfall(){
      return this._http.get(this.archivesUrl+'/scannedmonthlyrainfall');
    }

    //scanned Annual rainfall

    addscannedAnnualRainfall(scannedAnnual: scannedAnnualRainfall){
      let body = JSON.stringify(scannedAnnual);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/scannedannualrainfall', body, options)
      .map((response: Response) => response.json());
    }

    getAllscannedAnnualRainfall(){
      return this._http.get(this.archivesUrl+'/scannedAnnualRainfall');
    }

    //scanned Dekandal

    addscannDekandal(Dekandal: scannedDekandal){
      let body = JSON.stringify(Dekandal);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/addscannDekandal', body, options)
      .map((response: Response) => response.json());
    }

    getAllscannedDekandal(){
      return this._http.get(this.archivesUrl+'/getAllscannedDekandal');
    }

    //scanned Metar

    addscannedMetar(metar: scannedMetar){
      let body = JSON.stringify(metar);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/addscannedMetar', body, options)
      .map((response: Response) => response.json());
    }

    getAllscannedMetar(){
      return this._http.get(this.archivesUrl+'/getAllscannedMetar');
    }

    //scanned Synoptic

    addscannedSynoptic(synoptic: scannedSynoptic){
      let body = JSON.stringify(synoptic);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/addscannedSynoptic', body, options)
      .map((response: Response) => response.json());
    }

    getAllscannedSynoptic(){
      return this._http.get(this.archivesUrl+'/getAllscannedSynoptic');
    }

    //scanned Observationslip

    addscannedObservationslip(observationslip: scannedObservationslip){
      let body = JSON.stringify(observationslip);
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({ headers: headers});
        return this._http.post(this.archivesUrl+'/addscannedObservationslip', body, options)
      .map((response: Response) => response.json());
    }

    getAllscannedObservationslip(){
      return this._http.get(this.archivesUrl+'/getAllscannedObservationslip');
    }



}
 