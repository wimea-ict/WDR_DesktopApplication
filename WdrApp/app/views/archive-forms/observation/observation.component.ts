import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService, DataService} from '../../../services/allServices';
import { Observe } from '../../../models/observationslip/observationslip';

@Component({
  selector: 'app-observation',
  templateUrl: './observation.component.html',
  styleUrls: ['./observation.component.scss']
})
export class ObservationComponent implements OnInit {

  public response;
  public username = this.tokenStorage.getUsername();
  observe = new Observe('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',this.username,'');

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService
  ) { }

  ngOnInit() {
  }
back(){
  this.router.navigate(['/archive-forms/observationslipform']);
}
addArchiveobservation(){
  this.dataService.addArchiveobservationslip(this.observe)
  .subscribe( res => {
    if (res.errno) {
      console.log('Sorry data has not been stored on local database, try resending it');
      console.log(res.sqlMessage)
    } else {
      console.log(res); 
      console.log('data inserted successfully');
      this.response = 'archive form inserted successfully';
     
    }
    this.router.navigate(['archive-forms/observationslipform']);
  },  err => console.log(err));
}
}
