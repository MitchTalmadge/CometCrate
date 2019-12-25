import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, UrlTree } from '@angular/router';
import { AuthService } from "@/app/services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean | UrlTree> {
    return new Promise<boolean | UrlTree>((resolve, reject) => {
      this.authService.fetchCurrentUser()
        .then(user => {
          if (user) {
            resolve(true);
          } else {
            console.log("Access to secure routes denied since user is not signed in. Redirecting to sign-in.");
            resolve(this.router.parseUrl('/sign-in'));
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
