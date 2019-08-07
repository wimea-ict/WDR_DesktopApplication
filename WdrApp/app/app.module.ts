import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import {FormsModule} from '@angular/forms'
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import {NgxPrintModule} from 'ngx-print';
import { ExportAsModule } from 'ngx-export-as';
import {
  MatButtonModule,
  MatMenuModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatInputModule,
  MatTooltipModule,
  MatToolbarModule,

} from '@angular/material';
import { AppComponent } from './app.component';
// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { ProfileComponent } from './views/profile/profile.component';
import { EditComponent } from './views/edit-user/edit.component';
import { ViewComponent } from './views/view-user/view.component';
import { ObservationslipReportComponent } from './views/ReportGeneration/observationslip-report/observationslip-report.component';
import { MetarReportComponent } from './views/ReportGeneration/metar-report/metar-report.component';
import { SpeciReportComponent } from './views/ReportGeneration/speci-report/speci-report.component';
import { WeatherSummaryReportComponent } from './views/ReportGeneration/weathersummaryreport/weathersummaryreport.component';
import { SynopticreportComponent } from './views/ReportGeneration/synopticreport/synopticreport.component';
import { MonthlyRainfallReportComponent } from './views/ReportGeneration/monthlyrainfallreport/monthlyrainfallreport.component';
import { AnnualRainfallReportComponent } from './views/ReportGeneration/annualrainfallreport/annualrainfallreport.component';
import { CustomizedRainfallReportComponent } from './views/ReportGeneration/customizedrainfallreport/customizedrainfallreport.component';
import { StationComponent } from './views/stations/station/station.component';
import { ElementComponent } from './views/stations/element/element.component';
import { InstrumentComponent } from './views/stations/instrument/instrument.component';
import { ViewstationComponent } from './views/stations/station/view-station.component';
import { EditStationComponent } from './views/stations/station/edit-station.component';
import { ViewInstrumentComponent } from './views/stations/instrument/view-instrument.component';
import { ViewElementComponent } from './views/stations/element/view-element.component';
import { EditElementComponent } from './views/stations/element/edit-element.component';

//Import services
import { DataService, UserService } from '../app/services/allServices';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';
import {FileUploadModule} from 'ng2-file-upload';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,MatButtonModule,
    MatMenuModule,MatIconModule,
    MatCardModule,MatSidenavModule,
    MatFormFieldModule,MatInputModule,
    MatTooltipModule,MatToolbarModule,
    NgxPrintModule,
    ExportAsModule,
    FileUploadModule,
    NgxPaginationModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    EditComponent,
    ViewComponent,
    ObservationslipReportComponent,
    MetarReportComponent,
    SpeciReportComponent,
    WeatherSummaryReportComponent,
    SynopticreportComponent,
    MonthlyRainfallReportComponent,
    AnnualRainfallReportComponent,
    CustomizedRainfallReportComponent,
    StationComponent,
    ElementComponent,
    InstrumentComponent,
    ViewstationComponent,
    EditStationComponent,
    ViewInstrumentComponent,
    ViewElementComponent,
    EditElementComponent
  ],
  providers: [DataService, UserService, FormBuilder],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
