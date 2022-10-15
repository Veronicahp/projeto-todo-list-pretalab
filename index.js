let id = 0

// function adicionarTarefa() {
//     id++
//     const tarefa = document.getElementById('tarefa').value
//     document.getElementById('lista-tarefas').innerHTML += 
//     `<label id='${id}'>${tarefa}</label><input type="checkbox" /> <br>`
// }


const tarefa = (id, novaTarefa) => `<div id='${id}'>
<label>${novaTarefa}</label>
<input type="checkbox" />
</div>`

function adicionarTarefa(){
    id++
    const novaTarefa = document.getElementById('nome-tarefa').value
    document.querySelector('#lista-tarefas').innerHTML += tarefa(id, novaTarefa)
}