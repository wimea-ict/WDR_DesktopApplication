import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data/data.service';
import { scannedDekandal } from '../../../models/observationslip/observationslip';
import {TokenStorageService} from '../../../services/allServices';
import { HttpClient } from '@angular/common/http';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

const UploadURL = 'http://localhost:5000/api/upload';

@Component({
  selector: 'app-dekandal',
  templateUrl: './dekandal.component.html',
})
export class DekandalComponent implements OnInit {

  public username = this.tokenStorage.getUsername();
  public uploader: FileUploader = new FileUploader({url: UploadURL, itemAlias: 'photo'});

  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private dataService: DataService,
    private http: HttpClient
  ) {
  }
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      alert('File uploaded successfully.Please continue by clicking SUBMIT button below.');
     };
  }

  scannedDekandal = new scannedDekandal('','','','','', this.username,'',0);

  addscannedDekandal(){
    this.dataService.addscannDekandal(this.scannedDekandal)
    .subscribe( res => {
      if (res.errno) {
        console.log('Sorry data has not been stored on local database, try resending it');
        console.log(res.sqlMessage)
      } else {
        console.log(res); 
        console.log('data inserted successfully');
       
      }
      this.router.navigate(['/archive-scanned-forms/dekandal-form']);
    },  err => console.log(err));
}
  back(){
    this.router.navigate(['/archive-scanned-forms/dekandal-form']);
  }
}
