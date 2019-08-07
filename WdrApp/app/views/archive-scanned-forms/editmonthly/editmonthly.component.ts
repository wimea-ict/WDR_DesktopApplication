import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmonthly',
  templateUrl: './editmonthly.component.html',
  styleUrls: ['./editmonthly.component.scss']
})
export class EditmonthlyComponent implements OnInit {
  archivescanned: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/archive-scanned-forms/monthly-rainfall-form']);
  }
}
