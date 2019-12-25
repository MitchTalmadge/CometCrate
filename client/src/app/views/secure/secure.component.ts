import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from "@/models/api/user.model";
import { Subscription } from "rxjs";
import { AuthService } from "@/app/services/auth.service";
import { faSignOutAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'cc-secure',
  templateUrl: 'secure.component.html',
  styleUrls: ['secure.component.scss']
})
export class SecureComponent implements OnInit, OnDestroy {

  public currentUser: User | undefined;
  private currentUserSubscription: Subscription | undefined;

  public faUserCircle = faUserCircle;
  public faSignOutAlt = faSignOutAlt;

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
