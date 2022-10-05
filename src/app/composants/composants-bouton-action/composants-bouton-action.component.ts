import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-composants-bouton-action',
  templateUrl: './composants-bouton-action.component.html',
  styleUrls: ['./composants-bouton-action.component.scss']
})
export class ComposantsBoutonActionComponent implements OnInit {
  @Output()
    // c a d  je veux envoyer un composant fils vers un composant parent
  clickEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  boutonNouveauClick(): void{
    // @ts-ignore
    this.clickEvent.emit(); // lorsque je click sur emit je vais envoyer l evenement au parent et lui qui va decider qu'est qu'il veut faire
  }

}
