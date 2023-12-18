import { Injectable } from '@angular/core';
import { Producto } from '../modulo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private _productos:Producto[] = [
    new Producto(1, "Camiseta 1", "camiseta sencilla", "rojo", 10.55, "camiseta.jpg")
  ]
  constructor() { }

  public getProductos():Producto[]{
    return this._productos
  }

   public getProducto(id: number): Producto | undefined {
    return this._productos.find(producto => producto.id === id);
  }

 buscarProductos(texto: string): Producto[] {
    texto = texto.toLowerCase();
    return this._productos.filter(producto => producto.nombre.toLowerCase().includes(texto));
  }
}
