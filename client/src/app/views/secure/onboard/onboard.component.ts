import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "@/app/services/auth.service";
import { User } from "@/models/api/user.model";
import { Subscription } from "rxjs";
import { faHandHoldingHeart, faLaptopCode, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { RegistrationMethod } from "@/app/constants/onboard/registration-method.enum";

@Component({
  selector: 'cc-onboard',
  templateUrl: 'onboard.component.html',
  styleUrls: [ 'onboard.component.scss' ]
})

export class OnboardComponent implements OnInit, OnDestroy {

  public faLaptopCode = faLaptopCode;
  public faHandHoldingHeart = faHandHoldingHeart;
  public faAngleRight = faAngleRight;

  public currentUser: User | undefined;
  private currentUserSubscription: Subscription | undefined;

  public registrationMethod: RegistrationMethod | undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.currentUserSubscription = this.authService.$currentUser
      .subscribe(user => {
        this.currentUser = user;
      })
  }

  ngOnDestroy(): void {
    if (this.currentUserSubscription)
      this.currentUserSubscription.unsubscribe();
  }

  public isParticipantSelected(): boolean {
    return this.registrationMethod === RegistrationMethod.PARTICIPANT;
  }

  public isVolunteerSelected(): boolean {
    return this.registrationMethod === RegistrationMethod.VOLUNTEER;
  }

  public onParticipantClick(): void {
    this.registrationMethod = RegistrationMethod.PARTICIPANT;
  }

  public onVolunteerClick(): void {
    this.registrationMethod = RegistrationMethod.VOLUNTEER;
  }

}
