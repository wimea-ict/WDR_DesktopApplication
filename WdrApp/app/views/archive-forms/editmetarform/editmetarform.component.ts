import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-editmetarform',
  templateUrl: './editmetarform.component.html',
  styleUrls: ['./editmetarform.component.scss']
})
export class EditmetarformComponent implements OnInit {

  metar:any = {};

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    const editmetarid = JSON.parse(localStorage.getItem('editmetar'));
    if(!editmetarid){
      alert('error');
    } else {
    this.getmetarreport(editmetarid);
    }

  }

  getmetarreport(id){
    this.dataService.getmetarreport(id).subscribe(editmetar =>{
      this.metar = editmetar[0];
    });
  }

  updatemetarform(){
    this.dataService.updateMetarForm(this.metar)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['/archive-forms/metarform']);
    }, err => console.log(err));
  
    }

    back(){
      this.router.navigate(['/archive-forms/metarform']);
    }

}
