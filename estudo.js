//alert("");
//console.log("");
//document.write("");

function moeda(atual){ 
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function total(){
    let valor = document.getElementById("val").value;
    let juros = document.getElementById("ju").value;
    let mes = document.getElementById("mes").value;

    if(!Number(valor)){
        alert("O valor deve ser um número.");

        document.getElementById("val").value ="";
        document.getElementById("val").focus();
        return;
    }
    if(!Number(juros)){
        alert("Os juros deve ser um número.");

        document.getElementById("ju").value ="";
        document.getElementById("ju").focus();
        return;
    }
    if(!Number(mes)){
        alert("Os meses devem ser um número.");

        document.getElementById("mes").value ="";
        document.getElementById("mes").focus();
        return;
    }

    let resultado = 0;
    let texto = ""
    for(let i = 1; i <= mes; i++){
        resultado = valor * (1+(juros/100));
        valor = resultado;
        //document.write("Mês " + i + " valor: " + moeda(resultado) + "<br>");
        texto += "Mês " + i + " valor: " + moeda(resultado) + "<br>";

    }
    document.getElementById("meses").innerHTML = texto;
    document.getElementById("resultado").innerHTML = "Total: " + moeda(resultado);
    //document.write("O Resultado é " + moeda(resultado));
}

function calculaRaiz(){
    let a = document.getElementById ("aEquacao").value;
    let b = document.getElementById ("bEquacao").value;
    let c = document.getElementById ("cEquacao").value;

    let delta = (b*b) - 4*a*c;
    let raizdelta = sqrt(4*a*c)
    if (delta < 0){
        alert("O delta é negativo!");
        return

    }
    else if (delta == 0){

    }
    

}


