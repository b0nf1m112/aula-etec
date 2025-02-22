"use strict";
var empresa;
(function (empresa) {
    const calc = document.getElementById("calc");
    const campoNome = document.getElementById("campoNome");
    const campoano = document.getElementById("campoano");
    calc.addEventListener("click", () => {
        let p = new empresa.Pessoa();
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoano.value);
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
    });
})(empresa || (empresa = {}));
