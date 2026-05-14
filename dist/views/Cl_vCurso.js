const html = String.raw;
export default class Cl_vFundacion {
    lblTotalDolares;
    btNuevoDonante;
    tdDonantes;
    vista;
    constructor() {
        this.vista = document.getElementById("body");
        this.btNuevoDonante = document.getElementById("body_btNuevoDonante");
        this.lblTotalDolares = document.getElementById("body_lblTotalDolares");
        this.tdDonantes = document.getElementById("body_tdDonantes");
    }
    onNuevoDonante(callback) {
        this.btNuevoDonante.onclick = callback;
    }
    mostrarDonantes({ donantes, }) {
        this.tdDonantes.innerHTML = "";
        donantes.forEach((donante) => {
            const tr = document.createElement("tr");
            tr.innerHTML = html `
        <td>${donante.cedula}</td>
        <td>${donante.nombre}</td>
        <td>${donante.nota1}</td>
        <td>${donante.nota2}</td>
        <td>${donante.nota3}</td>
        <td>${donante.nota}</td>
      `;
            this.tdDonantes.appendChild(tr);
        });
        //this.lblTotalDolares.innerHTML = promedio.toFixed(2);
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
//# sourceMappingURL=Cl_vFundacion.js.map