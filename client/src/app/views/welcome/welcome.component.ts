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
    window.open(`${environment.apiUrl}/auth/oauth/mlh/login`)
  }

}
