var prueba = 'los sus son el arte de la vida para toda la eternidad';
var letrasVocales = ['e','E','o','O','i','I','a','A','u','U'];
var reemplazoVocales = ['enter','Enter','ober','Ober','imes','Imes','ai','Ai','ufat','Ufat'];
//a = ai; e = enter; i = imes; o = ober; u = ufat

function mostrarResultado() {
    document.querySelector('#botonCopiar').removeAttribute('disabled');
    var copiar = document.getElementById('botonCopiar'); 
    var sinMensaje = document.querySelector('#sinTexto');
    var ingresarMensaje = document.querySelector('#ingresaTexto');
    var imagenMuñeco = document.querySelector('.muñeco');
    var textoResultado = document.querySelector('#mensajeFinal');
    copiar.style.display = 'block';
    imagenMuñeco.style.display = 'none';
    sinMensaje.style.display = 'none';
    ingresarMensaje.style.display='none';
    textoResultado.style.display = 'block';
}

function codificar() {
    var frase = document.getElementById('mensajeUsuario').value;
    if (frase != '') {
        for (let i = 0; i < letrasVocales.length; i++) {
            arrayFrase = frase.split(letrasVocales[i]);
            frase = '';
            frase = arrayFrase.join(reemplazoVocales[i]);
            arrayFrase = [];
        }
        var resultado = document.querySelector('#mensajeFinal');
        resultado.innerHTML = frase;
        mostrarResultado();
    }
}

function decodificar() {
    var frase = document.getElementById('mensajeUsuario').value;
    if (frase != ''){
        for (let i = 0; i < reemplazoVocales.length; i++) {
            arrayFrase = frase.split(reemplazoVocales[i]);
            frase = '';
            frase = arrayFrase.join(letrasVocales[i]);
            arrayFrase = [];
        }
        var resultado = document.querySelector('#mensajeFinal');
        resultado.innerHTML = frase;
        mostrarResultado();
    }
}

function copiar() {
    var copia = document.getElementById('mensajeFinal');
    navigator.clipboard.writeText(copia.innerHTML);
}

