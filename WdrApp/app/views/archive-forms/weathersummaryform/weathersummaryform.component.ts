import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/allServices';
import { TokenStorageService } from '../../../services/allServices';

@Component({
  selector: 'app-weathersummaryform',
  templateUrl: './weathersummaryform.component.html',
  styleUrls: ['./weathersummaryform.component.scss']
})
export class WeathersummaryformComponent implements OnInit {
  
  archiveweather: any = [];
  title = 'Archive weather summary form';
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

    this.dataService.getAllweatherforms()
    .subscribe( data => {
      this.archiveweather = data.json();
      console.log(this.archiveweather);
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

  weather(){
    this.router.navigate(['/archive-forms/weather']);
  }

  editweather(id){
    let editweather = id.toString();
    localStorage.setItem('editweather', editweather);
    this.router.navigate(['/archive-forms/editweather']);
  }

}
