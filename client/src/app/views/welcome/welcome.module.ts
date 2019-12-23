import { NgModule } from '@angular/core';

import { WelcomeComponent } from './welcome.component';
import { RouterModule, Routes } from "@angular/router";
import { ComponentsModule } from "@/app/components/components.module";

const routes: Routes = [
  {
    path: "",
    component: WelcomeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [],
  declarations: [ WelcomeComponent ],
  providers: [],
})
export class WelcomeModule {
}
