console.log("¡Bienvenido al programa!");

  // Captura de datos
  let nombre = prompt("Por favor, ingrese su nombre: ");
  let edad;

  // Validación de edad: sigue pidiendo hasta que sea un número válido
  do {
    edad = prompt("Por favor, ingrese su edad (número): ");
    edad = parseInt(edad);
    if (isNaN(edad)) {
      alert("Error: Por favor, ingresa una edad válida en números.");
    }
  } while (isNaN(edad));

  // Validaciones
  if (edad < 18) {
    alert(`Hola ${nombre}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
  } else {
    alert(`Hola ${nombre}, eres mayor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
  }