export class persona {
    //el id? es para indicar que id no es necesario//
    id?: number;
    nombre: string;
    apellido: string;
    email: string;
    foto_url: string;
    sobre_mi: string;
    titulo: string;


    constructor(nombre: string, apellido: string, email: string, foto_url: string, sobre_mi: string, titulo: string){
        
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.foto_url = foto_url;
        this.sobre_mi = sobre_mi;
        this.titulo = titulo;
    }
}