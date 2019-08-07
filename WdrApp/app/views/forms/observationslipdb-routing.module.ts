import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AWSdataComponent } from './aws-data.component';
import { MSdataComponent } from './ms-data.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'aws',
        component: AWSdataComponent,
        data: {
          title: 'Observation/Raw data'
        }
      },
      {
        path: 'ms-data',
        component: MSdataComponent,
        data: {
          title: 'Observation/Raw data'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationslipdbRoutingModule {}
