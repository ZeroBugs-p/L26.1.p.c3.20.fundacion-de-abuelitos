export default class Cl_mFundacion {
    donantes = [];
    agregarDonante(donante) {
        this.donantes.push(donante);
    }
    notaPromedio() {
        let total = 0;
        this.donantes.forEach((donante) => (total += donante.nota));
        return total / this.donantes.length;
    }
}
//# sourceMappingURL=Cl_mFundacion.js.map