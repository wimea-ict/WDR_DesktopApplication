import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-editweather',
  templateUrl: './editweather.component.html',
  styleUrls: ['./editweather.component.scss']
})
export class EditweatherComponent implements OnInit {

  weathersummary:any = {};

  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    const editweatherid = JSON.parse(localStorage.getItem('editweather'));
    if(!editweatherid){
      alert('error');
    } else {
    this.getweatheridreport(editweatherid);
    }

  }

  getweatheridreport(id){
    this.dataService.getweathersummaryreport(id).subscribe(editweather =>{
      this.weathersummary = editweather[0];
    });
  }

  updateweathersummaryform(){
    this.dataService.updateWeathersummaryform(this.weathersummary)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['/archive-forms/weathersummaryform']);
    }, err => console.log(err));
  
    }

    back(){
      this.router.navigate(['/archive-forms/weathersummaryform']);
    }

}
