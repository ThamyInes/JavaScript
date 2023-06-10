function calculoLdni(){
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numero=parseInt(document.getElementById("dni").value);
    console.log(numero);
    if (numero=="" || numero<0 || numero> 99999999){
        let msnError="Indique un número de Dni Válido"
        document.getElementById("msnError").innerHTML=msnError;
    }else{
        console.log(numero);
        let calLetra=numero%23; //módulo
        let letra =letras[calLetra];
        console.log(letra);
        document.getElementById("resultado").innerHTML= numero+ "-"+letra;
    }
}
