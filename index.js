//  MVC = Model View Controller

import {Person} from "./models/Personne.js";
import {Patrimoine} from "./models/Patrimoine.js";
import {BienMateriels} from "./models/Possessions/BienMateriels.js";
import {TrainDeVie} from "./models/TrainDeVie.js";
import {CompteBancaireCourant, CompteBancaireEpargne, Money} from "./models/Possessions/Money.js";
import { Flux } from "./models/flux.js";

// Propriétaire du patrimoine
export const Moi = new Person("Ilo", 600000);

// Mes possessions et train de vie
export const possessions = [
    new BienMateriels(Moi, "Ordinateur portable", 1000000, "materiel informatique", "2022-02-01"),
    new BienMateriels(Moi, "pantalon", 30000, "vestimentaire", "2023-03-1"),
    new BienMateriels(Moi, "casquette", 20000, "vestimentaire", "2019-09-19"),
    new Money(Moi, "argent en espece", 50000, "2024-7-12"),
    new CompteBancaireEpargne(Moi, "ma compte bancaire epargne",200000, "2020-06-5"),
    new CompteBancaireCourant(Moi, "ma compte bancaire courant",100000, "2023-12-04")
];

export const flux = [
    new Flux(Moi, "salaire", 1500000, "2024-08-04", "ENTRANT"),
    new Flux(Moi, "loyer", 500000, "2024-8-4", "SORTANT"),
    new Flux(Moi, "entretien_voiture", 500000, "2024-8-4", "SORTANT")
];


const maPatrimoine = new Patrimoine(Moi, possessions, flux);
// maPatrimoine.build()
const patrimoine = maPatrimoine.getPatrimoineValueAt("2024-12-31")
console.log(patrimoine);
