import { Injectable } from '@angular/core';
import { CanLoad, Route, Router} from '@angular/router';
import { AuthService } from "@/app/services/auth.service";

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canLoad(route: Route): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authService.fetchCurrentUser()
        .then(user => {
          if (user) {
            resolve(true);
          } else {
            console.log("Access to secure routes denied since user is not signed in. Redirecting to sign-in.");
            this.router.navigateByUrl('/sign-in');
            resolve(false);
          }
        })
        .catch(err => {
          reject(err);
        })
    })
  }
}
