import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService, DataService} from '../../../services/allServices';
import { Weathersummary} from '../../../models/observationslip/observationslip';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public response;
  public username = this.tokenStorage.getUsername();
  weathersummary = new Weathersummary('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',this.username,'',);


  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
  }
back(){
  this.router.navigate(['/archive-forms/weathersummaryform']);
}
addWeathersummary(){
  this.dataService.addWeathersummaryform(this.weathersummary)
  .subscribe( res => {
    if (res.errno) {
      console.log('Sorry data has not been stored on local database, try resending it');
      console.log(res.sqlMessage)
    } else {
      console.log(res); 
      console.log('data inserted successfully');
      this.response = 'archive form inserted successfully';
     
    }
    this.router.navigate(['archive-forms/weathersummaryform']);
  },  err => console.log(err));
}
}
