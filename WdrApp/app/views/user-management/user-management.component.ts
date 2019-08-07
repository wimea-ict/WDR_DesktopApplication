import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { SignUpInfo } from '../../models/user/signup-info';
import { TokenStorageService } from '../../services/allServices';

export interface Users {
   id: number;
   name: string;
   username: string;
   email: string;
   role: string;
   addedOn: string;
}

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UsermanagementComponent implements OnInit {

wdrUsers: any;
dataSource: Users[] = this.wdrUsers;

private roles: string[];
private authority: string;

  constructor(
    private router: Router,
    private userService: AuthService,
    private tokenStorage: TokenStorageService
  ) {  }

  ngOnInit() {
    this.getUsers();
    if ( this.tokenStorage.getToken()) {
      this.roles =  this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if ( role === 'ROLE_MANAGER DATA') {
          this.authority = 'ManagerData';
          return false;
        } else if ( role === 'ROLE_OC') {
          this.authority = 'OC';
          return false;
        }
      })
    }
  }

  getUsers() {
    this.userService.getAllUsers()
    .subscribe( data => {
      this.wdrUsers = data;
    },
    err=> console.log(err));
  }

  deleteUser(id){
    this.userService.deleteUser(id)
    .subscribe(() =>{
      this.getUsers();
    });
  }

  editUser(user: SignUpInfo ) : void {
    localStorage.removeItem('edituserId');
    let userID = user.id.toString();
    localStorage.setItem('editUserId', userID);
    this.router.navigate(['edit-user']);
  }
  view(user: SignUpInfo) : void {
    localStorage.removeItem('viewUserId');
    let userID = user.id.toString();
    localStorage.setItem('viewUserId', userID);
    this.router.navigate(['view-user']);
  }
  addUser() {
    this.router.navigate(['register']);
  }

}
