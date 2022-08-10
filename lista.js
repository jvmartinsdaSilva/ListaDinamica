const btnAdiconar = document.querySelector('.Adicionar')
const protetorDeTela = document.querySelector('.protetorDeTela')
const btnfechar = document.querySelector('.Fechar')
const minhaLista = document.querySelector('.Lista')
const nomeTarefa = document.querySelector('.nomeTarefa')
const descricaoTarefa = document.querySelector('.descricaoTarefa')
const btnConfirmar = document.querySelector('.confirmar')
const btnPesquisa = document.querySelector('.pesquisa')
const itemPesquisa = document.querySelector('.pesquisar')

class Lista {

    constructor(){
        this.idTarefaNumber = 1
        this.arrayLista = []
        this.editId = null
    }

    preparaAdicao(){
        this.displayOn()
        this.limparCampos()
    }

    confirmar(){
        let lista = this.lerDados()
        if(this.validaCampos(lista)){
            if(this.editId === null){
                this.adicionar(lista)
            } else {
                this.atualizar(this.editId, lista)
            }
            this.displayOf()
            this.limparCampos()
            this.listaNaTela()
        }
    }

    lerDados(){
        let lista = {}

        lista.nome = nomeTarefa.value
        lista.descriçao = descricaoTarefa.value
        lista.id = `${this.idTarefaNumber}`

        return lista
    }

    listaNaTela(){
        minhaLista.innerHTML = ''

        for(let i = 0; i < this.arrayLista.length; i++){
            let li = document.createElement('li')
            li.classList.add('itemLista')
            li.id = this.arrayLista[i].id
            minhaLista.appendChild(li)

            let spanName = document.createElement('span')
            spanName.textContent = this.arrayLista[i].nome
            spanName.classList.add('nomeItem')

            let spanItem = document.createElement('span')
            spanItem.classList.add('item')

            let spanDescricao = document.createElement('span')
            spanDescricao.textContent = this.arrayLista[i].descriçao
            spanDescricao.classList.add('itemListaTXT')

            let btnEdit = document.createElement('button')
            btnEdit.classList.add('editar')
            btnEdit.textContent = '✏'
            btnEdit.setAttribute('onclick', `lista.editar(${JSON.stringify(this.arrayLista[i])})`)

            let btnExc = document.createElement('button')
            btnExc.classList.add('apagar')
            btnExc.textContent = '🗑'
            btnExc.setAttribute('onclick', `lista.deletar(${this.arrayLista[i].id})`)
            
            spanItem.appendChild(spanDescricao)
            spanItem.appendChild(btnEdit)
            spanItem.appendChild(btnExc)
            li.appendChild(spanName)
            li.appendChild(spanItem)
        }
    }

    limparCampos(){
        nomeTarefa.value = ''
        descricaoTarefa.value = ''
    }

    adicionar(lista){
        this.arrayLista.push(lista)
        this.idTarefaNumber++       
    }

    atualizar(id, lista){
        for(let i = 0; i < this.arrayLista.length; i++){
            if(this.arrayLista[i].id == id){
                this.arrayLista[i].nome = lista.nome
                this.arrayLista[i].descriçao = lista.descriçao
            }
        }
        this.editId = null
    }


    editar(dados){
        this.editId = dados.id

        this.displayOn()
        this.limparCampos()
        
        nomeTarefa.value = dados.nome
        descricaoTarefa.value = dados.descriçao
    }


    validaCampos(lista){
        if(lista.nome === '' || lista.descriçao === ''){
            alert('Preencha todos os dados')
            return false
        }
        else{
            return true
        }
    }

    deletar(id){
        for(let i = 0; i < this.arrayLista.length; i++){
            if(this.arrayLista[i].id == id){
                this.arrayLista.splice(i, 1)
            }

        }
        this.listaNaTela()
    }

    pesquisar(){
        if(itemPesquisa.value == ''){
            this.listaNaTela()
        } else {
            minhaLista.innerHTML = ''
            for(let i = 0; i < this.arrayLista.length; i++){
                if(this.arrayLista[i].nome == itemPesquisa.value){
                    let li = document.createElement('li')
                    li.classList.add('itemLista')
                    minhaLista.appendChild(li)

                    let spanName = document.createElement('span')
                    spanName.textContent = this.arrayLista[i].nome
                    spanName.classList.add('nomeItem')

                    let spanItem = document.createElement('span')
                    spanItem.classList.add('item')

                    let spanDescricao = document.createElement('span')
                    spanDescricao.textContent = this.arrayLista[i].descriçao
                    spanDescricao.classList.add('itemListaTXT')

                    let btnEdit = document.createElement('button')
                    btnEdit.classList.add('editar')
                    btnEdit.textContent = '✏'
                    btnEdit.setAttribute('onclick', `lista.editar(${JSON.stringify(this.arrayLista[i])})`)

                    let btnExc = document.createElement('button')
                    btnExc.classList.add('apagar')
                    btnExc.textContent = '🗑'
                    btnExc.setAttribute('onclick', `lista.deletar(${this.arrayLista[i].id})`)
            
                    spanItem.appendChild(spanDescricao)
                    spanItem.appendChild(btnEdit)
                    spanItem.appendChild(btnExc)
                    li.appendChild(spanName)
                    li.appendChild(spanItem) 
                               
                }
            }
        }
    }

    displayOn(){
        protetorDeTela.style.display = 'flex'
    }
    displayOf(){
        protetorDeTela.style.display = 'none'
    }
}

let lista = new Lista()


btnAdiconar.addEventListener('click', function(){
    lista.preparaAdicao()
})

btnfechar.addEventListener('click', function(){
    lista.displayOf()
})

btnConfirmar.addEventListener('click', function(){
    lista.confirmar()
})

btnPesquisa.addEventListener('click', function(){
    lista.pesquisar()
})