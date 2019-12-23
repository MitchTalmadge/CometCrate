import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceModule } from "./services/service.module";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentsModule } from "@/app/components/components.module";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink, HttpLinkModule } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { environment } from "@/environment/environment.prod";

@NgModule({
  imports: [
    ApolloModule,
    AppRoutingModule,
    BrowserModule,
    ComponentsModule,
    HttpLinkModule,
    ServiceModule,
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
