import Cl_mPersona from "./Cl_mPersona.js";
export default class Cl_mDonante extends Cl_mPersona {
    _nota1 = 0;
    _nota2 = 0;
    _nota3 = 0;
    constructor({ nombre, cedula, nota1, nota2, nota3, }) {
        super({ nombre, cedula });
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
    set nota1(nota1) {
        this._nota1 = +nota1;
    }
    get nota1() {
        return this._nota1;
    }
    set nota2(nota2) {
        this._nota2 = +nota2;
    }
    get nota2() {
        return this._nota2;
    }
    set nota3(nota3) {
        this._nota3 = +nota3;
    }
    get nota3() {
        return this._nota3;
    }
    get nota() {
        return this.nota1 + this.nota2 + this.nota3;
    }
}
//# sourceMappingURL=Cl_mDonante.js.map