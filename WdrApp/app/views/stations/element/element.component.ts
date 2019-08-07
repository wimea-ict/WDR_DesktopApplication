import { Component, OnInit, HostBinding} from '@angular/core';
import {  Router } from '@angular/router';
import { DataService } from '../../../services/allServices';
import { Element } from '../../../models/station/station';
import { TokenStorageService } from '../../../services/allServices';



@Component({
  selector: 'app-element',
  templateUrl: 'element.component.html'
})
export class ElementComponent implements OnInit {

  public username =  this.tokenStorage.getUsername();

  element = new Element('','','',0,'','','','','','',this.username);
constructor(
  private tokenStorage: TokenStorageService,
  private dataService: DataService,
  private router: Router
) {}

ngOnInit(){}

save(){
  this.dataService.addElement(this.element)
  .subscribe( res => {
    if (res.errno) {
      console.log(res.sqlMessage);
    } else {
      console.log('Inserted');
    }

    this.router.navigate(['view-elements']);
  },  
  err => console.log(err));

}


back(){
  this.router.navigate(['view-elements']);
}


}

