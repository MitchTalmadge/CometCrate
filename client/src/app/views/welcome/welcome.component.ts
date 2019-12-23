import { Component } from "@angular/core";
import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { AuthService } from "@/app/services/auth.service";
import { environment } from "@/environment/environment.prod";

@Component({
  selector: "cc-welcome",
  templateUrl: 'welcome.component.html',
  styleUrls: [ 'welcome.component.scss' ],
})
export class WelcomeComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;

  constructor(
    private authService: AuthService) {
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
        alert("OAuth Finished");
        clearInterval(oAuthWindowTimer);
      }
    }, 500);
  }

}
