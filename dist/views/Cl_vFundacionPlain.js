const html = String.raw;
/*
   String.raw: Sirve para tomar el texto exactamente como lo escribes
    (sin interpretar caracteres especiales como \n, \t, etc.)
*/
export default class Cl_vFundacion {
    lblTotalDolares;
    lblTotalBolivares;
    lblMejorDonante;
    btNuevoDonante;
    tdDonantes;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoDonante = document.getElementById("body_btNuevoDonante");
        this.lblTotalDolares = document.getElementById("body_lblTotalDolares");
        this.lblTotalBolivares = document.getElementById("body_lblTotalBolivares");
        this.lblMejorDonante = document.getElementById("body_lblMejorDonante");
        this.tdDonantes = document.getElementById("body_tdDonantes");
    }
    onNuevoDonante(callback) {
        this.btNuevoDonante.onclick = callback;
    }
    mostrarDonantes({ donantes, totalDolares, totalBolivares, mejorDonador, }) {
        this.tdDonantes.innerHTML = "";
        donantes.forEach((donante) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
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
    }
    ;
}
//# sourceMappingURL=Cl_vFundacionPlain.js.map