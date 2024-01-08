// 1 Recupero l'elemento dal DOM
const listaDellaSpesa = document.getElementById('listadellaspesa')
// 2 Creo una lista della spesa
const listaSpesa = ['acqua', 'caffè', 'cocacola', 'birra', 'vino', 'carote', 'cipolle', 'patate', 'zucchero', 'sale']
// 3 Creo la lista da stampare sul DOM
let listItems = '<ul>'
// 4 Creo il ciclo while
let i = 0
while(i < listaSpesa.length){
    listItems += `<li>${listaSpesa[i]}</li>`
    console.log(listaSpesa[i])
    i++;
}
listItems += '</ul>'
// 5 stampo in pagina
listaDellaSpesa.innerHTML = listItems