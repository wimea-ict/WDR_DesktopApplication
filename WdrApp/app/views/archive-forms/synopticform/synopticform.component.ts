import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { TokenStorageService } from '../../../services/allServices';


@Component({
  selector: 'app-synopticform',
  templateUrl: './synopticform.component.html',
  styleUrls: ['./synopticform.component.scss']
})
export class SynopticformComponent implements OnInit {

  archivesynoptic: any = [];
  title = 'Archive synoptic form';
  p: Number = 1;
  count: Number = 5;
  private roles: string[];
  public authority: string;

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    this.dataService.getAllSynopticforms()
    .subscribe( data => {
      this.archivesynoptic = data.json();
      console.log(this.archivesynoptic);
    });

    if ( this.tokenStorage.getToken()) {
      this.roles =  this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if ( role === 'ROLE_SENIOR DATA OFFICER') {
          this.authority = 'Senior Data Officer';
          return false;
        } else if ( role === 'ROLE_DATA OFFICER') {
          this.authority = 'Data Officer';
          return false;
        }
        else if ( role === 'ROLE_OBSERVER ARCHIVE') {
          this.authority = 'Observer Archive';
          return false;
        } else
        this.authority = 'Observer';
        return true;
      })
    }
  }
synoptic(){
  this.router.navigate(['/archive-forms/synoptic']);
}

editsynoptic(id){
  let editsynoptic = id.toString();
  localStorage.setItem('editsynoptic', editsynoptic);
  this.router.navigate(['/archive-forms/editsynopticform']);
}


}
