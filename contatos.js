const form = document.getElementById('form-contatos')
let linhas = ''

form.addEventListener('submit', function(r){
    r.preventDefault()

    const contato = document.getElementById('input-contato')
    const numero = document.getElementById('input-numero')

    let linha = `<tr>`
    linha += `<td>${contato.value}</td>`
    linha += `<td>${numero.value}</td>`
    linha += '</tr>'

    linhas += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas

    contato.value = ''
    numero.value = ''

})
