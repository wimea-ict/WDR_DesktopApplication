import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TokenStorageService, DataService} from '../../../services/allServices';
import { Dekandal } from '../../../models/observationslip/observationslip';

@Component({
  selector: 'app-dekandal',
  templateUrl: './dekandal.component.html',
  styleUrls: ['./dekandal.component.scss']
})
export class DekandalComponent implements OnInit {

  public response;
  public username = this.tokenStorage.getUsername();
  dekandal = new Dekandal('','','','','','','','','','','','','','','','','',this.username,'');

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    console.log(this.tokenStorage.getUsername()); 
  }
  back(){
    this.router.navigate(['/archive-forms/dekandalform']);
  }

  addDekandal(){
    this.dataService.addDekandalform(this.dekandal)
    .subscribe( res => {
      if (res.errno) {
        console.log('Sorry data has not been stored on local database, try resending it');
        console.log(res.sqlMessage)
      } else {
        console.log(res); 
        console.log('data inserted successfully');
        this.response = 'archive form inserted successfully';
       
      }
      this.router.navigate(['archive-forms/dekandalform']);
    },  err => console.log(err));
}
}
