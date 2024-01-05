function contar() {
  
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert('[ERRO] Faltam Dados!')
    
    }else {
    res.innerHTML = 'Contando: '
    var i = Number(ini.value)
    var f = Number(fim.value)
    if(f <= 0) {
        window.alert('Invalido, Condidere o bloco 1')
        f = 1
    }
    if(i < f){
        for(var c = i; c <= f; c += f)
        res.innerHTML += `${c} \u{1F449}`
    } else {
        for(var c = i; c >= f; c -= f)
        res.innerHTML += `${c} \u{1F449}`
    }
    res.innerHTML += `\u{1F3C1}`
    }
}



