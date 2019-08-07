import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObservationformComponent } from '../archive-scanned-forms/observationform/observationform.component';
import { ObservationslipformComponent } from './observationslipform/observationslipform.component';
import { MetarformComponent } from './metarform/metarform.component';
import { WeathersummaryformComponent } from './weathersummaryform/weathersummaryform.component';
import { SynopticformComponent } from './synopticform/synopticform.component';
import { DekandalformComponent } from './dekandalform/dekandalform.component';
import { ArchiveformComponent } from './archiveform/archiveform.component';
import { ArchiveComponent } from './archive/archive.component';
import { DekandalComponent } from './dekandal/dekandal.component';
import { SynopticComponent } from './synoptic/synoptic.component';
import { MetarComponent } from './metar/metar.component';
import { WeatherComponent } from './weather/weather.component';
import { ObservationComponent } from './observation/observation.component';
import { EditarchiveComponent } from './editarchive/editarchive.component';
import { EditdekandalformComponent } from './editdekandalform/editdekandalform.component';
import { EditmetarformComponent } from './editmetarform/editmetarform.component';
import { EditobservationComponent } from './editobservation/editobservation.component';
import { EditsynopticformComponent } from './editsynopticform/editsynopticform.component';
import { EditweatherComponent } from './editweather/editweather.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Archive Forms'
    },
    children: [
      {
        path: '',
        redirectTo: 'archive-forms'
      },
      {
        path: 'observationslipform',
        component: ObservationslipformComponent,
        data: {
          title: 'Observation Slip Form'
        }
      },
      {
        path: 'metarform',
        component: MetarformComponent,
        data: {
          title: 'Metar Form'
        }
      },
     
      {
        path: 'weathersummaryform',
        component: WeathersummaryformComponent,
        data: {
          title: 'Weather Summary Form'
        }
      },
      {
        path: 'synopticform',
        component: SynopticformComponent,
        data: {
          title: 'Synoptic Form'
        }
      },
      {
        path: 'dekandalform',
        component: DekandalformComponent,
        data: {
          title: 'Dekandal Form'

        }
      },
      {
        path: 'archiveform',
        component: ArchiveformComponent,
        data: {
          title: 'Archive Form'
        }
      },
      {
        path: 'archive',
        component: ArchiveComponent,
        data: {
          title: 'Archive'
        }
      },
      {
        path: 'dekandal',
        component: DekandalComponent,
        data: {
          title: 'dekandal'
        }
      },
      {
        path: 'synoptic',
        component: SynopticComponent,
        data: {
          title: 'synoptic'
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
        path: 'weather',
        component: WeatherComponent,
        data: {
          title: 'weather'
        }
      },
      {
        path: 'observation',
        component: ObservationComponent,
        data: {
          title: 'Observation'
        }
      },
      {
      path: 'editarchive',
      component: EditarchiveComponent,
      data: {
        title: 'Edit archive form'
      }
    },
    {
      path: 'editdekandalform',
      component: EditdekandalformComponent,
      data: {
        title: 'Edit dekandalform'
      }
    },
    {
      path: 'editmetarform',
      component: EditmetarformComponent,
      data: {
        title: 'Edit Metar form'
      }
    },
    {
      path: 'editobservation',
      component: EditobservationComponent,
      data: {
        title: 'Edit Observation form'
      }
    },
    {
      path: 'editsynopticform',
      component: EditsynopticformComponent,
      data: {
        title: 'Edit Synoptic form'
      }
    },
    {
      path: 'editweather',
      component: EditweatherComponent,
      data: {
        title: 'Edit WeatherSummary form'
      }
    }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchiveformsRoutingModule {}
