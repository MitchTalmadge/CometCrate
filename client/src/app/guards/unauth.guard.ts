import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from "@/app/services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve, reject) => {
      this.authService.fetchCurrentUser()
        .then(user => {
          if (!user) {
            resolve(true);
          } else {
            console.log("User is already signed in. Redirecting to dashboard.");
            resolve(this.router.parseUrl('/secure'));
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
