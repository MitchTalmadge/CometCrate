import { Injectable } from '@angular/core';
import { CanLoad, Route, Router } from '@angular/router';
import { AuthService } from "@/app/services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class UnAuthGuard implements CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canLoad(route: Route): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authService.fetchCurrentUser()
        .then(user => {
          if (!user) {
            resolve(true);
          } else {
            console.log("User is already signed in. Redirecting to dashboard.");
            this.router.navigate(['secure']);
            resolve(false);
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
