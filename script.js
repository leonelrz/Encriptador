const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    var textoEncriptado= encriptar(inputTexto.value);
    mensaje.style.backgroundImage="none";
    mensaje.value=textoEncriptado;
    inputTexto.value="";

}

function botonDesencriptar(){
    var textoEncriptado= desencriptar(inputTexto.value);
    mensaje.style.backgroundImage="none";
    mensaje.value=textoEncriptado;
    inputTexto.value="";

}

function copiar() {
    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.style.backgroundImage="none";
    mensaje.value = "";

    alert("Texto Copiado")
}

function encriptar(textoEncriptado) {
    var textoEncriptado = inputTexto.value.toLowerCase();
    var resultadoE =textoEncriptado.replace(/e/g , "enter" );
    var resultadoO = resultadoE.replace(/o/g , "ober" );
    var resultadoI = resultadoO.replace(/i/g , "imes" );
    var resultadoA = resultadoI.replace(/a/g , "ai" );
    var resultadoU = resultadoA.replace(/u/g , "ufat" );
    var textoEncriptado = resultadoU;
    
    return textoEncriptado;

}

    function desencriptar(textoEncriptado) {
    var textoEncriptado = inputTexto.value.toLowerCase();
    var resultadoU =textoEncriptado.replace(/ufat/g , "u" );
    var resultadoA = resultadoU.replace(/ai/g , "a" );
    var resultadoI = resultadoA.replace(/imes/g , "i" );
    var resultadoO = resultadoI.replace(/ober/g , "o" );
    var resultadoE = resultadoO.replace(/enter/g , "e" );
    var textoEncriptado = resultadoE;

    return textoEncriptado;
}

