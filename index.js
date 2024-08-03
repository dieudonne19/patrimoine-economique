//  MVC = Model View Controller

import {Person} from "./model/Person.js";
import {Patrimoine} from "./model/Patrimoine.js";
import {BienMateriels} from "./model/Possessions/BienMateriels.js";
import {TrainDeVie} from "./model/TrainDeVie.js";
import {CompteBancaireCourant, CompteBancaireEpargne, Money} from "./model/Possessions/Money.js";

// Propriétaire du patrimoine
const Moi = new Person("Dieudonné Andrianjato", 600000);

// Mes possessions et train de vie
const possessions = [
    new BienMateriels(Moi, 1000000, "Ordinateur portable", "materiel informatique"),
    new BienMateriels(Moi, 30000, "pantalon", "vestimentaire"),
    new BienMateriels(Moi, 20000, "casquette", "vestimentaire"),
    new Money(Moi, "argent en espece", 50000),
    new CompteBancaireEpargne(Moi, "ma compte bancaire epargne",200000),
    new CompteBancaireCourant(Moi, "ma compte bancaire courant",100000)
];
const trainDeVies = [
    new TrainDeVie("loyer", 300000),
    new TrainDeVie("ecolage", 250000),
    new TrainDeVie("vivres", 100000)
];


const maPatrimoine = new Patrimoine(Moi, possessions, trainDeVies);


maPatrimoine.getPatrimoineValue("30 decembre 2035")