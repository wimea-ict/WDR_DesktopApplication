import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-observationslipform',
  templateUrl: './observationslipform.component.html',
  styleUrls: ['./observationslipform.component.scss']
})
export class ObservationslipformComponent implements OnInit {
  
  archiveobserve: any = [];
  title = 'Archive observation slip form';
  p: Number = 1;
  count: Number = 5;
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.dataService.getAllarchiveobserveforms()
    .subscribe( data => {
      this.archiveobserve = data.json();
      console.log(this.archiveobserve);
    });
  }
observation(){
  this.router.navigate(['/archive-forms/observation']);
}
}
