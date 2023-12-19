import { Routes } from '@angular/router';
import { ListaProductosComponent } from './componente/lista-productos/lista-productos.component';
import { CarritoComponent } from './componente/carrito/carrito.component';
import { ProductoComponent } from './componente/producto/producto.component';

export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'productos/:id', component: ProductoComponent},
  { path: '**', redirectTo:'productos' },
];
