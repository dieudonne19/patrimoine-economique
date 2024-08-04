export class TrainDeVie {
    /**
     * @param {string} name
     * @param {number} valeur
     */
    constructor(name,  valeur) {
        this.name = name;
        this.valeur = valeur;
    }

    get getName() {
        return this.name;
    }

    set setName(value) {
        this.name = value;
    }

    /**
     * @param {Date} dateDonnee
     */
    getTrainDeVieAt(dateDonnee) {
        const intervalDeMois = new Date(dateDonnee).getMonth() - new Date().getMonth();
        const intervalDeAnnee =  new Date(dateDonnee).getFullYear() - new Date().getFullYear();
        const nombreMois = (intervalDeAnnee * 12) + intervalDeMois;

        //console.log(nombreMois, "nbre mois")
        return this.valeur *= nombreMois === 0 ? 1 : nombreMois + 1;
        // +1 parce que janvier = 0
    }

    setValeur(v) {
        this.valeur *= v;
    }

}