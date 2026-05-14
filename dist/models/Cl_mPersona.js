export default class Cl_mPersona {
    _nombre = "";
    _cedula = 0;
    constructor({ nombre, cedula }) {
        this.nombre = nombre;
        this.cedula = cedula;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }
    get cedula() {
        return this._cedula;
    }
    set cedula(value) {
        this._cedula = value;
    }
}
//# sourceMappingURL=Cl_mPersona.js.map