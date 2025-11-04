import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tarjeta } from '../../../../models/tarjeta';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  templateUrl: './galeria.html',
  styleUrl: './galeria.css'
})

export class Galeria {
  public tarjetaInfo: Tarjeta[];

  constructor (){
    this.tarjetaInfo = [
      {
        id: "1G",
        img: "../../../assets/jerbo.jpg",
        alt: "jerbo",
        titulo: "Nombre: Dipodidae",
        descripcion: "Bichito tipo roedor coloquialmente llamado 'Jerbo'",
        anualPublicacion: 1200
      },

      {
        id: "2E",
        img: "../../../assets/chinchilla.jpg",
        alt: "chinchilla",
        titulo: "Nombre: Chinchilla",
        descripcion: "Animal de tipo roedor llamado Chinchilla",
        anualPublicacion: 2020
      },

      {
        id: "3N",
        img: "../../../assets/mara_argentina.jpg",
        alt: "Mara patagonica",
        titulo: "Nombre: Dolichotis patagonum",
        descripcion: "Animal patagonico llamado 'Mara'",
        anualPublicacion: 2011
      },

      {
        id: "3A",
        img: "../../../assets/jacob.jpg",
        alt: "jacob",
        titulo: "Nombre: Jacobo",
        descripcion: "Jacob",
        anualPublicacion: 1
      },
      
         {
        id: "3A",
        img: "../../../assets/jacob.jpg",
        alt: "jacob",
        titulo: "Nombre: Jacobo",
        descripcion: "Jacob",
        anualPublicacion: 1
      },

         {
        id: "3A",
        img: "../../../assets/jacob.jpg",
        alt: "jacob",
        titulo: "Nombre: Jacobo",
        descripcion: "Jacob",
        anualPublicacion: 1
      }
    ]
  }

  tarjetaSeleccionada: any = null;
  
  verMasInfo(tarjeta : any){
    this.tarjetaSeleccionada = tarjeta;
  }

}


