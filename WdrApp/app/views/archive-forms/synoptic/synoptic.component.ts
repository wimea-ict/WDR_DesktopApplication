import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService, DataService} from '../../../services/allServices';
import { Synoptic} from '../../../models/observationslip/observationslip';
@Component({
  selector: 'app-synoptic',
  templateUrl: './synoptic.component.html',
  styleUrls: ['./synoptic.component.scss']
})
export class SynopticComponent implements OnInit {

  public response;
  public username = this.tokenStorage.getUsername();
  synoptic = new Synoptic('','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','',this.username,);

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    console.log(this.tokenStorage.getUsername()); 
  }
back(){
  this.router.navigate(['/archive-forms/synopticform']);
}

addSynoptic(){
  this.dataService.addSynopticform(this.synoptic)
  .subscribe( res => {
    if (res.errno) {
      console.log('Sorry data has not been stored on local database, try resending it');
      console.log(res.sqlMessage)
    } else {
      console.log(res); 
      console.log('data inserted successfully');
      this.response = 'archive form inserted successfully';
     
    }
    this.router.navigate(['archive-forms/synopticform']);
  },  err => console.log(err));
}
}
