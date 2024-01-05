function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.value = `tab${c}` // Entre ${c} e ${n} eu posso colocar tanto pra somar, dividir e etc, mais os dois caracteres precisam ser iguais, soma com soma...........//
            tab.appendChild(item)
            c++
        }
    }
}