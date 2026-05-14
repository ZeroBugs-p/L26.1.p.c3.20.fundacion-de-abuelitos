import Cl_mDonante from "../models/Cl_mDonante.js";
export default class Cl_cDonante {
    vista;
    callback;
    constructor(vista) {
        this.vista = vista;
        // El controlador se suscribe a los eventos de la interfaz
        this.vista.onCancelar(() => this.btCancelarOnClick());
        this.vista.onAceptar(() => this.btAceptarOnClick());
    }
    // Método para que la Curso llame a este controlador
    solicitarDonante(callback) {
        this.callback = callback;
        this.vista.mostrar();
    }
    btCancelarOnClick() {
        this.callback(null);
        this.vista.ocultar();
    }
    btAceptarOnClick() {
        this.callback(new Cl_mDonante({
            nombre: this.vista.nombre,
            cedula: this.vista.cedula,
            nota1: this.vista.nota1,
            nota2: this.vista.nota2,
            nota3: this.vista.nota3,
        }));
        this.vista.ocultar();
    }
}
//# sourceMappingURL=Cl_cDonante.js.map