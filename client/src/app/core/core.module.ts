import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {NgModule, Optional, SkipSelf} from "@angular/core";

/**
 * This module contains the service and other things which should only load once in the application.
 */
@NgModule({
  imports: [
    HttpClientModule,
    HttpClientXsrfModule,
  ],
  declarations: [],
  exports: [],
  providers: [
  ],
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() otherCoreModule: CoreModule) {
    if (otherCoreModule) {
      throw new Error("The Core Module was imported twice.");
    }
  }

}
