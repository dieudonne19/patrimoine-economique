import { Person } from "./Personne.js";
import { Possession } from "./Possessions/Possession.js";


export class Flux extends Possession {

  /**
   * @param {Person} possesseur 
   * @param {String} libelle 
   * @param {Number} valeur 
   * @param {Date} dateDebut 
   */
  constructor(possesseur, libelle, valeur, dateDebut) {
    super(possesseur, libelle, valeur, dateDebut);
  }

  /**
   * @param {Date} dateDonnee 
   */
  getValeurAt(dateDonnee) {

    const date = new Date(dateDonnee);
    if (super.getDateDebut > date) {
      throw new Error("Impossible de donner la valeur du flux à cette date");
    }

    const intervalAnnee = date.getFullYear() - super.getDateDebut.getFullYear();
    const intervalMois = date.getMonth() - super.getDateDebut.getMonth();
    const intervalJour = date.getDate() - super.getDateDebut.getDate();

    let nombreDeMois = (intervalAnnee * 12) + intervalMois;

    console.log(`Annee ${intervalAnnee} / Mois ${intervalMois} / Jour ${intervalJour}`);
    
    console.log(`Nbr de mois ${nombreDeMois}`);
    
    return super.getValeur * nombreDeMois;
  
  }
}


const Moi = new Person("Dieudonné");
const salaire = new Flux(Moi, "Salaire", 600_000, "2024-3-3");
console.log(salaire.getDateDebut)
console.log(salaire.getValeurAt("2024-6-14"))