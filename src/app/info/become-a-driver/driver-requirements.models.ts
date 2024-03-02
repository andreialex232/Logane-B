export interface IDriverReq {
  number: number;
  text: string;
};

export const DRIVER_REQUIREMENTS: IDriverReq[] = [
  {
    number: 1,
    text: 'Să deții un permis de conducere categoria B cu minimum 2 ani de vechime.'
  },
  {
    number: 2,
    text: 'Să ai Atestat de Transport persoane în regim de închiriere.'
  },
  {
    number: 3,
    text: 'Să obții un aviz medical și un aviz psihologic cu titlul APT.'
  },
  {
    number: 4,
    text: 'Să ai minimum 25 de ani.'
  },
  {
    number: 5,
    text: 'Să nu ai antecedente penale (se eliberează pe loc de la orice secție de Poliție)'
  },
  {
    number: 6,
    text: 'Să prezinti un cazier auto fără abateri (cazier auto fara contraventii si infractiuni grave, in ultimii 5 ani)'
  }
];