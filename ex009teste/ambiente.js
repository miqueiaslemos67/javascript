function resultado() {
    var txtp = window.document.querySelector('input#txtpaís')
    var res = window.document.querySelector('div#res')
    var país = 'brasil'
    
    if(!txtp.value ) {
       res.innerHTML = `<p>Digite alguma coisa para obter resultado!</p>`
    } else if (txtp.value == país) {
        res.innerHTML = 'Você é Brasileiro!'
        
    } else {
        res.innerHTML = 'Voce é Estrangeiro!'
        
    }
    
}