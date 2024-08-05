import { Person } from "./Personne.js";
import { Possession } from "./Possessions/Possession.js";


export class Flux extends Possession {

  /**
   * @param {Person} possesseur 
   * @param {String} libelle 
   * @param {Number} valeur 
   * @param {Date} dateDebut 
   * @param {String} type || ENTRANT || SORTANT
   */
  constructor(possesseur, libelle, valeur, dateDebut, type) {
    super(possesseur, libelle, valeur, dateDebut);
    this.type = type;
  }

  /**
   * @param {Date} dateDonnee 
   */
  getValeurAt(dateDonnee) {

    const date = new Date(dateDonnee);
    if (super.getDateDebut > date) {
      return 0
    }

    const intervalAnnee = date.getFullYear() - super.getDateDebut.getFullYear();
    const intervalMois = date.getMonth() - super.getDateDebut.getMonth();
    // const intervalJour = date.getDate() - super.getDateDebut.getDate();

    let nombreDeMois = (intervalAnnee * 12) + intervalMois;

    // console.log(`Nombre de mois / ${nombreDeMois}`);

    return this.type === "ENTRANT" ? super.getValeur * nombreDeMois : -(super.getValeur * nombreDeMois)
  }


  get getType() {
    return this.type.toUpperCase();
  }

}


const Moi = new Person("Dieudonné")
const salaire = new Flux(
  Moi,
  "salaire", 2500, "2024-3-3", "ENTRANT"
)

console.log(salaire.getValeurAt("3-3-2024"));
