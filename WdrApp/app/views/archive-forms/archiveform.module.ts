import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder } from '@angular/forms';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ArchiveformsRoutingModule } from './archiveform-routing.module';
import { ArchiveformComponent } from './archiveform/archiveform.component';
import { DekandalformComponent } from './dekandalform/dekandalform.component';
import { MetarformComponent } from './metarform/metarform.component';
import { ObservationslipformComponent } from './observationslipform/observationslipform.component';
import { SynopticformComponent } from './synopticform/synopticform.component';
import { WeathersummaryformComponent } from './weathersummaryform/weathersummaryform.component';
import { MatCardModule } from '@angular/material';
import { ArchiveComponent } from './archive/archive.component';
import { DekandalComponent } from './dekandal/dekandal.component';
import { MetarComponent } from './metar/metar.component';
import { ObservationComponent } from './observation/observation.component';
import { SynopticComponent } from './synoptic/synoptic.component';
import { WeatherComponent } from './weather/weather.component';
import { DataService } from '../../services/allServices';
import { EditarchiveComponent } from './editarchive/editarchive.component';
import { EditdekandalformComponent } from './editdekandalform/editdekandalform.component';
import { EditmetarformComponent } from './editmetarform/editmetarform.component';
import { EditobservationComponent } from './editobservation/editobservation.component';
import { EditweatherComponent } from './editweather/editweather.component';
import { EditsynopticformComponent } from './editsynopticform/editsynopticform.component';


// Angular

@NgModule({
  imports: [
    CommonModule,
    BsDropdownModule.forRoot() ,
    FormsModule,
    ArchiveformsRoutingModule,
    MatCardModule,
    NgxPaginationModule

  ],
  declarations: [
  ArchiveformComponent,
  DekandalformComponent,
  MetarformComponent,
  ObservationslipformComponent,
  SynopticformComponent,
  WeathersummaryformComponent,
  ArchiveformComponent,
  ArchiveComponent,
  DekandalComponent,
  MetarComponent,
  ObservationComponent,
  SynopticComponent,
  WeatherComponent,
  EditarchiveComponent,
  EditdekandalformComponent,
  EditmetarformComponent,
  EditobservationComponent,
  EditweatherComponent,
  EditsynopticformComponent
],
  providers: [
    DataService,
    FormBuilder
  ],
})
export class ArchiveformsModule { }