import Cl_mDonante from "../models/Cl_mDonante";

// src/interfaces/I_vFundacion.ts
export interface I_vFundacion {
  // En lugar de exponer el botón HTML, exponemos una acción
  onNuevoDonante(callback: () => void): void;
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
  }): void;
}
