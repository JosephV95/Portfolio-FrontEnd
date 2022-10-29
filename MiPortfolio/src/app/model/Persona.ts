export class Persona {
    //el id? es para indicar que id no es necesario//
    id?: number;
    nombre: string;
    apellido: string;
    titulo: string;
    foto_url: string;
    fondo_url: string;
    sobre_mi: string;
    

    constructor(nombre: string, apellido: string, titulo: string, foto_url: string,fondo_url: string, sobre_mi: string ){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.titulo = titulo;
        this.foto_url = foto_url;
        this.fondo_url = fondo_url;
        this.sobre_mi = sobre_mi;
        
    }
}