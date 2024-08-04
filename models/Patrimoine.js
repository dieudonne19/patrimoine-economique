import { Person } from "./Personne.js";
import { Possession } from "./Possession.js";
import {BienMateriels} from "./Possessions/BienMateriels.js";
import { Money } from "./Possessions/Money.js";
import {TrainDeVie} from "./TrainDeVie.js";

export class Patrimoine {
    /**
     * @param {Person} possesseur
     * @param {Object[]} possessions
     * @param {Object[]} trainDeVie
     */
    constructor(possesseur, possessions, trainDeVie) {
        this.possesseur = possesseur;
        this.possessions = possessions;
        this.trainDeVie = trainDeVie;
        this.date = new Date();
    }

    /**
     * Retourne la patrimoine d'un particulier dans une date donnée
     * @param {Date} dateDonnee
     * @returns {Number}
     */
    getPatrimoineValue(dateDonnee) {
        const ensBienMateriels = this.possessions.filter(bien => bien instanceof BienMateriels);
        const ensTrainDeVie = this.trainDeVie.filter(traindv => traindv instanceof TrainDeVie);
        const ensArgent = this.possessions.filter(possession => possession instanceof Money);

        const depenses = {
            totalTrainDeVie: 0,
            totalBiens: 0
        };

        const Argent = {
            espece: 0,
            epargne: 0,
            courant: 0
        };

        ensBienMateriels.forEach(bien => depenses.totalBiens += bien.getValeurAt(dateDonnee));
        ensTrainDeVie.forEach(trainDv => depenses.totalTrainDeVie += trainDv.getTrainDeVieAt(dateDonnee));

        return depenses;
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
        this.trainDeVie.push(traindeVie)
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
        this.trainDeVie.filter(tv => tv.name !== traindeVie.libelle);
    }

}