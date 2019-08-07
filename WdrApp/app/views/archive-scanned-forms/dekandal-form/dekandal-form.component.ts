import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-dekandal-form',
  templateUrl: './dekandal-form.component.html',
})
export class DekandalFormComponent implements OnInit {
  

  scanneddekandal: any = [];
  p: Number = 1;
  count: Number = 5;

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
      this.dataService.getAllscannedDekandal()
      .subscribe( data => {
        this.scanneddekandal = data.json();
      });

  }
  dekandal(){
    this.router.navigate(['/archive-scanned-forms/dekandal']);
  }
}
