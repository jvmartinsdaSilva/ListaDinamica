const btnAdiconar = document.querySelector('.Adicionar')
const protetorDeTela = document.querySelector('.protetorDeTela')
const btnfechar = document.querySelector('.Fechar')
const lista = document.querySelector('.Lista')
const nomeTarefa = document.querySelector('.nomeTarefa')
const descricaoTarefa = document.querySelector('.descricaoTarefa')
const btnConfirmar = document.querySelector('.confirmar')
const btnPesquisa = document.querySelector('.pesquisa')
const pesquisa = document.querySelector('.pesquisar')

const displayOn = () => {
    protetorDeTela.style.display = 'flex';
}

const displayOf = () => {
    protetorDeTela.style.display = 'none'
}

btnAdiconar.addEventListener('click', function() {
    displayOn()
})

btnfechar.addEventListener('click', function() {
    displayOf()
})

btnConfirmar.addEventListener('click', function(){
    if(nomeTarefa.value === "" || descricaoTarefa.value === ""){
        alert('Preencha os dados corretamente')
    } else {
        criarTaerfa()
        displayOf()
        limparCampos()
    }
})

const criarTaerfa = () => {
    let tarefas = {}
    let idTarefaNumber = Math.floor(Math.random() * 1000)

    tarefas.nome = nomeTarefa.value
    tarefas.id = `${nomeTarefa.value}${idTarefaNumber}`
    tarefas.descricao = descricaoTarefa.value

    adicionarNaTela(tarefas)
}

const adicionarNaTela = (tarefas) => {
    let li = document.createElement('li')
    li.classList.add('itemLista')
    li.id = tarefas.id
    lista.appendChild(li)

    let spanNome = document.createElement('span')
    spanNome.classList.add('nomeItem')
    spanNome.id = lista.id
    spanNome.textContent = tarefas.nome

    let spanItem = document.createElement('span')
    spanItem.classList.add('item')

    let spanTxt = document.createElement('span')
    spanTxt.classList.add('itemListaTXT')
    spanTxt.textContent = tarefas.descricao

    let btnEdit = document.createElement('button')
    btnEdit.classList.add('editar')
    btnEdit.textContent = '✏'
    btnEdit.addEventListener('click',function(){
        editarItem(lista)
    })

    let btnDelet = document.createElement('button')
    btnDelet.classList.add('apagar')
    btnDelet.textContent = '🗑'
    btnDelet.addEventListener('click',function(){
        removerItem(tarefas)
    })

    spanItem.appendChild(spanTxt)
    spanItem.appendChild(btnEdit)
    spanItem.appendChild(btnDelet)
    li.appendChild(spanNome)
    li.appendChild(spanItem)
}

const removerItem = (tarefas) => {
   let liRemove = document.getElementById(tarefas.id)
   lista.removeChild(liRemove)
}

const limparCampos = () => {
    nomeTarefa.value = ''
    descricaoTarefa.value = ''
}