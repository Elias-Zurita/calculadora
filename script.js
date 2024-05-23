const operacion = document.querySelector("#operacion");
const displayResultado = document.querySelector("#displayResultado");
const botones = document.querySelectorAll("button");

let resultadoMostrado = false;

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    // Si hago click en = el displayResultado muestra el valor de la cuenta escrita en el display operacion con el metodo .value
    if (boton.id === "=") {
      displayResultado.value = eval(operacion.value);
      resultadoMostrado = true;
      // Si hago click en AC el displayResultado muestra el campo vacio, ya que AC resetea
    } else if (boton.id === "resetear") {
      displayResultado.value = "";
      operacion.value = "";
      resultadoMostrado = false;
      // Si hago click en DE el al numero del displayResultado se le borra un caracter por el metodo slice
    } else if (boton.id === "borrar") {
      operacion.value = operacion.value.slice(0, -1);
      resultadoMostrado = false;
      // Reconocera el valor anterior y le agrega la nueva operacion en el display
    } else {
      if (resultadoMostrado) {
        if (["+", "-", "*", "/"].includes(boton.id)) {
          operacion.value = displayResultado.value + boton.id;
        } else {
          operacion.value = boton.id;
        }
        resultadoMostrado = false;
      } else {
        operacion.value += boton.id;
      }
    }
  });
});
