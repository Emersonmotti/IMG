function somar() {
    let somar = document.getElementById("somar").value

    let kiloString = document.getElementById(kilos).value
    let alturaString = document.getElementById(altura).value

    let kilosConvertido = parseFloat(kiloString)
    let alturaConvertido = parseFloat(alturaString)

    let somar = kilosConvertido / alturaConvertido * alturaConvertido;
    
    window.alert(" O resultado do IMC é: " + somar)
}