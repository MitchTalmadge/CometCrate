import { Component } from "@angular/core";
import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "@/app/services/auth.service";
import { environment } from "@/environment/environment.prod";
import { Router } from "@angular/router";

@Component({
  selector: "cc-sign-in",
  templateUrl: 'sign-in.component.html',
  styleUrls: [ 'sign-in.component.scss' ],
})
export class SignInComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;

  constructor(
    private router: Router) {
  }

  public onMLHButtonClick(): void {
    // Open the OAuth in a new window.
    let oAuthWindow = window.open(`${environment.apiUrl}/auth/oauth/mlh/login`);

    // Start a timer to wait for OAuth window to close.
    let oAuthWindowTimer = setInterval(() => {
      if (!oAuthWindow) {
        console.log("OAuth window appeared to not open.");
        clearInterval(oAuthWindowTimer);
        return;
      }

      if (oAuthWindow.closed) {
        clearInterval(oAuthWindowTimer);
        this.router.navigate(['secure']);
      }
    }, 500);
  }

}
