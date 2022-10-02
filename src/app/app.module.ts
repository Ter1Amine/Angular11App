import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './page/page-login/page-login.component';
import { PageInscriptionComponent } from './page/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './page/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './page/page-statistiques/page-statistiques.component';
import { ComposantsMenuComponent } from './composants/composants-menu/composants-menu.component';
import { ComposantsHeaderComponent } from './composants/composants-header/composants-header.component';
import { PageArticleComponent } from './page/article/page-article/page-article.component';
import { ComposantArticleComponent } from './composants/composant-article/composant-article.component';
import { ComposantsPaginationComponent } from './composants/composants-pagination/composants-pagination.component';
import { ComposantsBoutonActionComponent } from './composants/composants-bouton-action/composants-bouton-action.component';
import { NouvelArticleComponent } from './page/article/nouvel-article/nouvel-article.component';
import { PageMvtstkComponent } from './page/page-mvtstk/page-mvtstk.component';
import { ComposantsMvtstockComponent } from './composants/composants-mvtstock/composants-mvtstock.component';
import { DetailsMvtStkComponent } from './composants/details-mvt-stk/details-mvt-stk.component';
import { ClientsComponent } from './composants/clients/clients.component';
import { DetailsClientComponent } from './composants/details-client/details-client.component';
import { PageClientComponent } from './page/client/page-client/page-client.component';
import { DetailsFournisseurComponent } from './composants/details-fournisseur/details-fournisseur.component';
import { PageFournisseursComponent } from './page/fournisseur/page-fournisseurs/page-fournisseurs.component';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';



@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    ComposantsMenuComponent,
    ComposantsHeaderComponent,
    PageArticleComponent,
    ComposantArticleComponent,
    ComposantsPaginationComponent,
    ComposantsBoutonActionComponent,
    NouvelArticleComponent,
    PageMvtstkComponent,
    ComposantsMvtstockComponent,
    DetailsMvtStkComponent,
    ClientsComponent,
    DetailsClientComponent,
    PageClientComponent,
    DetailsFournisseurComponent,
    PageFournisseursComponent,
    NouveauCltFrsComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
