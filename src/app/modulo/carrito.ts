import { Producto } from './producto';
import { Item } from "./item";

export class Carrito {
  private _items:Item[] = []

  public get items(){
    return this._items
  }

  public set items(items:Item[]){
    this._items = items
  }

  public getTotal():number {
    let total = 0;

    for (let i = 0; i <= this._items.length; i++) {
      if (this._items.hasOwnProperty(i)) {
        const producto = this._items[i].producto;
        const precio = this._items[i].producto.precio;

        if (producto && precio) {
          total += producto.precio;
        }
      }
    }
    return total;
  }

  public añadir(item:Item){
    this._items.push(item)
  }

  public eliminar(item:Item){
    for(let i = 0; i <= this._items.length; i++){
      if (this._items.hasOwnProperty(i)) {
        if(this._items[i] === item){
          this._items.splice(i, 1)
        }
      }
    }
  }
}
