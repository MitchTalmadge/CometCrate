import { Component } from "@angular/core";
import { faCalendarAlt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FormBuilder, Validators } from "@angular/forms";
import { AuthService } from "@/app/services/auth.service";

@Component({
  selector: "cc-welcome",
  templateUrl: 'welcome.component.html',
  styleUrls: [ 'welcome.component.scss' ],
})
export class WelcomeComponent {

  faMapMarkerAlt = faMapMarkerAlt;
  faCalendarAlt = faCalendarAlt;

  public emailFormGroup = this.formBuilder.group({
    email: [ '', [ Validators.required ] ],
  });

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder) {
  }

  onSubmitEmail() {
    this.authService.ident(this.emailFormGroup.get('email')!.value)
      .then(result => {
        console.log(result);
      })
  }

}
