import { Component, OnInit} from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../../../services/allServices';
import { Station } from '../../../models/station/station';
import { TokenStorageService } from '../../../services/allServices';

@Component({
  selector: 'app-station',
  templateUrl: 'station.component.html'
})
export class StationComponent implements OnInit {

  public username =  this.tokenStorage.getUsername();
  station = new Station('','','','','','','Uganda', 0, 0, 0, 0,'','','','',this.username,'');
  public response;

constructor(
  private dataService: DataService,
  private tokenStorage: TokenStorageService,
  private router: Router
) {}

ngOnInit(){

}
  save(){
    this.dataService.addStation(this.station)
    .subscribe( res => {
      if (res.errno) {
        console.log(res.sqlMessage);
      } else {
        console.log(this.station)
        this.response = 'Station stored locally successfully';
        console.log(this.response);
      }

      this.router.navigate(['stations']);
    },  
    err => console.log(err));

  }

  back(){
    this.router.navigate(['dashboard']);
  }

}

