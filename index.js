//  MVC = Model View Controller

import {Person} from "./models/Personne.js";
import {Patrimoine} from "./models/Patrimoine.js";
import {BienMateriels} from "./models/Possessions/BienMateriels.js";
import {TrainDeVie} from "./models/TrainDeVie.js";
import {CompteBancaireCourant, CompteBancaireEpargne, Money} from "./models/Possessions/Money.js";

// Propriétaire du patrimoine
const Moi = new Person("Dieudonné Andrianjato", 600000);

// Mes possessions et train de vie
// const possessions = [
//     new BienMateriels(Moi, 1000000, "Ordinateur portable", "materiel informatique"),
//     new BienMateriels(Moi, 30000, "pantalon", "vestimentaire"),
//     new BienMateriels(Moi, 20000, "casquette", "vestimentaire"),
//     new Money(Moi, "argent en espece", 50000),
//     new CompteBancaireEpargne(Moi, "ma compte bancaire epargne",200000),
//     new CompteBancaireCourant(Moi, "ma compte bancaire courant",100000)
// ];
// const trainDeVies = [
//     new TrainDeVie("loyer", 300000),
//     new TrainDeVie("ecolage", 250000),
//     new TrainDeVie("vivres", 100000)
// ];


// const maPatrimoine = new Patrimoine(Moi, possessions, trainDeVies);


// const patrimoine = maPatrimoine.getPatrimoineValue("30 decembre 2025")
// console.log(patrimoine);


// const anotherBienMateriel = new BienMateriels(Moi, "another biens", 1000, "materiel informatique");

// console.log(anotherBienMateriel.getDateDebut)


const computer = new BienMateriels(
    Moi, 
    "ordinateur", 
    100000, "materiel informatique",
    "2024-3-3"
);

const savingsAccount = new CompteBancaireEpargne(
    Moi, 
    "compte epargne",
    200000,
    "2024-3-3"
)

console.log(savingsAccount.getValeurAt("2025-3-3"));
// console.log(computer.getDateDebut);