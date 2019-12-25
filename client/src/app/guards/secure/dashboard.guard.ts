import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from "@/app/services/auth.service";
import { first } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DashboardGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve, reject) => {
      this.authService.$currentUser.pipe(first()).toPromise()
        .then(user => {
          if (!user) {
            console.log("Dashboard load rejected since user is not signed in.");
            resolve(false);
          } else {
            if (user.onboarded) {
              resolve(true);
            } else {
              console.log("User needs to complete onboarding. Redirecting...");
              resolve(this.router.parseUrl('/secure/onboard'));
            }
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
