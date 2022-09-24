import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from './page/page-login/page-login.component';
import {PageInscriptionComponent} from './page/page-inscription/page-inscription.component';
import {PageDashboardComponent} from './page/page-dashboard/page-dashboard.component';
import {PageStatistiquesComponent} from './page/page-statistiques/page-statistiques.component';
import {PageArticleComponent} from './page/article/page-article/page-article.component';
import {NouvelArticleComponent} from './page/article/nouvel-article/nouvel-article.component';

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
      }


    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
