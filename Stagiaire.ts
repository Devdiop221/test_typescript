export class Stagiaire {
  constructor(private nom: string, private notes: number[]) {}

  public getNotes(): number[] {
    return this.notes;
  }

  public getNom(): string {
    return this.nom;
  }

  public setNom(nom: string): void {
    this.nom = nom;
  }

  public setNotes(notes: number[]): void {
    this.notes = notes;
  }

  public CalculerMoyenne = (): number => {
    let somme: number = 0;
    for (let i = 0; i < this.notes.length; i++) {
      somme += this.notes[i];
    }
    return somme / this.notes.length;
  };

  public trouverMax = (): number => {
    let max: number = this.notes[0];
    for (let i = 0; i < this.notes.length; i++) {
      if (this.notes[i] > max) {
        max = this.notes[i];
      }
    }
    return max;
  };

  public trouverMin = (): number => {
    let min: number = this.notes[0];
    for (let i = 0; i < this.notes.length; i++) {
        if (this.notes[i] < min) {
            min = this.notes[i];
            }
        }
    return min;
  }

}
