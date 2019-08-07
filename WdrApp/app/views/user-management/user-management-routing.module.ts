import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsermanagementComponent } from '../user-management/user-management.component';

const routes: Routes = [
  {
    path: '',
    component: UsermanagementComponent,
    data: {
      title: 'User Management'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermanagementRoutingModule {}
