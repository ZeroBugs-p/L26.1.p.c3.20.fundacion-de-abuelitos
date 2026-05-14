import { I_vDonante } from "../interfaces/I_vDonante.js";
import Cl_mDonante from "../models/Cl_mDonante.js";

export default class Cl_cDonante {
  private vista: I_vDonante;
  private callback!: (donante: Cl_mDonante | null) => void;
  constructor(vista: I_vDonante) {
    this.vista = vista;
    // El Controlador Realiza los Eventos de la Interfaz
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }
// Metodo para que El Fundacion llame a este Controlador
  solicitarDonante(callback: (donante: Cl_mDonante | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }
  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }
  private btAceptarOnClick() {
    this.callback(new Cl_mDonante({
        nombre: this.vista.nombre,
        dolares: this.vista.dolares,
        bolivares: this.vista.bolivares
      }));
    this.vista.ocultar();
  }
}
