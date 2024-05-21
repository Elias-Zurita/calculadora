const operacion = document.querySelector("#operacion");
const displayResultado = document.querySelector("#displayResultado");
const botones = document.querySelectorAll("button");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        // Si hago click en = el displayResultado muestra el valor de la cuenta con el metodo .value
        if (boton.id === "="){
            displayResultado.value = eval(displayResultado.value)
        // Si hago click en AC el displayResultado muestra el campo vacio, ya que AC resetea
        } else if (boton.id === "resetear"){
            displayResultado.value = "" 
        // Si hago click en DE el al numero del displayResultado se le borra un caracter por el metodo slice
        } else if (boton.id === "borrar"){
            displayResultado.value = displayResultado.value.slice(0, -1)
        // Reconocera el valor anterior y le agrega el nuevo boton
        } else {
            operacion.value += boton.id;
        }
    })
})