export class Proyecto {
    id?: number;
    nomPro: string;
    descPro: string;
    linkPro: string;
    fotoPro: string;  
    
    constructor(nomPro: string, descPro: string, linkPro: string, fotoPro: string){
        this.nomPro = nomPro;
        this.descPro = descPro;
        this.linkPro = linkPro;
        this.fotoPro = fotoPro;
    }

}
