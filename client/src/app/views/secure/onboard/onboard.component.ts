import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "@/app/services/auth.service";
import { User } from "@/models/api/user.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'cc-onboard',
  templateUrl: 'onboard.component.html',
  styleUrls: [ 'onboard.component.scss' ]
})

export class OnboardComponent implements OnInit, OnDestroy {

  public currentUser: User | undefined;
  private currentUserSubscription: Subscription | undefined;

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

}
