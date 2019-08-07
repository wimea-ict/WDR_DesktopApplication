import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/allServices';


@Component({
  selector: 'app-edit-station',
  templateUrl: './edit-station.component.html'
})
export class EditStationComponent implements OnInit {

 station : any = {};

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

    const stationId = JSON.parse(localStorage.getItem('stationId'));
    console.log(stationId);
    if(!stationId){
      alert('Invalid action.');
      this.router.navigate(['stations']);
      return;
    } else {
      this.getStationById(stationId);
    }

  }

  getStationById(stationId){
      this.dataService.getStationById(stationId)
      .subscribe( Id => {
        console.log(Id);
        var statnID = Id;
        this.station = statnID[0];
        console.log(this.station);
      }, err => console.log(err));

    }

  updateStation(){
    this.dataService.updateStation(this.station)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['stations']);
    },
    errno => console.log(errno));
    }

    back() {
      this.router.navigate(['stations']);
    }
}
