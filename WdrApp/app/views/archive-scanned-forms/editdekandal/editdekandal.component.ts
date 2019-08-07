import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editdekandal',
  templateUrl: './editdekandal.component.html',
  styleUrls: ['./editdekandal.component.scss']
})
export class EditdekandalComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/archive-scanned-forms/dekandal']);
  }
}
