import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';

import {Router} from '@angular/router';

@Component({
  selector: 'app-composants-menu',
  templateUrl: './composants-menu.component.html',
  styleUrls: ['./composants-menu.component.scss']
})
export class ComposantsMenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'vue d\'ensemble',
        icon: 'fa-sharp fa-solid fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'statistiques',
        icon: 'fa-thin fa-solid fa-chart-simple',
        url: 'statiqtiques'
      }
    ]
  },
    {
      id: '2',
      titre: 'Article',
      icon: 'fa-solid fa-boxes-stacked',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Article',
          icon: 'fa-solid fa-box',
          url: 'articles',
        },
        {
          id: '2',
          titre: 'Mouvement de stock',
          icon: 'fa-brands fa-stack-overflow',
          url: 'mvtStock',
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fa-solid fa-users',
          url: 'clients',
        },
        {
          id: '32',
          titre: 'Commandes clients',
          icon: 'fa-solid fa-cart-shopping',
          url: 'cmdclient',
        }

      ]
    },
    {
      id: '4',
      titre: 'Fournisseurs',
      icon: 'fa-solid fa-users',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Fournisseurs',
          icon: 'fa-solid fa-users',
          url: 'fournisseurs',
        },
        {
          id: '42',
          titre: 'Commandes fournisseurs',
          icon: 'fa-solid fa-cart-shopping',
          url: 'cmdfournisseur',
        }

      ]
    },
    {
      id: '5',
      titre: 'Parametrage',
      icon: 'fa-solid fa-wrench',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Categories',
          icon: 'fa-solid fa-bars-progress',
          url: '',
        },
        {
          id: '52',
          titre: 'Utilisateurs',
          icon: 'fa-solid fa-user-plus',
          url: '',
        }

      ]
    }
  ];

  constructor(private router: Router) {} /* pour naviguer il doit injecter un attribut de type router */

  ngOnInit(): void {
  }

  // tslint:disable-next-line:ban-types no-shadowed-variable
  navigate(url?: String): void
  {
    this.router.navigate([url]);
  }
}
