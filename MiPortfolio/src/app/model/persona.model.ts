export class persona {
    //el id? es para indicar que id no es necesario//
    id?: number;
    nombre: string;
    apellido: string;
    foto_url: string;

    constructor(nombre: string, apellido: string, foto_url: string){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.foto_url = foto_url;
    }
}