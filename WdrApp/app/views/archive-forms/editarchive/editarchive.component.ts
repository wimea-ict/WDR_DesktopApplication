import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';

@Component({
  selector: 'app-editarchive',
  templateUrl: './editarchive.component.html',
  styleUrls: ['./editarchive.component.scss']
})
export class EditarchiveComponent implements OnInit {

  editarchive:any = {};
  archivestation:any = {};
  station: string;
  constructor(
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {

    const editarchiveid = JSON.parse(localStorage.getItem('editarch'));
    if(!editarchiveid){
      alert('error');
    } else {
    this.getarchivereport(editarchiveid);
    }
  }
  getarchivereport(editid){
  this.dataService.getArchiveformbyid(editid).subscribe(editarchive =>{
  this.editarchive = editarchive[0];
  this.station = this.editarchive.station;
  console.log(this.station);
  this.dataService.getArchiveStationByName(this.station).subscribe(archivestation =>{
  this.archivestation = archivestation[0];
  console.log(this.archivestation.StationNumber);
});
  
});
  }

  updatearchiveform(){
    this.dataService.updateArchiverainfall(this.editarchive)
    .subscribe( res =>{
      console.log(res);
      this.router.navigate(['/archive-forms/archiveform']);
    }, err => console.log(err));
  
    }
  back(){
    this.router.navigate(['/archive-forms/archiveform']);
  }
}
