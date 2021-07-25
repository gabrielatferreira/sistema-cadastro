const novoProduto = document.querySelector('[novo-cliente]');

const nomeInput = document.querySelector('[input-nome-cliente]');
const idadeInput = document.querySelector('[input-idade-cliente]');
const emailInput = document.querySelector('[input-email-cliente]');

const buttonAdd = document.querySelector('[button-add]');

let tables = [];

buttonAdd.addEventListener('click', function(e) {
    e.preventDefault()
    
    const nome = nomeInput.value
    const idade = idadeInput.value
    const email = emailInput.value

    if (nome === null || nome === '') return
    if (idade === null || idade === '') return
    if (email === null || email === '') return

    const table = criarTabela(nome, idade, email)
    nomeInput.value = null
    idadeInput.value = null
    emailInput.value = null

    tables.push(table)
    render()
})

function criarTabela(nome, idade, email) {
    return {
        nome,
        idade,
        email 
    }
}

function render() {
    clearElement(novoProduto)
    tables.forEach(function(table) {
        const item = document.createElement('tr')
        const nome = document.createElement('td')
        const idade = document.createElement('td')
        const email = document.createElement('td')

        nome.innerHTML = table.nome
        idade.innerHTML = table.idade
        email.innerHTML = table.email

        item.classList.add('item-cliente')
        nome.classList.add('div-item-cliente')
        idade.classList.add('div-item-cliente')
        email.classList.add('div-item-cliente')

        item.appendChild(nome)
        item.appendChild(idade)
        item.appendChild(email)

        novoProduto.appendChild(item)
    })

}

function clearElement(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render();