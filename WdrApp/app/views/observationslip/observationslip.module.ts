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
import { ObservationslipComponent } from './observationslip.component';
import { ViewobservationslipComponent } from './view-observationslip.component';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditobservationslipComponent } from './edit-observationslip.component';

// Buttons Routing
import { ObservationslipRoutingModule } from './observationslip-routing.module';

import { DataService } from '../../services/allServices';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


// Angular

@NgModule({
  imports: [
    CommonModule,
    ObservationslipRoutingModule,
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
    ObservationslipComponent,
    EditobservationslipComponent,
    ViewobservationslipComponent
  ],
  providers: [
    FormBuilder,
    DataService
  ],
})
export class ObservationslipModule { }
