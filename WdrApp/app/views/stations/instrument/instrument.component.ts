import { Component, OnInit, HostBinding} from '@angular/core';
import {  Router } from '@angular/router';
import { DataService} from '../../../services/allServices';
import { Instrument } from '../../../models/station/station';
import { TokenStorageService } from '../../../services/allServices';



@Component({
  selector: 'app-instrument',
  templateUrl: 'instrument.component.html'
})
export class InstrumentComponent implements OnInit {

  public username =  this.tokenStorage.getUsername();

  instrument = new Instrument('','', 0,'','','','','',this.username);

constructor(
  private dataService: DataService,
  private tokenStorage: TokenStorageService,
  private router: Router
) {}

ngOnInit(){

}

  save(){
    this.dataService.addInstrument(this.instrument)
    .subscribe( res => {
      if (res.errno) {
        console.log(res.sqlMessage);
      } else {
        console.log('Inserted');
      }

      this.router.navigate(['view-instruments']);
    },  
    err => console.log(err));

  }


  back(){
    this.router.navigate(['view-instruments']);
  }

}

