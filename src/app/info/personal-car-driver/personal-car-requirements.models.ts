import { IDriverReq } from "src/app/core/interfaces/driver.requirements.models";

export interface ICarCondition {
  title: string;
  text: string;
}

export const PERSONAL_VEHICLE_REQUIREMENTS: IDriverReq[] = [
  {
    number: 1,
    text: 'PFA (dacă nu ai încă un PFA te putem îndruma noi) sau SRL.'
  },
  {
    number: 2,
    text: 'Să deții un permis de conducere categoria B cu minimum 2 ani de vechime.'
  },
  {
    number: 3,
    text: 'Să ai atestat trasport persoane.'
  },
  {
    number: 4,
    text: 'Să obții un aviz medical și un aviz psihologic cu titlul APT.'
  },
  {
    number: 5,
    text: 'Să ai minimum 21 de ani.'
  },
  {
    number: 6,
    text: 'Să nu ai antecedente penale (se eliberează pe loc de la orice secție de Poliție)'
  },
  {
    number: 7,
    text: 'Să prezinti un cazier auto fără abateri grave (cazier auto fara contraventii si infractiuni grave, in ultimii 5 ani)'
  }
];

export const CAR_CONDITION_REQUIREMENTS: ICarCondition[] = [
  {
    title: 'Mașină cu 4 portiere și AC',
    text: 'Este esențial ca mașina să fie dotată cu patru portiere pentru acces ușor și confort sporit pentru pasageri. De asemenea, este important ca mașina să aibă sistem funcțional de aer condiționat pentru a asigura un mediu confortabil în interior.'
  },
  {
    title: 'Întreținută bine, fără daune vizibile',
    text: 'Mașina trebuie să fie întreținută și în stare bună de funcționare. Nu trebuie să prezinte daune vizibile, cum ar fi lovituri sau zgârieturi evidente, care ar putea afecta aspectul sau performanța mașinii. Este important ca toate componentele mașinii să fie în stare de funcționare corespunzătoare și să fie efectuate în mod regulat revizii și reparații necesare pentru menținerea acestui standard.'
  },
  {
    title: 'Vechime maximă a mașinii',
    text: 'Vechime maximă a mașinii - 15 ani (maxim 14 ani pentru a putea obține copia conformă pentru o perioadă de un an)'
  }
];