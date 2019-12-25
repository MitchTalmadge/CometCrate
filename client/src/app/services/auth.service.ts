import { Injectable } from '@angular/core';
import { User } from "@/models/api/user.model";
import gql from "graphql-tag";
import { Apollo } from "apollo-angular";
import { BehaviorSubject } from "rxjs";

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

  private static readonly SignOutMutation = gql`
      mutation SignOutMutation {
          signOut
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
      }, err => {
        console.error("Failed to get current user: " + err);
        this.$currentUser.next(undefined);
        reject(err);
      })
    })

  }

  public signOut(): Promise<void> {
    return new Promise<void>(((resolve, reject) => {
      this.apollo.mutate<any>({
        mutation: AuthService.SignOutMutation
      }).subscribe(() => {
        this.$currentUser.next(undefined);
        resolve();
      }, err => {
        console.error("Failed to sign out: " + err);
        this.$currentUser.next(undefined);
        reject(err);
      })
    }))
  }

}
