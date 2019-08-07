import { Component, OnInit } from '@angular/core';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { DataService } from '../../../services/data/data.service';
import { Observationslip } from '../../../models/observationslip/observationslip';

@Component({
  selector: 'app-monthlyrainfallreport',
  templateUrl: './monthlyrainfallreport.component.html',
  styleUrls: ['./monthlyrainfallreport.component.scss']
})
export class MonthlyRainfallReportComponent implements OnInit {

  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', // the type you want to download
    elementId: 'wsr', // the id of html/table element
  }
  exportAscsv: ExportAsConfig = {
    type: 'csv', // the type you want to download
    elementId: 'wsr', // the id of html/table element
  }
  exportAspdf: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'contentToConvert', // the id of html/table element
  }

  public user;

  constructor(private dataService: DataService, private exportAsService: ExportAsService) { }

  ngOnInit() {

//     this.dataService.getReportObservationslips()
//     .subscribe( data => {
//       this.observationslips = data;
//       this.show =0;
//       this.observationslip = this.observationslips[this.show];
//       console.log(this.observationslip);
// });
  }

  export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'Weather Summary Report').subscribe(() => {
      // save started
    });
  }
  exportcsv() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAscsv, 'Weather Summary Report').subscribe(() => {
      // save started
    });
  }
  exportpdf() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAspdf, 'Weather Summary Report').subscribe(() => {
      // save started
    });
  }

}
