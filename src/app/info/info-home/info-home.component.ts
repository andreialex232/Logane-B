import { Component } from '@angular/core';

@Component({
  selector: 'app-info-home',
  templateUrl: './info-home.component.html',
  styleUrls: ['./info-home.component.scss']
})
export class InfoHomeComponent {

  infoItems: any[] = [
    { heading: 'Comisioane variabile sau fixe din venitul net', text: 'Am analizat destul de atent castigurile obtinute de un sofer partener, indiferent de flota la care activeaza si indiferent de platforma cu care opereaza, Uber sau Bolt. Ca sa fim cinstiti, nimeni nu se imbogateste din asa ceva, dar nici nu pot fi ignorate sumele castigate! Ce este mai important este ca aceasta activitate aduce un venit rezonabil celor ce nu au un alt loc de munca sau, mai simplu, va rotunjeste veniturile din alte surse. In plus este o activitate, un job in care sunteti propriul sef. '},
    { heading: 'Ce alegem, Carte de Munca sau PFA?', text: 'In marea majoritate a cazurilor, companiile ofera la colaborare asistenta in achitarea CAS-ului, respectiv Contributiile pentru Asigurari Sociale (cotizatia pentru pensie) si a CASS, respectiv Contributia de Asigurari Sociale de Sanatate (asigurarea medicala). In acel moment, soferul considera ca este acoperit din punct de vedere fiscal si nu mai tine cont si de veniturile suplimentare obtinute lunar.' },
    { heading: 'Registrul de Evidenta Fiscala pentru PFA', text: 'Registrul de Evidenta Fiscala (REF) este obligatoriu, atat pentru activitatile independente impuse in sistem real cat si celor impuse cu norma de venit. In cazul activitatii de ridesharing avem impozitare in Sistem Real, deci vom completa tot, venituri si cheltuieli. Activitatile impuse cu Norme de Venit completeaza doar partea de incasari, pe​ fiecare sursa de venit.' },
    { heading: 'Taxe si Comisioane', text: 'Va sustinem si indrumam pe intreaga perioada de activitate, cu raspunsuri foarte rapide la orice solicitare' }
  ];
}
