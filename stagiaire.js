"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stagiaire = void 0;
class Stagiaire {
    constructor(nom, notes) {
        this.nom = nom;
        this.notes = notes;
        this.CalculerMoyenne = () => {
            let somme = 0;
            for (let i = 0; i < this.notes.length; i++) {
                somme += this.notes[i];
            }
            return somme / this.notes.length;
        };
        this.trouverMax = () => {
            let max = this.notes[0];
            for (let i = 0; i < this.notes.length; i++) {
                if (this.notes[i] > max) {
                    max = this.notes[i];
                }
            }
            return max;
        };
        this.trouverMin = () => {
            let min = this.notes[0];
            for (let i = 0; i < this.notes.length; i++) {
                if (this.notes[i] < min) {
                    min = this.notes[i];
                }
            }
            return min;
        };
    }
    getNotes() {
        return this.notes;
    }
    getNom() {
        return this.nom;
    }
    setNom(nom) {
        this.nom = nom;
    }
    setNotes(notes) {
        this.notes = notes;
    }
}
exports.Stagiaire = Stagiaire;
