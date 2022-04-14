"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Formation = void 0;
class Formation {
    constructor(initule, nbrHours, stagiaires) {
        this.initule = initule;
        this.nbrHours = nbrHours;
        this.stagiaires = stagiaires;
        this.CalculerMoyenneFormation = (array) => {
            let somme = 0;
            for (let i = 0; i < this.stagiaires.length; i++) {
                somme += this.stagiaires[i].CalculerMoyenne();
            }
            return somme / this.stagiaires.length;
        };
        this.getIndexMax = () => {
            let max = this.stagiaires[0].trouverMax();
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].trouverMax() > max) {
                    max = this.stagiaires[i].trouverMax();
                }
            }
            return max;
        };
        this.getIndexMin = () => {
            let min = this.stagiaires[0].trouverMin();
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].trouverMin() < min) {
                    min = this.stagiaires[i].trouverMin();
                }
            }
            return min;
        };
        this.afficherNomMax = () => {
            let max = this.stagiaires[0].trouverMax();
            let nom = this.stagiaires[0].getNom();
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].trouverMax() > max) {
                    max = this.stagiaires[i].trouverMax();
                    nom = this.stagiaires[i].getNom();
                }
            }
            return nom;
        };
        this.afficherNomMin = () => {
            let min = this.stagiaires[0].trouverMin();
            let nom = this.stagiaires[0].getNom();
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].trouverMin() < min) {
                    min = this.stagiaires[i].trouverMin();
                    nom = this.stagiaires[i].getNom();
                }
            }
            return nom;
        };
        this.afficherMinMax = () => {
            let min = this.stagiaires[0].trouverMin();
            let max = this.stagiaires[0].trouverMax();
            let nom = this.stagiaires[0].getNom();
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].trouverMin() < min) {
                    min = this.stagiaires[i].trouverMin();
                    nom = this.stagiaires[i].getNom();
                }
            }
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].trouverMax() > max) {
                    max = this.stagiaires[i].trouverMax();
                    nom = this.stagiaires[i].getNom();
                }
            }
            return nom;
        };
        this.trouverMoyenneParNom = (nom) => {
            let moyenne = 0;
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].getNom() === nom) {
                    moyenne = this.stagiaires[i].CalculerMoyenne();
                }
            }
            return moyenne;
        };
    }
    getInitule() {
        return this.initule;
    }
    getNbrHours() {
        return this.nbrHours;
    }
    getStagiaires() {
        return this.stagiaires;
    }
    setInitule(initule) {
        this.initule = initule;
    }
    setNbrHours(nbrHours) {
        this.nbrHours = nbrHours;
    }
    setStagiaires(stagiaires) {
        this.stagiaires = stagiaires;
    }
    addStagiaire(stagiaire) {
        this.stagiaires.push(stagiaire);
    }
    removeStagiaire(stagiaire) {
        let index = this.stagiaires.indexOf(stagiaire);
        if (index > -1) {
            this.stagiaires.splice(index, 1);
        }
    }
}
exports.Formation = Formation;
