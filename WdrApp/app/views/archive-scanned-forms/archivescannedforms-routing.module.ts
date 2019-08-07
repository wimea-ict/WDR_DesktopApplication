import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservationslipFormComponent } from './observationslip-form/observationslip-form.component';
import { MetarFormComponent } from './metar-form/metar-form.component';
import { WeatherSummmaryFormComponent } from './weather-summmary-form/weather-summmary-form.component';
import { SynopticFormComponent } from './synoptic-form/synoptic-form.component';
import { DekandalFormComponent } from './dekandal-form/dekandal-form.component';
import { MonthlyRainfallFormComponent } from './monthly-rainfall-form/monthly-rainfall-form.component';
import { AnnualRainfallFormComponent } from './annual-rainfall-form/annual-rainfall-form.component';
import { AnnualrainfallComponent } from './annualrainfall/annualrainfall.component';
import { DekandalComponent } from './dekandal/dekandal.component';
import { MetarComponent } from './metar/metar.component';
import { MonthlyrainfallComponent } from './monthlyrainfall/monthlyrainfall.component';
import { ObservationformComponent } from './observationform/observationform.component';
import { SynopticComponent } from './synoptic/synoptic.component';
import { WeathersummaryComponent } from './weathersummary/weathersummary.component';
import { EditannualComponent } from './editannual/editannual.component';
import { EditdekandalComponent } from './editdekandal/editdekandal.component';
import { EditmetarComponent } from './editmetar/editmetar.component';
import { EditmonthlyComponent } from './editmonthly/editmonthly.component';
import { EditobservationslipComponent } from './editobservationslip/editobservationslip.component';
import { EditsynopticComponent } from './editsynoptic/editsynoptic.component';
import { EditweathersummaryComponent } from './editweathersummary/editweathersummary.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Archive Scanned Forms'
    },
    children: [
      {
        path: '',
        redirectTo: 'archive-scanned-forms'
      },
      {
        path: 'observationslip-form',
        component: ObservationslipFormComponent,
        data: {
          title: 'Observation Slip Form'
        }
      },
      {
        path: 'metar-form',
        component: MetarFormComponent,
        data: {
          title: 'Metar Form'
        }
      },
     
      {
        path: 'weather-summmary-form',
        component: WeatherSummmaryFormComponent,
        data: {
          title: 'Weather Summary Form'
        }
      },
      {
        path: 'synoptic-form',
        component: SynopticFormComponent,
        data: {
          title: 'Synoptic Form'
        }
      },
      {
        path: 'dekandal-form',
        component: DekandalFormComponent,
        data: {
          title: 'Dekandal Form'
        }
      },
      {
        path: 'monthly-rainfall-form',
        component: MonthlyRainfallFormComponent,
        data: {
          title: 'Monthly Rainfall Form'
        }
      },
      {
        path: 'annual-rainfall-form',
        component: AnnualRainfallFormComponent,
        data: {
          title: 'Annual Rainfall Form'
        }
      },
        {
            path: 'annualrainfall',
            component: AnnualrainfallComponent,
            data: {
              title: 'Annual Rainfall'
            }
        },
        {
          path: 'dekandal',
          component: DekandalComponent,
          data: {
            title: 'Dekandal form'
          }
      },
      {
        path: 'metar',
        component: MetarComponent,
        data: {
          title: 'Metar'
        }
    },
    {
      path: 'monthlyrainfall',
      component: MonthlyrainfallComponent,
      data: {
        title: 'Monthly Rainfall'
      }
  },
  {
    path: 'observationform',
    component: ObservationformComponent,
    data: {
      title: 'Observation form'
    }
},
{
  path: 'synoptic',
  component: SynopticComponent,
  data: {
    title: 'Synoptic form'
  }
},
{
  path: 'weathersummary',
  component: WeathersummaryComponent,
  data: {
    title: 'Weather summary'
  }
},
{
  path: 'editannual',
  component: EditannualComponent,
  data: {
    title: 'Edit annual form'
  }
},
{
  path: 'editdekandal',
  component: EditdekandalComponent,
  data: {
    title: 'Edit dekandal form'
  }
},
{
  path: 'editmetar',
  component: EditmetarComponent,
  data: {
    title: 'Edit metar form'
  }
},
{
  path: 'editmonthly',
  component: EditmonthlyComponent,
  data: {
    title: 'Edit monthly rainfall form'
  }
},
{
  path: 'editobservationslip',
  component: EditobservationslipComponent,
  data: {
    title: 'Edit observationslip form'
  }
},
{
  path: 'editsynoptic',
  component: EditsynopticComponent,
  data: {
    title: 'Edit synoptic form'
  }
},
{
  path: 'editweathersummary',
  component: EditweathersummaryComponent,
  data: {
    title: 'Edit weather summary form'
  }
}
   
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchivescannedformsRoutingModule {}
