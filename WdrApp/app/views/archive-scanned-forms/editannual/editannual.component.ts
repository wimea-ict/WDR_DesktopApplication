import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editannual',
  templateUrl: './editannual.component.html',
  styleUrls: ['./editannual.component.scss']
})
export class EditannualComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/archive-scanned-forms/annual-rainfall-form']);
  }
}
