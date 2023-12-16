import { Producto } from "./producto";

export class Item {
  private _producto:Producto
  private _cantidad:number = 0

  constructor(producto:Producto){
    this._producto = producto
  }

  public get porducto(){
    return this._producto
  }

  public set producto(producto:Producto){
    this._producto = producto
  }

  public get cantidad(){
    return this._cantidad
  }

  public set cantidad(cantidad:number){
    this._cantidad = cantidad
  }
}
