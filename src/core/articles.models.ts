export interface IArticles {
  heading: string;
  text: string;
  link: string;
};

export const INFO_ARTICLES_GENERAL: IArticles[] = [
  {
    heading: 'Venituri si cheltuieli sofer',
    text: 'La ce venituri te poti astepta ca sofer partener',
    link: 'information/income'
  },
  {
    heading: 'Comision fix sau variabil',
    text: 'Ce alegem, comisionul fix sau variabil in colaborarea cu o Flota de ridesharing?',
    link: 'information/fees'
  },
  {
    heading: 'Casa de marcat',
    text: 'Este colaborarea cu o Flota obligatorie sau necesara?',
    link: 'information/checkout'
  }
];

export const INFO_ARTICLES_LEGAL: IArticles[] = [
  {
    heading: 'Carte de munca',
    text: 'Ce variante avem pentru o colaborare legala cu companiile de ridesharing Uber si Bolt',
    link: 'information/employment'
  },
  {
    heading: 'Cum devin sofer partener',
    text: 'Pasii pe care trebuie sa-i urmam pentru a deveni Sofer Partener Uber Bolt',
    link: 'information/how-to-become-a-driver'
  },
  {
    heading: 'OUG 49/2019',
    text: 'Cat si cum putem deduce daca lucram ca PFA',
    link: 'information/legal'
  }
];

export const INFO_ARTICLES_PARTNERS: IArticles[] = [
  {
    heading: 'Bolt',
    text: 'Bolt este o platformă globală de ride-hailing, similară cu Uber',
    link: 'https://bolt.eu/ro-ro/'
  },
  {
    heading: 'Uber',
    text: 'Uber este o platformă globală de ride-hailing care conectează pasagerii cu șoferii prin intermediul unei aplicații mobile',
    link: 'https://www.uber.com/ro/ro/'
  },
  {
    heading: 'Splash',
    text: 'Splash este o platformă care oferă atât servicii de ride-hailing, cât și livrare de alimente',
    link: 'https://ridesplash.com/'
  }
];