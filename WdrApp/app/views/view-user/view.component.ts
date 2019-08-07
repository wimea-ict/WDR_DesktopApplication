import {Component,  OnInit } from '@angular/core';
import { AuthService } from '../../services/allServices';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  user: any = {}; // any =[]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: AuthService
  ) {
  }

  ngOnInit() {
    const userId = JSON.parse(localStorage.getItem('viewUserId'));
    console.log(userId);
    if(!userId) {
      alert('Invalid action.');
      this.router.navigate(['wdr-users']);
      return;
    } else {
      this.getSingleUser(userId);
    }
}

getSingleUser(userId) {
  this.dataService.getUserDetails(+userId)
  .subscribe( user => {
    console.log(user);
    this.user = user;
  }, err => console.log(err));
}

backToViewUsers(){
    this.router.navigate(['user-management']);
}

}
