import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { NewProducts } from './pages/products/secciones/new-products/new-products';

export const routes: Routes = [
    { path: "", component: Home },
    { path: "home", component: Home },
    {path: "new-products", component: NewProducts}
];
