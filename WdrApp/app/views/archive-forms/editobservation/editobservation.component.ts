import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editobservation',
  templateUrl: './editobservation.component.html',
  styleUrls: ['./editobservation.component.scss']
})
export class EditobservationComponent implements OnInit {
  observe: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/archive-forms/observationslipform']);
  }
}
