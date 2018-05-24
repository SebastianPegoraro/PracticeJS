function limita() {
  var limite = 20;
  var elemento = document.getElementById("texto");
  if(elemento.value.length >= limite ) {
    return false;
  }
  else {
    var queda = (limite - 1) - elemento.value.length;
    var mensaje = document.getElementById('rest');
    mensaje.onchange = function(){
      document.getElementById('rest').innerHTML = "Quedan "+queda+" caracter";
    }
    return true;
  }
}
