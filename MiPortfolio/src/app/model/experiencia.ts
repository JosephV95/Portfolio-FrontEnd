export class Experiencia {
    id? : number;
    nomExp : string;
    aniosExp : string;
    descripcionExp : string;

    constructor ( nomExp: string,aniosExp: string, descripcionExp: string ){
        // this.id = id;
        this.nomExp = nomExp;
        this.aniosExp = aniosExp;
        this.descripcionExp = descripcionExp;
    }
    
}
