function exibir(num){
    let resultado = document.getElementById('resultado').value
    document.getElementById('resultado').value = resultado + num
}

function igual(){
    let atual = document.getElementById('resultado').value
    if (isNaN(atual)){
        document.getElementById('resultado').value = "Erro de operação";
        if (atual){
            document.getElementById('resultado').value = eval(atual)
        }
    }
}

function verifica_exibe(sinal){
    let tela = document.getElementById('resultado').value
    let n = tela.includes(sinal)
    if(tela){
        if(!n){
        document.getElementById('resultado').value = tela + sinal
        }    
    }

}