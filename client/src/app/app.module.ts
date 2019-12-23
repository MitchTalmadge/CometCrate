import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { FooterComponent } from "./footer/footer.component";
import { BrowserModule } from "@angular/platform-browser";
import { ComponentsModule } from "@/app/components/components.module";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    ComponentsModule
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
