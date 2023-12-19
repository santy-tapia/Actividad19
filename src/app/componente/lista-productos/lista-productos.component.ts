import { Producto } from './../../modulo/producto';
import { Component } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { ProductoComponent } from '../producto/producto.component';
@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent {
  public productos:Producto[];
  constructor(private servicio:ProductoService) {
    const url:string='https://randomuser.me/api/portraits';
    this.productos = servicio.getProductos();
  }
}
