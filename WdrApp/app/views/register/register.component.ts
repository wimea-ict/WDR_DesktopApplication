import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/allServices';
import { SignUpInfo } from '../../models/user/signup-info';
import {Router} from '@angular/router';
import { TokenStorageService } from '../../services/allServices';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})


export class RegisterComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  issignUpFailed =  false;
  errorMessage = '';

  public roles: string[];
  public authority: string;

  constructor( 
    private tokenStorage: TokenStorageService,
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    if ( this.tokenStorage.getToken()) {
      this.roles =  this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if ( role === 'ROLE_MANAGER DATA') {
          this.authority = 'Manager Data';
          return false;
        } else if ( role === 'ROLE_OC') {
          this.authority = 'OC';
          return false;
        } else
        this.authority = 'Observer';
        return true;
      })
    }
  }

  onSubmit() {

    this.signupInfo = new SignUpInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.roles
    );
  
    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.issignUpFailed = false;
        this.router.navigate(['user-management']);
      },
      error => {
        console.log(error);
        this.errorMessage =  error.error;
        this.isSignedUp = true;
      }
    )
  }

}

