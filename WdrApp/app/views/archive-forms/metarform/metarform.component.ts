import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { TokenStorageService } from '../../../services/allServices';

@Component({
  selector: 'app-metarform',
  templateUrl: './metarform.component.html',
  styleUrls: ['./metarform.component.scss']
})
export class MetarformComponent implements OnInit {
  archivemetar: any = [];
  title = 'Archive metar form';
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
    this.dataService.getAllmetarforms()
    .subscribe( data => {
      this.archivemetar = data.json();
      console.log(this.archivemetar);
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
metar(){
  this.router.navigate(['/archive-forms/metar']);
}

  editmetar(id){
  let editmetar = id.toString();
  localStorage.setItem('editmetar', editmetar);
  this.router.navigate(['/archive-forms/editmetarform']);
}

}
