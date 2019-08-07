import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService, DataService} from '../../../services/allServices';
import { Metar } from '../../../models/observationslip/observationslip';


@Component({
  selector: 'app-metar',
  templateUrl: './metar.component.html',
  styleUrls: ['./metar.component.scss']
})
export class MetarComponent implements OnInit {

  public response;
  public username = this.tokenStorage.getUsername();
  metar = new Metar('','','','','','','','','','','','','','','','',this.username,'',);

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
back(){
  this.router.navigate(['/archive-forms/metarform']);
  console.log(this.tokenStorage.getUsername()); 
}
addMetar(){
  this.dataService.addMetarform(this.metar)
  .subscribe( res => {
    if (res.errno) {
      console.log('Sorry data has not been stored on local database, try resending it');
      console.log(res.sqlMessage)
    } else {
      console.log(res); 
      console.log('data inserted successfully');
      this.response = 'archive form inserted successfully';
     
    }
    this.router.navigate(['archive-forms/metarform']);
  },  err => console.log(err));
}
}
