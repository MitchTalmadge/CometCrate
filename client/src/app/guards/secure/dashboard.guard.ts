import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from "@/app/services/auth.service";
import { first } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class DashboardGuard implements CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canLoad(route: Route): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
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
              this.router.navigateByUrl('/secure/onboard');
              resolve(false);
            }
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
