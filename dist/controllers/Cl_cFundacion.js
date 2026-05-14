/*
    20. FUNDACIÓN VIEJITOS

        La Fundación Viejitos tiene cierta cantidad de dólares y bolívares, y también se sabe la tasa
    de cambio. Los donantes traen dólares y bolívares. Se desea saber cuánto total aporta cada
    uno, en dólares y bolívares, y también cuánto es el total final en dólares y bolívares, y quién fue
    el mejor donador.

        Si tomamos una tasa de cambio de Bs.40 por dólar, y los donantes fuesen Sofía con $10 y
    Bs.80, Mateo con Bs.600, Elena con $50, y David con $20 y Bs.100, entonces tendríamos el
    siguiente resultado:

        Donante     Dólares Aportados     Bolívares Aportados     Total en Dólares     Total en Bolívares
        Sofía       $10                 Bs.80                   $12.5               Bs.500
        Mateo       $0                  Bs.600                  $15                 Bs.600
        Elena       $50                 Bs.0                    $50                 Bs.0
        David       $20                 Bs.100                  $22.5               Bs.200

    Reporte Totales Varios: Total en Dólares: $100, Total en Bolívares: Bs.700, Mejor Donante: Elena.
*/
import Cl_mFundacion from "../models/Cl_mFundacion.js";
export default class Cl_cFundacion {
    mFundacion = new Cl_mFundacion();
    vFundacion;
    cDonante;
    // Recibe la vista de la Fundacion y el controlador del Donante ya armado
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
                    totalDolares: this.mFundacion.totalDolares(),
                    totalBolivares: this.mFundacion.totalBolivares(),
                    mejorDonador: this.mFundacion.mejorDonador(),
                });
            }
        });
    }
}
//# sourceMappingURL=Cl_cFundacion.js.map