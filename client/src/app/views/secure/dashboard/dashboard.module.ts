import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "@/app/views/secure/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [],
  declarations: [
    DashboardComponent
  ],
})
export class DashboardModule {
}
