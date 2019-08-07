import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule
} from '@angular/material';

import { AWSdataComponent } from './aws-data.component';
import { MSdataComponent } from './ms-data.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Buttons Routing
import { ObservationslipdbRoutingModule } from './observationslipdb-routing.module';

import { DataService } from '../../services/allServices';
import {FormBuilder} from '@angular/forms';


// Angular

@NgModule({
  imports: [
    CommonModule,
    ObservationslipdbRoutingModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule
  ],
  declarations: [
    AWSdataComponent,
    MSdataComponent
  ],
  providers: [
    FormBuilder,
    DataService
  ],
})
export class ObservationslipdbModule { }
