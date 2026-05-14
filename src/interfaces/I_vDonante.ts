export interface I_vDonante {
  get nombre(): string;
  get dolares(): number;
  get bolivares(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}
