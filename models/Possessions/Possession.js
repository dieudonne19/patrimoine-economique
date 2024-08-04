import { Person } from "../Personne.js";

export class Possession {
    /**
     * @param  {Person} possesseur
     * @param {Number} valeur
     * @param {String} libelle
     */
    constructor(possesseur, libelle, valeur, dateDebut) {
        this.possesseur = possesseur;
        this.libelle = libelle;
        this.valeur = valeur >= 0 ? valeur :  new Error("Positive value expected");
        this.dateDebut = dateDebut;
    }

    get getPossesseur() {
        return this.possesseur;
    }

    get getValeur() {
        return this.valeur;
    }

    get getLibelle() {
        return this.libelle;
    }

    get getDateDebut() {
        return new Date(this.dateDebut);
    }
}