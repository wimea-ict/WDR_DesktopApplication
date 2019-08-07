import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './view-instrument.component.html'
})
export class ViewInstrumentComponent implements OnInit {
  instruments: any = [];

  constructor(
     private router: Router,
     private dataService: DataService,
   ) { }

  ngOnInit() {
        this.dataService.getAllInstruments()
    .subscribe( data => {
      this.instruments = data.json();
      console.log(this.instruments);
    });

  }

  addStation(){
    this.router.navigate(['instruments'])
  }

}
