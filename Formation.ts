import {Stagiaire} from './Stagiaire';

export class Formation {
    constructor(private initule: string,private nbrHours: number, private stagiaires: Stagiaire[]) {
    }

    public getInitule(): string {
        return this.initule;
    }

    public getNbrHours(): number {
        return this.nbrHours;
    }

    public getStagiaires(): Stagiaire[] {
        return this.stagiaires;
    }

    public setInitule(initule: string): void {
        this.initule = initule;
    }

    public setNbrHours(nbrHours: number): void {
        this.nbrHours = nbrHours;
    }

    public setStagiaires(stagiaires: Stagiaire[]): void {
        this.stagiaires = stagiaires;
    }

    public addStagiaire(stagiaire: Stagiaire): void {
        this.stagiaires.push(stagiaire);
    }

    public removeStagiaire(stagiaire: Stagiaire): void {
        let index: number = this.stagiaires.indexOf(stagiaire);
        if (index > -1) {

            this.stagiaires.splice(index, 1);
        }
}

    public CalculerMoyenneFormation = (array: Stagiaire[]): number => {
        let somme: number = 0;
        for (let i = 0; i < this.stagiaires.length; i++) {
            somme += this.stagiaires[i].CalculerMoyenne();
        }
        return somme / this.stagiaires.length;
    }

    public getIndexMax = (): number => {
        let max: number = this.stagiaires[0].trouverMax();
        for (let i = 0; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].trouverMax() > max) {
                max = this.stagiaires[i].trouverMax();
            }
        }
        return max;
    }

    public getIndexMin = (): number => {

        let min: number = this.stagiaires[0].trouverMin();
        for (let i = 0; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].trouverMin() < min) {
                min = this.stagiaires[i].trouverMin();
            }
        }
        return min;
}

public afficherNomMax = (): string => {
    let max: number = this.stagiaires[0].trouverMax();
    let nom: string = this.stagiaires[0].getNom();
    for (let i = 0; i < this.stagiaires.length; i++) {
        if (this.stagiaires[i].trouverMax() > max) {
            max = this.stagiaires[i].trouverMax();
            nom = this.stagiaires[i].getNom();
        }
    }
    return nom;
}

    public afficherNomMin = (): string => {
        let min: number = this.stagiaires[0].trouverMin();
        let nom: string = this.stagiaires[0].getNom();
        for (let i = 0; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].trouverMin() < min) {
                min = this.stagiaires[i].trouverMin();
                nom = this.stagiaires[i].getNom();
            }}
        return nom;

    }

    public afficherMinMax = (): string => {
        let min: number = this.stagiaires[0].trouverMin();
        let max: number = this.stagiaires[0].trouverMax();
        let nom: string = this.stagiaires[0].getNom();
        for (let i = 0; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].trouverMin() < min) {
                min = this.stagiaires[i].trouverMin();
                nom = this.stagiaires[i].getNom();
            }}
        for (let i = 0; i < this.stagiaires.length; i++) {
            if (this.stagiaires[i].trouverMax() > max) {
                max = this.stagiaires[i].trouverMax();
                nom = this.stagiaires[i].getNom();
            }}
            return nom;
        }

        public trouverMoyenneParNom = (nom: string): number => {
            let moyenne: number = 0;
            for (let i = 0; i < this.stagiaires.length; i++) {
                if (this.stagiaires[i].getNom() === nom) {
                    moyenne = this.stagiaires[i].CalculerMoyenne();
                }
            }
            return moyenne;
        }

}