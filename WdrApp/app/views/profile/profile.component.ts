import {Component,  OnInit } from '@angular/core';
import { DataService } from '../../services/allServices';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from '../../services/allServices';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public username =  this.tokenStorage.getUsername();
  User: any = [];
  user: any = [];

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
  }

  ngOnInit() {
    if(this.username){
      this.getUser(this.username);
    }
    else {
      console.log('Failed');
    }
  }

getUser(username) {
  this.dataService.getUserByUsername(username)
  .subscribe( user => {
    console.log(user);
    this.user = this.User;
  }, err => console.log(err));
}

backToViewUsers(){
    this.router.navigate(['dashboard']);
}
edit(id){
    let userID = id.toString();
    localStorage.setItem('editUserId', userID);
    this.router.navigate(['edit-user']);
}

}
