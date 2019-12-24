import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "@/app/shared/shared.module";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { environment } from "@/environment/environment.prod";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    ApolloModule,
    AppRoutingModule,
    BrowserModule,
    SharedModule,
    HttpClientModule,
    HttpLinkModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: `${environment.apiUrl}/graphql`
          })
        }
      },
      deps: [ HttpLink ]
    }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
