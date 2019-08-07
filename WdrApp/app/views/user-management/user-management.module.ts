import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsermanagementComponent } from '../user-management/user-management.component';

import { UsermanagementRoutingModule } from './user-management-routing.module';

@NgModule({
  imports: [ UsermanagementRoutingModule, CommonModule, FormsModule],
  declarations: [
    UsermanagementComponent
  ]
})
export class UsermanagementModule { }
