import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data/data.service';
import { Observationslip } from '../../../models/observationslip/observationslip';

@Component({
  selector: 'app-metar-report',
  templateUrl: './metar-report.component.html',
  styleUrls: ['./metar-report.component.scss']
})
export class MetarReportComponent implements OnInit {
  observationslips: any = [];
  observationslip: any = [];
  userInfo;
  show;

  public user;

  constructor(private dataService: DataService) { }

  ngOnInit() {

    this.dataService.getReportObservationslips()
    .subscribe( data => {
      this.observationslips = data;
      this.show =0;
      this.observationslip = this.observationslips[this.show];
      console.log(this.observationslip);
});
  }

  showNext(){
    ++this.show;
    this.dataService.getReportObservationslips()
    .subscribe( data => {
      this.observationslips = data;
      this.observationslip = this.observationslips[this.show];
});
  }

}
