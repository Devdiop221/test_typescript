"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Stagiaire_1 = require("./Stagiaire");
const Formation_1 = require("./Formation");
let Formation1 = new Formation_1.Formation("Formation1", 10, []);
let Formation2 = new Formation_1.Formation("Formation2", 10, []);
let Formation3 = new Formation_1.Formation("Formation3", 10, []);
let Stagiare1 = new Stagiaire_1.Stagiaire('Shikamaru', [10, 20, 30, 40, 50]);
let Stagiare2 = new Stagiaire_1.Stagiaire('Sakura', [10, 20, 30, 40, 50]);
let Stagiare3 = new Stagiaire_1.Stagiaire('Sasuke', [10, 20, 30, 40, 50]);
let Stagiare4 = new Stagiaire_1.Stagiaire('Naruto', [10, 20, 30, 40, 50]);



Stagiare1.setNom('Shikamaru');
Stagiare2.setNom('Sakura');
Stagiare3.setNom('Sasuke');
Stagiare4.setNom('Naruto');



Stagiare1.setNotes([10, 20, 30, 40, 50]);
Stagiare2.setNotes([10, 20, 30, 40, 50]);
Stagiare3.setNotes([10, 20, 30, 40, 50]);
Stagiare4.setNotes([10, 20, 30, 40, 50]);


Formation1.addStagiaire(Stagiare1);
Formation1.addStagiaire(Stagiare2);
Formation1.addStagiaire(Stagiare3);
Formation1.addStagiaire(Stagiare4);



Stagiare1.CalculerMoyenne();
Stagiare2.CalculerMoyenne();
Stagiare3.CalculerMoyenne();
Stagiare4.CalculerMoyenne();


Formation1.CalculerMoyenneFormation(Formation1.getStagiaires());
Formation2.CalculerMoyenneFormation(Formation2.getStagiaires());
Formation3.CalculerMoyenneFormation(Formation3.getStagiaires());


Formation1.getIndexMax();
Formation2.getIndexMax();
Formation3.getIndexMax();


Formation1.removeStagiaire(Stagiare1);
Formation1.removeStagiaire(Stagiare2);
Formation1.removeStagiaire(Stagiare3);
Formation1.removeStagiaire(Stagiare4);


console.log(Formation1.getStagiaires());
console.log(Formation1.getNbrHours());
console.log(Formation1.getInitule());


console.log(Formation1.CalculerMoyenneFormation(Formation1.getStagiaires()));
console.log(Formation2.CalculerMoyenneFormation(Formation2.getStagiaires()));
console.log(Formation3.CalculerMoyenneFormation(Formation3.getStagiaires()));

console.log(Formation1.getIndexMax());
console.log(Formation2.getIndexMax());
console.log(Formation3.getIndexMax());
