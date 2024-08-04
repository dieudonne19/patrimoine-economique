import { add } from "../data/index.js";
import { Flux } from "./flux.js";
import { Person } from "./Personne.js";
import { Possession } from "./Possessions/Possession.js";
import {BienMateriels} from "./Possessions/BienMateriels.js";
import { CompteBancaireCourant, CompteBancaireEpargne, Money } from "./Possessions/Money.js";

export class Patrimoine {
    /**
     * @param {Person} possesseur
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
     * Retourne la patrimoine d'un particulier dans une date donnée
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

    getPatrimoineValueAt(dateDonnee) {
        if (new Date(dateDonnee) <= this.date) return 0;
        else {
            const valeurs = this.CalculatePatrimoineValue(dateDonnee);
            
            // add("./data/data.json", valeurs)
            return valeurs;
        }
    }

    /**
     * @param {Possession} possession
     */
    addPossession(possession) {
        if (this.possesseur.getNom === possession.possesseur) this.possessions.push(possession)
        else throw new Error(`Cette possession ne peut pas être celle de ${this.possesseur.getNom}`)
    }

    /**
     * @param {TrainDeVie} traindeVie
     */
    addTraindeVie(traindeVie) {
        this.flux.push(traindeVie)
    }


    /**
     * @param {Possession} possession
     */
    removePossession(possession) {
        this.possessions.filter(p => p.libelle !== possession.libelle);
    }

    /**
     * @param {TrainDeVie} traindeVie
     */
    removeTrainDeVie(traindeVie) {
        this.flux.filter(tv => tv.name !== traindeVie.libelle);
    }

    get getListOfPossessions() {
        return this.possessions;
    }
    get getListOfFlux() {
        return this.flux;
    }

    build() {
        const valeur = [
            this.possesseur.getNom,
            this.getListOfPossessions,
            this.getListOfFlux
        ]

        add("./data/data.json", valeur)
    }

}