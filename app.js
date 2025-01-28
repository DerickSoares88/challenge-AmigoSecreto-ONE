//O principal objetivo deste desafio é fortalecer as habilidades em lógica de programação.

const input = document.querySelector(".input-name"); // Supondo que o input tenha a classe 'input'
const button = document.querySelector(".button-add"); // Supondo que o botão tenha o ID 'addButton'
const list = document.querySelector(".name-list"); // Supondo que a lista tenha o ID 'list'
const sortear = document.querySelector(".button-container"); // Supondo que o botão de sortear tenha o ID 'sortearButton'
const sorteador = document.querySelector(".button-draw"); // Supondo que o elemento para exibir o sorteado tenha o ID 'sorteador'
const amigos = [];

button.addEventListener("click", function () {
    if (input.value.trim() == "") {
        alert("Digite um nome válido");
    } else {
        amigos.push(input.value);
        list.innerHTML += `<li>${input.value}</li>`;
        input.value = "";
    }
});

sortear.addEventListener("click", function () {
    if (amigos.length == 0) {
        alert("A lista está vazia");
    } else {
        const randomIndex = Math.floor(Math.random() * amigos.length);
        sorteador.textContent = `Amigo sorteado: ${amigos[randomIndex]}`;
    }
});