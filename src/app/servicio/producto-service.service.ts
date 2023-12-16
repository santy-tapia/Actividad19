import { Producto } from './../modulo/producto';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductoServiceService {
  private _productos:Producto[] = [
    new Producto(1, "Camiseta 1", "camiseta sencilla", "rojo", 10.55, "camiseta.jpg")
  ]
  constructor() { }

  public getProductos():Producto[]{
    return this._productos
  }

   public getProducto(id: number): Producto | undefined {
    // Buscar el producto por id
    return this._productos.find(producto => producto.id === id);
  }
}
