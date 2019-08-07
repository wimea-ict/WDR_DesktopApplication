import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/allServices';


@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html'
})
export class EditElementComponent implements OnInit {

 element : any = {};

  constructor(
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {

    const ElementId = JSON.parse(localStorage.getItem('elementId'));
    if(!ElementId){
      alert('Invalid action.');
      this.router.navigate(['view-elements']);
      return;
    } else {
      this.getElement(ElementId);
    }

  }

  getElement(ElementId){
      this.dataService.getElementById(ElementId)
      .subscribe( Id => {
        console.log(Id);
        var elementID = Id;
        this.element = elementID[0];
        console.log(this.element);
      }, err => console.log(err));

    }

    updateElement(){
    this.dataService.updateElement(this.element)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['view-elements']);
    },
    errno => console.log(errno));
    }

    back() {
      this.router.navigate(['view-elements']);
    }
}
