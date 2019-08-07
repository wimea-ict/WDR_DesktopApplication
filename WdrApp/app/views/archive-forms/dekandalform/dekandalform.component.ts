import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { TokenStorageService } from '../../../services/allServices';


@Component({
  selector: 'app-dekandalform',
  templateUrl: './dekandalform.component.html',
  styleUrls: ['./dekandalform.component.scss']
})
export class DekandalformComponent implements OnInit {
 archivedekandal: any = [];
  title = 'Archive dekandal form';
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
    this.dataService.getAlldekandalforms()
    .subscribe( data => {
      this.archivedekandal = data.json();
      console.log(this.archivedekandal);
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
  dekandal(){
    this.router.navigate(['/archive-forms/dekandal']);
  }

  editdekandal(id){
    let editdek = id.toString();
    localStorage.setItem('editdek', editdek);
    this.router.navigate(['/archive-forms/editdekandalform']);
  }
}
