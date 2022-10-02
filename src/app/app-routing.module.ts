import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from './page/page-login/page-login.component';
import {PageInscriptionComponent} from './page/page-inscription/page-inscription.component';
import {PageDashboardComponent} from './page/page-dashboard/page-dashboard.component';
import {PageStatistiquesComponent} from './page/page-statistiques/page-statistiques.component';
import {PageArticleComponent} from './page/article/page-article/page-article.component';
import {NouvelArticleComponent} from './page/article/nouvel-article/nouvel-article.component';
import {PageMvtstkComponent} from './page/page-mvtstk/page-mvtstk.component';
import {DetailsClientComponent} from './composants/details-client/details-client.component';
import {PageClientComponent} from './page/client/page-client/page-client.component';
import {PageFournisseursComponent} from './page/fournisseur/page-fournisseurs/page-fournisseurs.component';
import {NouveauCltFrsComponent} from './composants/nouveau-clt-frs/nouveau-clt-frs.component';

// @ts-ignore
const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },

  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statiqtiques',
        component: PageStatistiquesComponent,
      },
      {
        path: 'articles',
        component: PageArticleComponent,
      },
      {
        path: 'nouvelarticle',
        component: NouvelArticleComponent,
      },
      {
        path: 'mvtStock',
        component: PageMvtstkComponent,
      },
      {
        path: 'clients',
        component: PageClientComponent,
      },
      {
        path: 'nouveauClient',
        component: NouveauCltFrsComponent,
      },
      {
        path: 'fournisseurs',
        component: PageFournisseursComponent,
      },
      {
        path: 'nouveauFournisseur',
        component: NouveauCltFrsComponent,
      }




    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
