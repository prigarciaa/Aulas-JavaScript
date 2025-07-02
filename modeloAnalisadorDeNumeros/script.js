 let num = document.querySelector('input#fnum')
 let lista = document.querySelector('select#flista')
 let resposta = document.querySelector('div#resposta')
 let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value)) // Adiciona o número ao array
        let item = document.createElement('option') // Cria um novo elemento option
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)  
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    
    num.value = ''
    num.focus()
}