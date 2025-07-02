 let num = document.getElementById('fnum')
 let lista= document.getElementById('flist')
 let resposta= document.getElementById('resposta')
 let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
 }

function inLista(n, l) {
    if (l.indexof(Number(n)) != -1) {
        return true
    }
 }

function adicionar() {
    if (isNumero(num.value) && inLista(num.value, valores)) {

    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
}