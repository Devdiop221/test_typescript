"use strict";
exports.__esModule = true;
exports.Formation = void 0;
var Formation = /** @class */ (function () {
    function Formation(initule, nbrHours, stagiaires) {
        var _this = this;
        this.initule = initule;
        this.nbrHours = nbrHours;
        this.stagiaires = stagiaires;
        this.CalculerMoyenneFormation = function (stagiaires) {
            var somme = 0;
            for (var i = 0; i < _this.stagiaires.length; i++) {
                somme += _this.stagiaires[i].CalculerMoyenne();
            }
            return somme / _this.stagiaires.length;
        };
        this.getIndexMax = function () {
            var max = _this.stagiaires[0].trouverMax();
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].trouverMax() > max) {
                    max = _this.stagiaires[i].trouverMax();
                }
            }
            return max;
        };
        this.getIndexMin = function () {
            var min = _this.stagiaires[0].trouverMin();
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].trouverMin() < min) {
                    min = _this.stagiaires[i].trouverMin();
                }
            }
            return min;
        };
        this.afficherNomMax = function () {
            var max = _this.stagiaires[0].trouverMax();
            var nom = _this.stagiaires[0].getNom();
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].trouverMax() > max) {
                    max = _this.stagiaires[i].trouverMax();
                    nom = _this.stagiaires[i].getNom();
                }
            }
            return nom;
        };
        this.afficherNomMin = function () {
            var min = _this.stagiaires[0].trouverMin();
            var nom = _this.stagiaires[0].getNom();
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].trouverMin() < min) {
                    min = _this.stagiaires[i].trouverMin();
                    nom = _this.stagiaires[i].getNom();
                }
            }
            return nom;
        };
        this.afficherMinMax = function () {
            var min = _this.stagiaires[0].trouverMin();
            var max = _this.stagiaires[0].trouverMax();
            var nom = _this.stagiaires[0].getNom();
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].trouverMin() < min) {
                    min = _this.stagiaires[i].trouverMin();
                    nom = _this.stagiaires[i].getNom();
                }
            }
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].trouverMax() > max) {
                    max = _this.stagiaires[i].trouverMax();
                    nom = _this.stagiaires[i].getNom();
                }
            }
            return nom;
        };
        this.trouverMoyenneParNom = function (nom) {
            var moyenne = 0;
            for (var i = 0; i < _this.stagiaires.length; i++) {
                if (_this.stagiaires[i].getNom() === nom) {
                    moyenne = _this.stagiaires[i].CalculerMoyenne();
                }
            }
            return moyenne;
        };
    }
    Formation.prototype.getInitule = function () {
        return this.initule;
    };
    Formation.prototype.getNbrHours = function () {
        return this.nbrHours;
    };
    Formation.prototype.getStagiaires = function () {
        return this.stagiaires;
    };
    Formation.prototype.setInitule = function (initule) {
        this.initule = initule;
    };
    Formation.prototype.setNbrHours = function (nbrHours) {
        this.nbrHours = nbrHours;
    };
    Formation.prototype.setStagiaires = function (stagiaires) {
        this.stagiaires = stagiaires;
    };
    Formation.prototype.addStagiaire = function (stagiaire) {
        this.stagiaires.push(stagiaire);
    };
    Formation.prototype.removeStagiaire = function (stagiaire) {
        var index = this.stagiaires.indexOf(stagiaire);
        if (index > -1) {
            this.stagiaires.splice(index, 1);
        }
    };
    return Formation;
}());
exports.Formation = Formation;
