import { Injectable } from '@angular/core';
import { Carrito } from '../modulo/carrito';
import { ProductoService } from './producto.service';
import { Item } from '../modulo/item';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
 private _carrito:Carrito
  private _productos:any = new ProductoService()
  constructor(carrito:Carrito) {
    this._carrito = carrito
  }

  getCarrito():Carrito{
    return this._carrito
  }

  añadir(id:number){
    for(let i = 0; i <= this._carrito.items.length; i++){
      if(this._carrito.items[i].porducto.id = i){
        this._carrito.items[i].cantidad = this._carrito.items[1].cantidad + 1
      }

      else{
        this._carrito.añadir(new Item(this._productos.getProducto(id)))
      }
    }
  }
}
