import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservationslipComponent } from './observationslip.component';
import { EditobservationslipComponent } from './edit-observationslip.component';
import { ViewobservationslipComponent } from './view-observationslip.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Observationslips'
    },
    children: [
      {
        path: '',
        redirectTo: 'view-observationslip'
      },
      {
        path: 'add-observationslip',
        component: ObservationslipComponent,
        data: {
          title: 'Add Observationslip'
        }
      },
      {
        path: 'edit-observationslip',
        component: EditobservationslipComponent,
        data: {
          title: 'Edit Observationslip'
        }
      },
      {
        path: 'view-observationslip',
        component: ViewobservationslipComponent,
        data: {
          title: 'View Observationslip'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservationslipRoutingModule {}
