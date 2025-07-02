/*let amigo = {}
console.log(typeof amigo) // object
console.log(amigo) // {}
*/
let amigo = {nome: 'José',
    sexo: 'M',
    peso: 85.4, 
    engordar(p=0) {
        console.log('Engordou ' + p + 'kg')
        this.peso += p
}}
console.log(amigo.nome) // José