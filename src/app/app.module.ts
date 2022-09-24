import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageInscriptionComponent } from './page/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page/page-statistiques/page-statistiques.component';
import { ComposantsMenuComponent } from './composants/composants-menu/composants-menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { ComposantsHeaderComponent } from './composants/composants-header/composants-header.component';


@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    ComposantsMenuComponent,
    HeaderComponent,
    ComposantsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
