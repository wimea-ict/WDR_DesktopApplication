import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
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


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'view-user',
        component:ViewComponent,
        data: {
          title: 'View User'
        }
      },
      {
        path: 'observationslip',
        loadChildren: () => import('./views/observationslip/observationslip.module').then(m => m.ObservationslipModule)
      },
      {
        path: 'import-data',
        loadChildren: () => import('./views/import-data/import-data.module').then(m => m.ImportdataModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./views/user-management/user-management.module').then(m => m.UsermanagementModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/observationslipdb.module').then(m => m.ObservationslipdbModule)
      },
      {
        path: 'archive-scanned-forms',
        loadChildren: () => import('./views/archive-scanned-forms/archivescannedforms.module').then(m => m.ArchivescannedformsModule)
        
      },
      {
        path: 'archive-forms',
        loadChildren: () => import('./views/archive-forms/archiveform.module').then(m => m.ArchiveformsModule)
        
      },
      {
        path: 'edit-user',
        component:EditComponent,
        data: {
          title: 'Edit User'
        }
      },
      {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'Register Page'
      }
    },
    {
      path: 'profile',
      component: ProfileComponent,
      data: {
        title: 'Profile'
      }
    },
    {
      path: 'observationslipreport',
      component: ObservationslipReportComponent,
      data: {
        title: 'Observationslip Report'
      }
    },
    {
      path: 'metarreport',
      component: MetarReportComponent,
      data: {
        title: 'Metar Report'
      }
    },
    {
      path: 'wsr',
      component: WeatherSummaryReportComponent,
      data: {
        title: 'Weather Summary Report'
      }
    },
    {
      path: 'specireport',
      component: SpeciReportComponent,
      data: {
        title: 'Speci Report'
      }
    },
    {
      path: 'synopticreport',
      component: SynopticreportComponent,
      data: {
        title: 'Synoptic Report'
      }
    },
    {
      path: 'monthlyrainfallreport',
      component: MonthlyRainfallReportComponent,
      data: {
        title: 'Monthly Rainfall Report'
      }
    },
    {
      path: 'annualrainfallreport',
      component: AnnualRainfallReportComponent,
      data: {
        title: 'Yearly Rainfall Report'
      }
    },
    {
      path: 'customizedrainfallreport',
      component: CustomizedRainfallReportComponent,
      data: {
        title: 'Customized Rainfall Report'
      }
    },
    {
      path: 'newstation',
      component: StationComponent,
      data: {
        title: 'Add New Station'
      }
    },
    {
      path: 'elements',
      component: ElementComponent,
      data: {
        title: 'Add element'
      }
    },
    {
      path: 'view-elements',
      component: ViewElementComponent,
      data: {
        title: 'View Element(s)'
      }
    },
    {
      path: 'edit-element',
      component: EditElementComponent,
      data: {
        title: 'Edit element'
      }
    },
    {
      path: 'instruments',
      component: InstrumentComponent,
      data: {
        title: 'Add instrument'
      }
    },
    {
      path: 'view-instruments',
      component: ViewInstrumentComponent,
      data: {
        title: 'Instruments'
      }
    },
    {
      path: 'stations',
      component: ViewstationComponent,
      data: {
        title: 'View station(s)'
      }
    },
    {
      path: 'edit-station',
      component: EditStationComponent,
      data: {
        title: 'Edit station'
      }
    }
    ]
  },
  { 
    path: '**', 
    component: P404Component 
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
