import {Possession} from "./Possession.js";

export class BienMateriels extends Possession {

    /**
     * @param {Person} possesseur
     * @param {Number} valeur
     * @param {String} libelle
     * @param {String} type
     */
    constructor(possesseur, libelle, valeur, type, dateDebut) {
        super(possesseur, libelle, valeur, dateDebut);
        this.type = type;
        this.amortissement = this.type.includes("informatique") ? 10 : 20 ;
    }

    /**
     * Juste application du taux d'amortissement sur la valeur du bien materiel
     * @param {Date} dateDonnee
     */
    getAmortissementAt (dateDonnee) {
        if (super.getDateDebut <= dateDonnee) {
            const intervalDeMois = new Date(dateDonnee).getMonth() - super.getDateDebut.getMonth();
            const intervalDeAnnee =  new Date(dateDonnee).getFullYear() - super.getDateDebut.getFullYear();
            const intervalDeJours = new Date(dateDonnee).getDay() - super.getDateDebut.getDay();
            const nombreMois = (intervalDeAnnee * 12) + intervalDeMois;

            // console.log(`annee ${intervalDeAnnee} / mois ${intervalDeMois} / jours ${intervalDeJours}`)

            const valeurAmortissement = 
            (this.valeur * (this.amortissement / 100)) * (nombreMois / 12 + intervalDeJours /365);
            this.valeur -= valeurAmortissement;
        };
    }

    getValeurAt(dateDonnee) {
        if (new Date(dateDonnee) < super.getDateDebut) return 0;
        else {
            this.getAmortissementAt(dateDonnee);
            return Math.round(this.valeur);
        }
    }

    get getType() {
        return this.type;
    }
}