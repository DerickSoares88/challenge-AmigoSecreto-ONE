// Criando variaveis para os elementos do HTML
const input = document.querySelector(".input-name");
const button = document.querySelector(".button-add");
const list = document.querySelector(".name-list");
const sortear = document.querySelector(".button-container");
const sorteador = document.querySelector(".button-draw");
const amigos = [];

// Adicionando eventos de click nos botões, para adicionar e sortear
button.addEventListener("click", function () {
    if (input.value.trim() == "") {
        alert("Digite um nome válido");
    } else {
        amigos.push(input.value);
        list.innerHTML += `<li>${input.value}</li>`;
        input.value = "";
    }
});

// Adicionando evento de click no botão de sortear, para sortear um amigo da lista
sortear.addEventListener("click", function () {
    if (amigos.length == 0) {
        alert("A lista está vazia");
    } else {
        const randomIndex = Math.floor(Math.random() * amigos.length);
        sorteador.textContent = `Amigo sorteado: ${amigos[randomIndex]}`;
    }
});