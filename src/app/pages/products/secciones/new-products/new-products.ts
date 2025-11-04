import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewProduct } from '../../../../models/productos';

/*
  formcontrol = controlador de cada dato ingresado
  formgroup = directiva para formularios reactivos en angular, agrupa cada formcontrol
  reactiveformModules = permite usar formularios reactivos
  validators = Valida cada dato que ingreses
*/

@Component({
  selector: 'app-new-products',
  imports: [ReactiveFormsModule],
  templateUrl: './new-products.html',
  styleUrl: './new-products.css',
})
export class NewProducts {
  private contadorId = 1;
  
  coleccionProducto: NewProduct[] = [] 

  //instancia que se vincula con el formulario html
  nuevoProducto = new FormGroup ({
    nombre: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    precio: new FormControl(null, Validators.required),
    img: new FormControl(''),
    alt: new FormControl('')
  });

  /**
   * @description Metodo de creacion de productos segun interfaz "Producto"
   */
  crearProducto(): void {
    if(this.nuevoProducto.valid){
      const nuevoProducto: NewProduct={
        // id le asignamos un contador para que autoescale
        id: this.contadorId++,
        /*  
          resto de propiedades les asignamos desde el form el valor que recibe 
          desde su casilla o formControlName
        */
        nombre: this.nuevoProducto.value.nombre!,
        descripcion: this.nuevoProducto.value.descripcion!,
        precio: this.nuevoProducto.value.precio!
      }
      this.coleccionProducto.push(nuevoProducto)
      console.log(`Producto agregado: `, nuevoProducto);
      console.log(`Coleccion actual de productos`, this.coleccionProducto);

      //reseteamos el formulario
      this.nuevoProducto.reset()
    }
  }
}
