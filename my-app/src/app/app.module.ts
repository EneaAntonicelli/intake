import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CardTileComponent } from "./card-tile/card-tile.component";
import { IntakeTitleComponent } from "./intake-title/intake-title.component";
import { LogoComponent } from './logo/logo.component';
import { SlideShowComponent } from './slide-show/slide-show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardTileComponent,
    IntakeTitleComponent,
    LogoComponent,
    SlideShowComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
