export default class Cl_vDonantePlain {
    inNombre;
    inDolares;
    inBolivares;
    btCancelar;
    btAceptar;
    vista;
    constructor() {
        this.vista = document.getElementById("donante");
        this.inNombre = document.getElementById("donante_inNombre");
        this.inDolares = document.getElementById("donante_inDolares");
        this.inBolivares = document.getElementById("donante_inBolivares");
        this.btCancelar = document.getElementById("donante_btCancelar");
        this.btAceptar = document.getElementById("donante_btAceptar");
        // Escuchamos los Cambios de Todos los Campos, se supone que es para ver si los datos de los input seran correctos
        this.inNombre.addEventListener("input", () => this.validarBoton());
        this.inDolares.addEventListener("input", () => this.validarBoton());
        this.inBolivares.addEventListener("input", () => this.validarBoton());
        // Validamos el Botón para procesar los atributos del Donante
        this.validarBoton();
    }
    // Método para Validar el Botón Aceptar, Solo se Habilitará si Cumple las Condiciones "Correctas" porque si no bai bai
    validarBoton() {
        // Validamos el Nombre para que no sea Vacío, ni tenga Números, Solo Letras y Espacios
        const soloLetras = /^[a-zA-ZáéíóúñÑÁÉÍÓÚ\s]+$/; // Solo letras Incluyendo Acentos y espacios.
        const nombre = this.inNombre.value.trim(); // trim quita los Espacios al inicio y al final.
        const nombreValido = nombre !== "" && soloLetras.test(nombre); // test es un metodo que dice Si la palabra no tiene Numeros(V/F).
        // Validamos los Dolares para que no sean Negativos, ni Vacíos, Solo Números
        const dolaresValidos = this.inDolares.value !== "" && parseFloat(this.inDolares.value) >= 0;
        // Validamos los Bolivares para que no sean Negativos, ni Vacíos, Solo Números
        const bolivaresValidos = this.inBolivares.value !== "" && parseFloat(this.inBolivares.value) >= 0;
        // Habilitamos el Botón Aceptar Solo si y solo si
        const todoValido = nombreValido && dolaresValidos && bolivaresValidos;
        // Desactivar Boton Si no Cumple algo 
        this.btAceptar.disabled = !todoValido;
        // Cambiamos el Estilo del Botón para que se Vea Deshabilitado o Habilitado
        if (todoValido) {
            this.btAceptar.style.opacity = "1";
            this.btAceptar.style.cursor = "pointer";
        }
        else {
            this.btAceptar.style.opacity = "0.5";
            this.btAceptar.style.cursor = "not-allowed";
        }
    }
    get nombre() {
        return this.inNombre.value;
    }
    get dolares() {
        return +this.inDolares.value;
    }
    get bolivares() {
        return +this.inBolivares.value;
    }
    onAceptar(callback) {
        this.btAceptar.onclick = callback;
    }
    onCancelar(callback) {
        this.btCancelar.onclick = callback;
    }
    mostrar() {
        if (this.vista === null)
            return;
        this.vista.hidden = false;
        this.inNombre.value = "";
        this.inDolares.value = "";
        this.inBolivares.value = "";
        this.validarBoton();
    }
    ocultar() {
        if (this.vista === null)
            return;
        this.vista.hidden = true;
    }
}
//# sourceMappingURL=Cl_vDonantePlain.js.map