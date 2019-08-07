import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { TokenStorageService } from '../../../services/allServices';

@Component({
  selector: 'app-archiveform',
  templateUrl: './archiveform.component.html',
  styleUrls: ['./archiveform.component.scss']
})
export class ArchiveformComponent implements OnInit {

  archivemonthly: any = [];
  archivestation: any = [];
  station: string;
  title = 'Archiveform';
  info: any;
  p: Number = 1;
  count: Number = 5;
  private roles: string[];
  public authority: string;


  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router,
    private dataService: DataService,
    private token: TokenStorageService
  ) { }

  ngOnInit() {
    this.dataService.getAllarchiveforms()
    .subscribe( data => {
      this.archivemonthly = data.json();
      console.log(this.archivemonthly);
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


  Archive(){
    this.router.navigate(['/archive-forms/archive']);
  }

  editarchive(id, station){
    let editarc = id.toString();
    let archivestation = station.toString();
    localStorage.setItem('editarch', editarc);
    localStorage.setItem('archivestation', archivestation);
    this.router.navigate(['/archive-forms/editarchive']);
  }

}
