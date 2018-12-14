import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { CardTileComponent } from "./components/card-tile/card-tile.component";
import { IntakeHeadingComponent } from "./components/intake-heading/intake-heading.component";
import { LogoComponent } from "./components/logo/logo.component";
import { SlideShowComponent } from "./components/slide-show/slide-show.component";
import { PageNewComponent } from "./pages/page-new/page-new.component";
import { ManagerDashboardComponent } from "./pages/page-manager-dashboard/page-manager-dashboard.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { HomeComponent } from "./pages/page-home/page-home.component";
import { TabListDefinitionsComponent } from "./components/tab-list-definitions/tab-list-definitions.component";
import { PageNewContractComponent } from "./pages/page-new-contract/page-new-contract.component";
import { ContractTileComponent } from "./components/contract-tile/contract-tile.component";
import { PageSoftQuestionsComponent } from "./pages/page-soft-questions/page-soft-questions.component";
import { LinkTileComponent } from "./components/link-tile/link-tile.component";
import { ManagerNewWorkItemComponent } from "./components/manager-new-work-item/manager-new-work-item.component";
import { ManagerHeadingComponent } from "./components/manager-heading/manager-heading.component";
import { ManagerStaffWorkloadComponent } from "./components/manager-staff-workload/manager-staff-workload.component";
import { StaffDropdownComponent } from "./components/staff-dropdown/staff-dropdown.component";
import { SearchbarComponent } from "./components/searchbar/searchbar.component";
import { DetailsModalComponent } from "./components/details-modal/details-modal.component";
import { PageActiveComponent } from "./pages/page-active/page-active.component";

const appRoutes: Routes = [
  { path: "dashboard/:id", component: ManagerDashboardComponent },
  { path: "new", component: PageNewComponent },
  { path: "active", component: PageActiveComponent },
  { path: "soft-questions", component: PageSoftQuestionsComponent },
  { path: "new-contract", component: PageNewContractComponent },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CardTileComponent,
    IntakeHeadingComponent,
    LogoComponent,
    SlideShowComponent,
    PageNewComponent,
    ManagerDashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    TabListDefinitionsComponent,
    PageNewContractComponent,
    ContractTileComponent,
    PageSoftQuestionsComponent,
    LinkTileComponent,
    ManagerNewWorkItemComponent,
    ManagerHeadingComponent,
    ManagerStaffWorkloadComponent,
    StaffDropdownComponent,
    SearchbarComponent,
    DetailsModalComponent,
    PageActiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
