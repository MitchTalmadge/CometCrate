import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ServiceModule } from "./services/service.module";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentsModule } from "@/app/components/components.module";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    ServiceModule,
    ComponentsModule,
  ],
  declarations: [
    AppComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule {
}
