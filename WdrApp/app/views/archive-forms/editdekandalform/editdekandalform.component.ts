import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-editdekandalform',
  templateUrl: './editdekandalform.component.html',
  styleUrls: ['./editdekandalform.component.scss']
})
export class EditdekandalformComponent implements OnInit {

  dekandal:any = {};

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    const editdekandalid = JSON.parse(localStorage.getItem('editdek'));
    if(!editdekandalid){
      alert('error');
    } else {
    this.getdekandalreport(editdekandalid);
    }
  }

  getdekandalreport(id){
    this.dataService.getdekandalreport(id).subscribe(editdekandal =>{
      this.dekandal = editdekandal[0];
    });
  }

  updatedekandalform(){
    this.dataService.updateDekandalForm(this.dekandal)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['/archive-forms/dekandalform']);
    }, err => console.log(err));
  
    }

    back(){
      this.router.navigate(['/archive-forms/dekandalform']);
    }

}
