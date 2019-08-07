import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ObservationslipFormComponent } from './observationslip-form/observationslip-form.component';
import { MetarFormComponent } from './metar-form/metar-form.component';
import { WeatherSummmaryFormComponent } from './weather-summmary-form/weather-summmary-form.component';
import { SynopticFormComponent } from './synoptic-form/synoptic-form.component';
import { DekandalFormComponent } from './dekandal-form/dekandal-form.component';
import { MonthlyRainfallFormComponent } from './monthly-rainfall-form/monthly-rainfall-form.component';
import { AnnualRainfallFormComponent } from './annual-rainfall-form/annual-rainfall-form.component';
import {FileUploadModule} from 'ng2-file-upload';
import {NgxPaginationModule} from 'ngx-pagination';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ArchivescannedformsRoutingModule } from './archivescannedforms-routing.module';
import { AnnualrainfallComponent } from './annualrainfall/annualrainfall.component';
import { DekandalComponent } from './dekandal/dekandal.component';
import { MetarComponent } from './metar/metar.component';
import { SynopticComponent } from './synoptic/synoptic.component';
import { WeathersummaryComponent } from './weathersummary/weathersummary.component';
import { ObservationformComponent } from './observationform/observationform.component';
import { MonthlyrainfallComponent } from './monthlyrainfall/monthlyrainfall.component';
import { MatCardModule } from '@angular/material';
import {NgxPrintModule} from 'ngx-print';
import { DataService } from '../../services/allServices';
import { EditannualComponent } from './editannual/editannual.component';
import { EditdekandalComponent } from './editdekandal/editdekandal.component';
import { EditmetarComponent } from './editmetar/editmetar.component';
import { EditmonthlyComponent } from './editmonthly/editmonthly.component';
import { EditobservationslipComponent } from './editobservationslip/editobservationslip.component';
import { EditsynopticComponent } from './editsynoptic/editsynoptic.component';
import { EditweathersummaryComponent } from './editweathersummary/editweathersummary.component';
// Angular

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot() ,
    FormsModule,
    ArchivescannedformsRoutingModule,
    MatCardModule,
    NgxPrintModule,
    FileUploadModule,
    NgxPaginationModule
  ],
  declarations: [
  ObservationslipFormComponent,
  MetarFormComponent,
  WeatherSummmaryFormComponent,
  SynopticFormComponent,
  DekandalFormComponent,
  MonthlyRainfallFormComponent,
  AnnualRainfallFormComponent,
  AnnualrainfallComponent,
  DekandalComponent,
  MetarComponent,
  SynopticComponent,
  WeathersummaryComponent,
  ObservationformComponent,
  MonthlyrainfallComponent,
  EditannualComponent,
  EditdekandalComponent,
  EditmetarComponent,
  EditmonthlyComponent,
  EditobservationslipComponent,
  EditsynopticComponent,
  EditweathersummaryComponent
],
  providers: [
DataService
  ],
})
export class ArchivescannedformsModule { }
