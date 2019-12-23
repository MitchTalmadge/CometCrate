import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {NgModule, Optional, SkipSelf} from "@angular/core";
import { AuthService } from "@/app/services/auth.service";

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  declarations: [],
  exports: [],
  providers: [
    AuthService
  ],
})
export class ServiceModule {

  constructor(@Optional() @SkipSelf() otherCoreModule: ServiceModule) {
    if (otherCoreModule) {
      throw new Error("The Service Module was imported twice.");
    }
  }

}
