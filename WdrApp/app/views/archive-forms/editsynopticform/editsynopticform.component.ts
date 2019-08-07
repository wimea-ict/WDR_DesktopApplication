import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-editsynopticform',
  templateUrl: './editsynopticform.component.html',
  styleUrls: ['./editsynopticform.component.scss']
})
export class EditsynopticformComponent implements OnInit {

  synoptic:any = {};

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    const editsynopticid = JSON.parse(localStorage.getItem('editsynoptic'));
    if(!editsynopticid){
      alert('error');
    } else {
    this.getsynopticreport(editsynopticid);
    }

  }

  getsynopticreport(id){
    this.dataService.getsynopticreport(id).subscribe(editsynoptic =>{
      this.synoptic = editsynoptic[0];
    });
  }

  updatesynopticform(){
    this.dataService.updateSynopticform(this.synoptic)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['/archive-forms/synopticform']);
    }, err => console.log(err));
  
    }

    back(){
      this.router.navigate(['/archive-forms/synopticform']);
    }


}
