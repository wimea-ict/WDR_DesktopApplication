import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './view-station.component.html'
})
export class ViewstationComponent implements OnInit {
  stations: any = [];
  info: any;


  constructor(
     private router: Router,
     private dataService: DataService,
   ) { }

  ngOnInit() {
        this.dataService.getAllStations()
    .subscribe( data => {
      this.stations = data.json();
      console.log(this.stations);
    });

  }

  editStation(id){
    let stationId = id.toString();
    localStorage.setItem('stationId', stationId);
    this.router.navigate(['edit-station']);
  }

  deleteStation(id){
    this.dataService.delStation(id)
    .subscribe(() =>{
      this.router.navigate(['stations']);
    });
  }

}
