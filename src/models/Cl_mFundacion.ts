import Cl_mDonante from "./Cl_mDonante.js";

export default class Cl_mFundacion {
  public donantes: Cl_mDonante[] = [];

  agregarDonante(donante: Cl_mDonante) {
    this.donantes.push(donante);
  }

  totalDolares(): number{
    let total = 0;

    this.donantes.forEach(donante => {
      total += donante.montoDolares();
    });
    return total;
  }
  totalBolivares(): number{
    let total = 0;

    this.donantes.forEach(donante => {
      total += donante.montoBolivares();
    });
    return total;
  }
  mejorDonador(): string{
    //Colocaremos una validacion para cuando no haya donantes
    if(this.donantes.length === 0) return "No hay Donantes";

    //se tendra que inicializar el mejor donante y su aporte desde el primer donante de la lista
    let mejorDonante = this.donantes[0].nombre;
    let mejorAporte = this.donantes[0].montoDolares();

    //utilizando forEach recorremos la lista para encontrar al que haya tenido un mayor aporte
    this.donantes.forEach(donante => {
      const aporteActual = donante.montoDolares();
      if(aporteActual > mejorAporte){
        mejorAporte = aporteActual;
        mejorDonante = donante.nombre;
      }
    });
    return mejorDonante;
  }
}
