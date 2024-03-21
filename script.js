function procesarTexto() {
  var texto = document.querySelector('.Entrada').value;

  // Si el texto ingresado está encriptado, mostrarlo en el área de texto salida
  if (texto.match(/enter|imes|ai|ober|ufat/g)) {
      document.querySelector('.Salida').value = texto;
      return;
  }

  // Validar que el texto solo contenga letras minúsculas y sin acentos
  if (!/^[a-z]+$/.test(texto)) {
      alert("Solo se permiten letras minúsculas y sin acentos.");
      return;
  }

  var resultado = encriptarTexto(texto);
  document.querySelector('.Salida').value = resultado;
}

function encriptarTexto(texto) {
  return texto.replace(/e/g, 'enter')
              .replace(/i/g, 'imes')
              .replace(/a/g, 'ai')
              .replace(/o/g, 'ober')
              .replace(/u/g, 'ufat');
}

function desencriptarTexto() {
  var textoEncriptado = document.querySelector('.Entrada').value;
  var resultado = desencriptar(textoEncriptado);
  document.querySelector('.Salida').value = resultado;
}

function desencriptar(texto) {
  return texto.replace(/enter/g, 'e')
              .replace(/imes/g, 'i')
              .replace(/ai/g, 'a')
              .replace(/ober/g, 'o')
              .replace(/ufat/g, 'u');
}

function copiarTexto() {
  var textoResultado = document.querySelector('.Salida');
  textoResultado.select();
  document.execCommand('copy');
  textoResultado.value = ''; // Borrar el texto encriptado
  
  var textoEntrada = document.querySelector('.Entrada');
  textoEntrada.value = ''; // Borrar el texto original
  
  alert('Texto copiado al portapapeles');
}

