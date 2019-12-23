import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: "./views/welcome/welcome.module#WelcomeModule",
  },
  {
    path: "**",
    redirectTo: "/",
    pathMatch: "full",
  },
];

/**
 * The root routing module. Other routes can be found next to their respective views.
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [],
  declarations: [],
})
export class AppRoutingModule {
}
