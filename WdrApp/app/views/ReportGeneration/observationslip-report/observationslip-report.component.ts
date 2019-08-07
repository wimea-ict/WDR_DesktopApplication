import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { Observationslip } from '../../../models/observationslip/observationslip';

@Component({
  selector: 'app-observationslip-report',
  templateUrl: './observationslip-report.component.html',
  styleUrls: ['./observationslip-report.component.scss']
})
export class ObservationslipReportComponent implements OnInit {
  observationslips: any = [];
  observationslip: any = [];
  userInfo;
  show;

  public user;
  exportAspdf: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementId: 'contentToConvert', // the id of html/table element
  }

  constructor(private dataService: DataService, private exportAsService: ExportAsService) { }

  ngOnInit() {

    this.dataService.getReportObservationslips()
    .subscribe( data => {
      this.observationslips = data;
      this.show =0;
      this.observationslip = this.observationslips[this.show];
      console.log(this.observationslip);
});
  }

  exportpdf() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAspdf, 'Observationslip Report').subscribe(() => {
      // save started
    });
  }

}
