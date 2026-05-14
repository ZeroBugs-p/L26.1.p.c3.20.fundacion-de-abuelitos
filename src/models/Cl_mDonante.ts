export default class Cl_mDonante {
  private _nombre: string;
  private _dolares: number;
  private _bolivares: number;

  constructor({nombre, dolares, bolivares}:
        {nombre: string, dolares: number, bolivares: number} =
        {nombre: "", dolares: 0, bolivares: 0}) {

        this._nombre = nombre;
        this._dolares = dolares;
        this._bolivares = bolivares;
    }   

  set nombre(nombre: string) {
    // Validar que el nombre sea una cadena de texto
    if(typeof nombre !== "string"){   
      throw new Error("El nombre debe ser una cadena de texto"); }

        this._nombre = nombre;
  }
  get nombre(): string {
    return this._nombre;
  }
  set dolares(dolares: number) {
    // Validamos Los dólares para que no sea un Numero Negativo
    if (dolares < 0) {
      throw new Error("El monto en dólares no puede ser negativo");    }

        this._dolares = +dolares;
  }
  get dolares(): number {
    return this._dolares;
  }
  set bolivares(bolivares: number) {
    // Validamos Los Bolivares para que no sea un Numero Negativo
    if (bolivares < 0) {
      throw new Error("El monto en bolívares no puede ser negativo");    }

        this._bolivares = +bolivares;
  }
  get bolivares(): number {
    return this._bolivares;
  }
  get tasa(): number{
    return 40
  }
  montoDolares(): number {
    return this.dolares + (this.bolivares/this.tasa);
  }
  montoBolivares(): number{
    return this.bolivares + (this.dolares * this.tasa)
  }
}
