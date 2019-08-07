import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './view-element.component.html'
})
export class ViewElementComponent implements OnInit {
  elements: any = [];

  constructor(
     private router: Router,
     private dataService: DataService,
   ) { }

  ngOnInit() {
        this.dataService.getAllElements()
    .subscribe( data => {
      this.elements = data.json();
      console.log(this.elements);
    });

  }

  addElement(){
    this.router.navigate(['elements'])
  }

  editElement(id){
    let ElementId = id.toString();
    localStorage.setItem('elementId', ElementId);
    this.router.navigate(['edit-element']);
  }

  deleteElement(id){
    console.log(id);
    this.dataService.deleteElement(id)
    .subscribe(() =>{
      this.router.navigate(['dashboard']);
    });
  }

}
