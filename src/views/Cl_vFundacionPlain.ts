import { I_vFundacion } from "../interfaces/I_vFundacion";
import Cl_mDonante from "../models/Cl_mDonante";

const html = String.raw;
/* 
   String.raw: Sirve para tomar el texto exactamente como lo escribes 
    (sin interpretar caracteres especiales como \n, \t, etc.) 
*/

export default class Cl_vFundacion implements I_vFundacion {
 private lblTotalDolares: HTMLElement;
 private lblTotalBolivares: HTMLElement;
 private lblMejorDonante: HTMLElement;
 private btNuevoDonante: HTMLButtonElement;
 private tdDonantes: HTMLTableElement;
 private vista: HTMLElement | null;
  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoDonante = document.getElementById("body_btNuevoDonante") as HTMLButtonElement;
    this.lblTotalDolares = document.getElementById("body_lblTotalDolares") as HTMLElement
    this.lblTotalBolivares = document.getElementById("body_lblTotalBolivares") as HTMLElement
    this.lblMejorDonante = document.getElementById("body_lblMejorDonante") as HTMLElement
    this.tdDonantes = document.getElementById("body_tdDonantes") as HTMLTableElement;
  }
  onNuevoDonante(callback: () => void): void {
    this.btNuevoDonante.onclick = callback;
  }
  mostrarDonantes({
    donantes,
    totalDolares,
    totalBolivares,
    mejorDonador,
  }: {
    donantes: Cl_mDonante[];
    totalDolares: number;
    totalBolivares: number;
    mejorDonador: string;
  }): void {
    this.tdDonantes.innerHTML = "";
    donantes.forEach((donante) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${donante.nombre}</td>
        <td> $. ${donante.dolares}</td>
        <td> Bs. ${donante.bolivares}</td>
        <td> $. ${donante.montoDolares().toFixed(2)}</td>
        <td> Bs. ${donante.montoDolares().toFixed(2)}</td>
      `;
      this.tdDonantes.appendChild(tr);
    });
    this.lblTotalDolares.innerHTML = totalDolares.toString();
        this.lblTotalBolivares.innerHTML = totalBolivares.toString();
        this.lblMejorDonante.innerHTML = mejorDonador;
  };
}
