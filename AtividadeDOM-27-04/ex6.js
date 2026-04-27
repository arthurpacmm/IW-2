function adicionar() {
    const input = document.getElementById('itemInput');
    const lista = document.getElementById('minhaLista');
    if(input.value !== "") {
        const li = document.createElement('li');
        li.innerText = input.value;
        lista.appendChild(li);
        input.value = "";
    }
}