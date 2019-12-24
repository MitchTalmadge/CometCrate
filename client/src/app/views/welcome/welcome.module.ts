import { NgModule } from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [],
  declarations: [ WelcomeComponent ],
  providers: [],
})
export class WelcomeModule {
}
