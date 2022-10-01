export class Experiencia {
    id? : number;
    nomExp : string;
    descripcionExp : string;

    constructor (nomExp: string, descripcionExp: string){
        this.nomExp = nomExp;
        this.descripcionExp = descripcionExp;
    }
}
