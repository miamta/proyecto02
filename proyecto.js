// variablres
var letraUsuario = prompt('Ingrese una letra:');

// Conversion de un numero aleatorio a letra
var numero = Math.random() * (122 - 97) + 97;
var letra = String.fromCharCode(numero);

//Condiciones
if (letra < 122) {
  alert("TE pasaste, Rango de la a-z")
}else if (letra > 97) {
  alert("Te quedaste corto, Rango de la a-z")
}


if (letraUsuario==letra){
  alert("Acertaste")
}else if (letraUsuario!=letra) {
    alert("FALLASTE")
} ;



document.write(letra);
