export class Educacion {
    id? : number;
    nomEdu : string;
    instEdu : string;
    aniosEdu: string;
    descEdu : string;

    constructor ( nomEdu: string, instEdu : string, aniosEdu: string, descEdu: string ){
        this.nomEdu = nomEdu;
        this.instEdu = instEdu;
        this.aniosEdu = aniosEdu;
        this.descEdu = descEdu;
    }
}
