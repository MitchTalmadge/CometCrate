import { NgModule } from '@angular/core';

import { SignInComponent } from './sign-in.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@/app/shared/shared.module";

const routes: Routes = [
  {
    path: "",
    component: SignInComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [],
  declarations: [ SignInComponent ],
  providers: [],
})
export class SignInModule {
}
