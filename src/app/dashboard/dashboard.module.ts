import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';

const COMPONENTS = [
  DashboardComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
