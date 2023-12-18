import { Component } from '@angular/core';
import { ProductoService } from '../../servicio/producto.service';
import { CarritoService } from '../../servicio/carrito.service';
import { Carrito } from '../../modulo/carrito';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  public _productoservice:ProductoService = new ProductoService()
  public _carritoservice:CarritoService = new CarritoService(new Carrito())
}
