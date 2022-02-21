window.addEventListener("load", function() {atribuirEventos();})

let inputVisor = document.getElementById("texto");
let inputVisor2 = document.getElementById("texto2");

let val1 = 0;
let val2 = 0;
let fila = false;
let resultado;
let operacao;
let res = false;

function atribuirEventos() {
    document.getElementById("b0").addEventListener("click", inserirZero);
    document.getElementById("b1").addEventListener("click", inserirValor);
    document.getElementById("b2").addEventListener("click", inserirValor);
    document.getElementById("b3").addEventListener("click", inserirValor);
    document.getElementById("b4").addEventListener("click", inserirValor);
    document.getElementById("b5").addEventListener("click", inserirValor);
    document.getElementById("b6").addEventListener("click", inserirValor);
    document.getElementById("b7").addEventListener("click", inserirValor);
    document.getElementById("b8").addEventListener("click", inserirValor);
    document.getElementById("b9").addEventListener("click", inserirValor);
    
    document.getElementById("bMais").addEventListener("click", inserirOperacao);
    document.getElementById("bMenos").addEventListener("click", inserirOperacao);
    document.getElementById("bMp").addEventListener("click", inserirOperacao);
    document.getElementById("bDivisao").addEventListener("click", inserirOperacao);
    
    document.getElementById("bPonto").addEventListener("click", inserirPonto);
    document.getElementById("bIgual").addEventListener("click", atribuirResultado);
    document.getElementById("bApagar").addEventListener("click", limparValores);
}

function inserirZero() {
    if (inputVisor.value == "" && fila) {
        inputVisor.value = 0;
    } else if (inputVisor.value == "") {
        inputVisor.value = "";
    } else {
        inputVisor.value += 0;
    }
}

function inserirValor() {
    
    if (res) {
        inputVisor.value = "";
        res = false;
        inputVisor.value += this.textContent;
    } else {
        inputVisor.value += this.textContent;
    }
}

function inserirOperacao() {
    val1 = inputVisor.value;
    
    if (inputVisor.value != "" && fila == false && !isNaN(parseInt(inputVisor.value))) {
        inputVisor2.value = inputVisor.value;
        inputVisor2.value += " " + this.textContent + " ";
        operacao = this.textContent;
        fila = true;
        inputVisor.value = "";
    } 
}

function atribuirResultado() {
    calcularResultado(operacao);
}

function calcularResultado(op) {

    if (inputVisor.value != "" && fila) {
        val2 = inputVisor.value;
        
        console.log(val2);
        console.log(op);
        switch (op) {
            case "+": resultado = somar(val1, val2); break;
            case "-": resultado = subtrair(val1, val2); break;
            case "/": resultado = dividir(val1, val2); break;
            case "x": resultado = multiplicar(val1, val2); break;
            default: resultado = ""; break;
        }    
        
        if (resultado != "" || resultado == 0) {
            inputVisor.value = resultado; 
            val1 = 0;
            val2 = 0;
            fila = false;
            inputVisor2.value = "";
            operacao = ""; 
            res = true;
        }
    }
}

function somar(v1, v2) {
    return parseInt(v1) + parseInt(v2);
}

function subtrair(v1, v2) {
    return v1 - v2;
}

function dividir(v1, v2) {
    return v1 / v2;
}

function multiplicar(v1, v2) {
    return v1 * v2;
}

function inserirPonto() {
    if (inputVisor.value == "" || res) {
        res = false;
        inputVisor.value = "0.";
    } else {
        inputVisor.value += ".";
    }
}

function limparValores() {
    inputVisor.value = "";
    val1 = 0;
    val2 = 0;
    fila = false;
    inputVisor2.value = "";
    operacao = "";   
}