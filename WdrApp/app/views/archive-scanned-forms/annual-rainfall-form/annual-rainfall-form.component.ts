import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';


@Component({
  selector: 'app-annual-rainfall-form',
  templateUrl: './annual-rainfall-form.component.html',
})
export class AnnualRainfallFormComponent implements OnInit {
  
  scannedAnnualrainfall: any = [];
  p: Number = 1;
  count: Number = 5;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
      this.dataService.getAllscannedAnnualRainfall()
      .subscribe( data => {
        this.scannedAnnualrainfall = data.json();
        console.log(this.scannedAnnualrainfall);
      });

  }
  annualrainfall(){
    this.router.navigate(['/archive-scanned-forms/annualrainfall']);
  }
}
