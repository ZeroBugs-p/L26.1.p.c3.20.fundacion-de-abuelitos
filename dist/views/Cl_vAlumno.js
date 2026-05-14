export default class Cl_vDonantePlain {
    inNombre;
    btCancelar;
    btAceptar;
    vista;
    inCedula;
    inDolares;
    inBolivares;
    inNota3;
    constructor() {
        this.vista = document.getElementById("donante");
        this.inNombre = document.getElementById("donante_inNombre");
        this.inCedula = document.getElementById("donante_inCedula");
        this.inDolares = document.getElementById("donante_inDolares");
        this.inBolivares = document.getElementById("donante_inBolivares");
        this.inNota3 = document.getElementById("donante_inNota3");
        this.btCancelar = document.getElementById("donante_btCancelar");
        this.btAceptar = document.getElementById("donante_btAceptar");
    }
    get nombre() {
        return this.inNombre.value.trim();
    }
    get cedula() {
        return this.inCedula ? +this.inCedula.value : 0;
    }
    get nota1() {
        return this.inDolares ? +this.inDolares.value : 0;
    }
    get nota2() {
        return this.inBolivares ? +this.inBolivares.value : 0;
    }
    get nota3() {
        return this.inNota3 ? +this.inNota3.value : 0;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vdonante.js.map