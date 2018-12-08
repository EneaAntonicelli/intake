import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { CardTileComponent } from "./card-tile/card-tile.component";
import { IntakeTitleComponent } from "./intake-title/intake-title.component";
import { LogoComponent } from "./logo/logo.component";
import { SlideShowComponent } from "./slide-show/slide-show.component";
import { NewContractQuestionsComponent } from "./new-contract-questions/new-contract-questions.component";
import { ManagerDashboardComponent } from "./manager-dashboard/manager-dashboard.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: "dashboard/:id", component: ManagerDashboardComponent },
  { path: "new-contract", component: NewContractQuestionsComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardTileComponent,
    IntakeTitleComponent,
    LogoComponent,
    SlideShowComponent,
    NewContractQuestionsComponent,
    ManagerDashboardComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
