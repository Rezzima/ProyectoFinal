export interface NewProduct {
    id: number; //ID tipo number para autoincrementar
    nombre: string;
    precio: number;
    descripcion: string;
    img?: string; //el signo indica que no es estrictamente necesario
    alt?: string; 
}
