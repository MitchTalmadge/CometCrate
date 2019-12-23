import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "@/environment/environment";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public ident(email: string): Promise<any> {
    return this.http.get(`${environment.apiUrl}/auth/ident?email=${email}`).toPromise();
  }

}
