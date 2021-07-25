
const novoProduto = document.querySelector('[novo-produto]');
const inputProduto = document.querySelector('[input-produto]');
const asideProduto = document.querySelector('[aside-produto]');

const categoriaInput = document.querySelector('[input-categoria-produto]');
const marcaInput = document.querySelector('[input-marca-produto]');
const precoInput = document.querySelector('[input-preco-produto]');
const quantidadeInput = document.querySelector('[input-quantidade-produto]');

const buttonAdd = document.querySelector('[button-add]');

let tables = [];

buttonAdd.addEventListener('click', function(e) {
    e.preventDefault()
    
    const categoria = categoriaInput.value
    const marca = marcaInput.value
    const preco = precoInput.value
    const quantidade = quantidadeInput.value

    if (categoria === null || categoria === '') return
    if (marca === null || marca === '') return
    if (preco === null || preco === '') return
    if (quantidade === null || quantidade === '') return

    const table = criarTabela(categoria, marca, preco, quantidade)
    categoriaInput.value = null
    marcaInput.value = null
    precoInput.value = null
    quantidadeInput.value = null

    tables.push(table)
    render()
})

function criarTabela(categoria, marca, preco, quantidade) {
    return {
        categoria,
        marca,
        preco,
        quantidade 
    }
}

function render() {
    clearElement(novoProduto)
    tables.forEach(function(table) {
        const item = document.createElement('tr')
        const categoria = document.createElement('td')
        const marca = document.createElement('td')
        const preco = document.createElement('td')
        const quantidade = document.createElement('td')

        categoria.innerHTML = table.categoria
        marca.innerHTML = table.marca
        preco.innerHTML = table.preco
        quantidade.innerHTML = table.quantidade

        item.classList.add('item')
        categoria.classList.add('div-item')
        marca.classList.add('div-item')
        preco.classList.add('div-item')
        quantidade.classList.add('div-item')

        item.appendChild(categoria)
        item.appendChild(marca)
        item.appendChild(preco)
        item.appendChild(quantidade)

        novoProduto.appendChild(item)
    })

}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render();

