import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmetar',
  templateUrl: './editmetar.component.html',
  styleUrls: ['./editmetar.component.scss']
})
export class EditmetarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/archive-scanned-forms/metar-form']);
  }
}
