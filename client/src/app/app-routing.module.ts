import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UnAuthGuard } from "@/app/guards/unauth.guard";
import { AuthGuard } from "@/app/guards/auth.guard";
import { environment } from "@/environment/environment";

const routes: Routes = [
  {
    path: "sign-in",
    loadChildren: "./views/sign-in/sign-in.module#SignInModule",
    canActivate: [ UnAuthGuard ]
  },
  {
    path: 'secure',
    loadChildren: './views/secure/secure.module#SecureModule',
    canActivate: [ AuthGuard ]
  },
  {
    path: "**",
    redirectTo: "/sign-in",
  },
];

/**
 * The root routing module. Other routes can be found next to their respective views.
 */
@NgModule({
  imports: [ RouterModule.forRoot(routes, {enableTracing: !environment.production}) ],
  exports: [ RouterModule ],
  providers: [],
  declarations: [],
})
export class AppRoutingModule {
}
