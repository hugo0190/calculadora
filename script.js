function Adicionar(valor){
    document.getElementById('visor').value += valor;
}
function Limpar(){
    document.getElementById('visor').value = '';
}
function Apagar(){
    var visor = document.getElementById('visor');
    visor.value = visor.value.slice(0, -1);
}
function Calcular(){
    var visor = document.getElementById('visor');
    try{
        visor.value = eval(visor.value);
    } catch(error){
        visor.value = 'Error'
    }
}