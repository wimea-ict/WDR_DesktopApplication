import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { Archive } from '../../../models/observationslip/observationslip';
import {TokenStorageService} from '../../../services/allServices';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
;
  private connectionStatus;

  public response;
  public username = this.tokenStorage.getUsername();
  archive = new Archive('','','','','','',this.username);
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService,
   

   
  ) { }

  ngOnInit() {
    console.log(this.tokenStorage.getUsername());
    
  }
  back(){
    this.router.navigate(['/archive-forms/archiveform']);
  }
  addArchiverainfall(){
    this.dataService.addArchiverainfall(this.archive)
    .subscribe( res => {
      if (res.errno) {
        console.log('Sorry data has not been stored on local database, try resending it');
        console.log(res.sqlMessage)
      } else {
        console.log(res); 
        console.log('data inserted successfully');
        this.response = 'archive form inserted successfully';
       
      }
      this.router.navigate(['archive-forms/archiveform']);
    },  err => console.log(err));
}
}
