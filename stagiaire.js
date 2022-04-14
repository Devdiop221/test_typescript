"use strict";
exports.__esModule = true;
exports.Stagiaire = void 0;
var Stagiaire = /** @class */ (function () {
    function Stagiaire(nom, notes) {
        var _this = this;
        this.nom = nom;
        this.notes = notes;
        this.CalculerMoyenne = function () {
            var somme = 0;
            for (var i = 0; i < _this.notes.length; i++) {
                somme += _this.notes[i];
            }
            return somme / _this.notes.length;
        };
        this.trouverMax = function () {
            var max = _this.notes[0];
            for (var i = 0; i < _this.notes.length; i++) {
                if (_this.notes[i] > max) {
                    max = _this.notes[i];
                }
            }
            return max;
        };
        this.trouverMin = function () {
            var min = _this.notes[0];
            for (var i = 0; i < _this.notes.length; i++) {
                if (_this.notes[i] < min) {
                    min = _this.notes[i];
                }
            }
            return min;
        };
    }
    Stagiaire.prototype.getNotes = function () {
        return this.notes;
    };
    Stagiaire.prototype.getNom = function () {
        return this.nom;
    };
    Stagiaire.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Stagiaire.prototype.setNotes = function (notes) {
        this.notes = notes;
    };
    return Stagiaire;
}());
exports.Stagiaire = Stagiaire;
