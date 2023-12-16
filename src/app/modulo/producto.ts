export class Producto {
  private _id:number
  private _nombre:string
  private _descripcion:string
  private _tallas:string[] = ["xs", "s", "m", "l", "xl", "xl"]
  private _color:string
  private _precio:number
  private _foto:string

  constructor(id:number, nombre:string, descripcion:string, color:string, precio:number, foto:string){
    this._id = id
    this._nombre = nombre
    this._descripcion = descripcion
    this._color = color
    this._precio = precio
    this._foto = foto
  }

  public get id(){
    return this._id
  }

  public set id(id:number){
    this._id = id
  }

  public get nombre(){
    return this._nombre
  }

  public set nombre(nombre:string){
    this._nombre = nombre
  }

  public get descripcion(){
    return this._descripcion
  }

  public set descripcion(descripcion:string){
    this._descripcion = descripcion
  }

  public get color(){
    return this._color
  }

  public set color(color:string){
    this._color = color
  }

  public get precio(){
    return this._precio
  }

  public set precio(precio:number){
    this._precio = precio
  }

  public get foto(){
    return this._foto
  }

  public set foto(foto:string){
    this._foto = foto
  }
}
