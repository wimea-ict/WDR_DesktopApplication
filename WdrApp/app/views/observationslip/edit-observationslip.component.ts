import { Component, OnInit } from '@angular/core';
import { DataService, ConnectionServiceService } from '../../services/allServices';
import { Router } from '@angular/router';
import { TokenStorageService } from '../../services/allServices';


@Component({
  selector: 'app-editobservationslip',
  templateUrl: './edit-observationslip.component.html',
  styleUrls: ['./edit-observationslip.component.css']
})
export class EditobservationslipComponent implements OnInit {
 private connectionStatus;
 observationslip : any = {};
 info: any;
  constructor(
    private dataService: DataService,
    public conn: ConnectionServiceService,
    private router: Router,
    private token: TokenStorageService
  ) { }

  ngOnInit() {

    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };

    const slipId = JSON.parse(localStorage.getItem('editSlipId'));
    console.log(slipId);
    if(!slipId){
      alert('Invalid action.');
      this.router.navigate(['observationslip/view-observationslip']);
      return;
    } else {
      this.getObservationslip(slipId);
    }

  }

  getObservationslip(slipId){
    this.dataService.getObservationslip(slipId)
    .subscribe( Oslip => {
      console.log(Oslip);
      var slip = Oslip;
      this.observationslip = slip[0];
      console.log(this.observationslip);
    }, err => console.log(err));

  }

updateObservationslipData(){
  this.dataService.updateObservatonslip(this.observationslip)
  .subscribe( res =>{
    console.log(res);
    this.router.navigate(['observationslip/view-observationslip']);
  }, err => console.log(err));


  }

}
