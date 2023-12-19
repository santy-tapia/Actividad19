import { Component, Input } from '@angular/core';
import { Producto } from '../../modulo/producto';
import { ActivatedRoute, RouterLink } from '@angular/router';
@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() public producto:Producto = new Producto(1,'Camiseta basica', 'camiseta blanca basica', 'blanco', 7.55, '')
}
