import { Component } from '@angular/core';
import { NewProduct } from '../../../models/new-product';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

/*
  formcontrol = controlador de cada dato ingresado
  formgroup = dorectiva para formularios reactivos en angular, agrupa cada formcontrol
  reactiveformModules = permite usar formularios reactivos
  validators = Valida cada dato que ingreses
*/

@Component({
  selector: 'app-new-products',
  imports: [],
  templateUrl: './new-products.html',
  styleUrl: './new-products.css',
})
export class NewProducts {

}
