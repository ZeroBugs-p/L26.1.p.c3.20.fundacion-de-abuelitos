/**
 * LOS ESTUDIANTES
 * Se desea conocer la nota promedio de los donantes de un curso.
 * Se conoce de cada donante: nombre, cedula, nota1, nota2 y nota3.
 * La nota de un donante es la suma de sus 3 notas.
 * La nota promedio es el promedio de las notas de todos los donantes.
 *
 * Considere que la clase donante hereda de una clase persona
 * con los atributos: nombre, cedula
 */
import Cl_mFundacion from "../models/Cl_mFundacion.js";
export default class Cl_cFundacion {
    mFundacion = new Cl_mFundacion();
    vFundacion;
    cDonante;
    // Recibe la vista de la bodega y el controlador del donante ya armado
    constructor(vistaFundacion, controladorDonante) {
        this.vFundacion = vistaFundacion;
        this.cDonante = controladorDonante;
        this.vFundacion.onNuevoDonante(() => this.procesar1Donante());
    }
    procesar1Donante() {
        this.cDonante.solicitarDonante((donante) => {
            if (donante !== null) {
                this.mFundacion.agregarDonante(donante);
                this.vFundacion.mostrarDonantes({
                    donantes: this.mFundacion.donantes,
                    promedio: this.mFundacion.notaPromedio(),
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cFundacion.js.map