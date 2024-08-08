import { writeFileFrom } from "../data/index.js";
import { Flux } from "./Flux.js";
import { Personne } from "./Personne.js";
import { Possession } from "./Possessions/Possession.js";
import {BienMateriels} from "./Possessions/BienMateriels.js";
import { CompteBancaireEpargne, Money } from "./Possessions/Money.js";

export class Patrimoine {
    /**
     * @param {Personne} possesseur
     * @param {Object[]} possessions
     * @param {Object[]} flux
     */
    constructor(possesseur, possessions, flux) {
        this.possesseur = possesseur;
        this.possessions = possessions;
        this.flux = flux;
        this.date = new Date();
    }

    /**
     * Retourne la patrimoine d'un particulier à une date donnée
     * @param {Date} dateDonnee
     * @returns {Number}
     */
    CalculatePatrimoineValue(dateDonnee) {

        const ensBienMateriels = this.possessions.filter(bien => bien instanceof BienMateriels);
        const ensflux = this.flux.filter(traindv => traindv instanceof Flux);
        const ensArgent = this.possessions.filter(possession => possession instanceof Money);

        let total = 0;

        ensBienMateriels.forEach(
          (bien) => (total += bien.getValeurAt(dateDonnee))
        );
        
        ensflux.forEach((flux) => (total += flux.getValeurAt(dateDonnee)));

        ensArgent.forEach((arg) => {
          if (arg instanceof CompteBancaireEpargne)
            total += arg.getValeurAt(dateDonnee);
          else total += arg.getValeur;
        });

        return total;
    }

    /**
     * @param {Date} dateDonnee 
     * @returns {number}
     */
    getPatrimoineValueAt(dateDonnee) {
        if (new Date(dateDonnee) < this.date) return 0;
        else return this.CalculatePatrimoineValue(dateDonnee);  
    }

    build() {
        const valeur = {
            possesseur: this.possesseur.getNom,
            possessions : this.getListOfPossessions,
            flux: this.getListOfFlux
        }
        writeFileFrom("./data/data.json", valeur)
    }

    /**
     * @param {Possession} possession
     */
    addPossession(possession) {
        if (this.possesseur.getNom === possession.possesseur) this.possessions.push(possession)
        else throw new Error(`Cette possession ne peut pas être celle de ${this.possesseur.getNom}`)
    }

    /**
     * @param {Flux} flux
     */
    addFlux(flux) {
        this.flux.push(flux)
    }


    /**
     * @param {Possession} possession
     */
    removePossession(possession) {
        this.possessions.filter(p => p.libelle !== possession.libelle);
    }

    /**
     * @param {TrainDeVie} flux
     */
    removeFlux(flux) {
        this.flux.filter(fl => fl.libelle !== flux.libelle);
    }

    get getListOfPossessions() {
        return this.possessions;
    }
    get getListOfFlux() {
        return this.flux;
    }
}