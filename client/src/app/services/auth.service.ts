import { Injectable, OnInit } from '@angular/core';
import { User } from "@/models/api/user.model";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private static readonly CurrentUserQuery = gql`
      query CurrentUserQuery {
          self {
              id
              firstName
              lastName
              email
              phone
          }
      }
  `;

  public $currentUser = new BehaviorSubject<User | undefined>(undefined);

  constructor(private apollo: Apollo) {
  }

  public fetchCurrentUser(): Promise<User> {
    return new Promise<User>((resolve, reject) => {
      this.apollo.query<{ self: User }>({
        query: AuthService.CurrentUserQuery,
        fetchPolicy: "no-cache",
      }).subscribe((result) => {
        this.$currentUser.next(result.data.self);
        resolve(result.data.self);
      }, error => {
        console.error("Failed to get current user: " + error);
        this.$currentUser.next(undefined);
        reject(error);
      })
    })

  }

}
