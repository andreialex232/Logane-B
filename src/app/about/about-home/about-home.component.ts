import { Component } from '@angular/core';

@Component({
  selector: 'app-about-home',
  templateUrl: './about-home.component.html',
  styleUrls: ['./about-home.component.scss']
})
export class AboutHomeComponent {

  aboutItems: any[] = [
    { heading: 'Suntem o flota autorizata', text: 'Suntem o flota autorizata de catre Autoritatea Rutiera Romana(ARR) ca Operator de Transport Alternativ de Persoane conform reglementarilor in vigoare. Asiguram administrarea conturilor pentru activitatea de transport alternativ in toate orasele in care activam pentru Uber si Bolt.'},
    { heading: 'Oferim transpartenta', text: 'Oferim transpartenta totala asupra veniturilor si cheltuielilor , va putem indruma pentru constituirea PFA-ului care este gratuita la Registrul Comertului sau va putem ajuta contra-cost fara bataie de cap si fara sa va deplasati. Totusi , putem colabora si cu cei care care au orice alta entitate juridica.' },
    { heading: 'Flota noastra', text: 'Flota noastra ofera permanent, soferilor parteneri gratuit : copie conforma si ecusoane de transport alternative eliberate de ARR pentru platformele Uber si Bolt , contract de comodat ,asigurare de bagaje si calatori . (de la capat)Flota noastra va ofera si reduceri la service-uri autorizate RAR , la piese de schimb si preturi avantajoase pentru RCA-uri si tratari auto.' },
    { heading: 'Suport 24/7 ', text: 'Va sustinem si indrumam pe intreaga perioada de activitate, cu raspunsuri foarte rapide la orice solicitare' }
  ];
}
