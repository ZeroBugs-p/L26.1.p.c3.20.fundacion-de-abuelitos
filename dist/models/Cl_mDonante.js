export default class Cl_mDonante {
    _nombre;
    _dolares;
    _bolivares;
    constructor({ nombre, dolares, bolivares } = { nombre: "", dolares: 0, bolivares: 0 }) {
        this._nombre = nombre;
        this._dolares = dolares;
        this._bolivares = bolivares;
    }
    set nombre(nombre) {
        // Validar que el nombre sea una cadena de texto
        if (typeof nombre !== "string") {
            throw new Error("El nombre debe ser una cadena de texto");
        }
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set dolares(dolares) {
        // Validamos Los dólares para que no sea un Numero Negativo
        if (dolares < 0) {
            throw new Error("El monto en dólares no puede ser negativo");
        }
        this._dolares = +dolares;
    }
    get dolares() {
        return this._dolares;
    }
    set bolivares(bolivares) {
        // Validamos Los Bolivares para que no sea un Numero Negativo
        if (bolivares < 0) {
            throw new Error("El monto en bolívares no puede ser negativo");
        }
        this._bolivares = +bolivares;
    }
    get bolivares() {
        return this._bolivares;
    }
    get tasa() {
        return 40;
    }
    montoDolares() {
        return this.dolares + (this.bolivares / this.tasa);
    }
    montoBolivares() {
        return this.bolivares + (this.dolares * this.tasa);
    }
}
//# sourceMappingURL=Cl_mDonante.js.map