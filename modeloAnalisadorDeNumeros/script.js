 let num = document.getElementById('fnum')
 let lista= document.getElementById('flist')
 let resposta= document.getElementById('resposta')
 let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
 }

function inLista(n, l) {
    if (l.indexof(Number(n)) != -1) {
        return true
    }
 }

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {
        window.alert("Tudo certo!")
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}