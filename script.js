e = enter
o = ober 
i = imes 
a = ai 
u = ufat 


function encriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ai");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imagenderecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("inputText").value="";
 }

function desencriptar(){
    var texto = document.getElementById("inputText").value.toLowerCase();
    var txtCifrado = texto.replace(/enter/igm,"e" );
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ai/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imagenderecha").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
    document.getElementById("inputText").value="";
 }

function copiar () {
    
    const textoResultado = document.querySelector("#texto2");

    let textoEncriptado = textoResultado.value;
    navigator.clipboard.writeText(textoEncriptado);
    
    alert("copiado a portapapel");
}
 


 /*function copiar() {

    var content = document.getElementById('#texto2');
    var seleccion = document.createRange(0, 900);
    content.select();
    document.execCommand('copy');

    alert("Copiado!");
}
*/
  