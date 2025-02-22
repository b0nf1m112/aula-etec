namespace empresa{

     
 
     const calc =document.getElementById("calc") as HTMLButtonElement;
     const campoNome = document.getElementById("campoNome") as HTMLInputElement;
     const campoano = document.getElementById("campoano") as HTMLInputElement;
    
     calc.addEventListener ("click",()=>{
        let p = new Pessoa();
        p.nome = campoNome.value;
        p.anoNasc = parseInt(campoano.value);
    
        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.anoNasc.toString();
        document.getElementById("idade").textContent = p.calcularIdade(2025).toString();
});
    
     
}