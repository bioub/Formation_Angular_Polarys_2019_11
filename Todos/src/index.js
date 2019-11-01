import { createTodo } from "./todos";
import { fetchTodos } from "./api";

/** @type {HTMLFormElement} */
const formElt = document.querySelector('.todo-form');
/** @type {HTMLDivElement} */
const listElt = document.querySelector('.todo-list');
/** @type {HTMLInputElement} */
const inputElt = document.querySelector('.todo-input');
/** @type {HTMLInputElement} */
const toggleElt = document.querySelector('.todo-toggle');

formElt.addEventListener('submit', (event) => {
  event.preventDefault();
  createTodo({
    title: inputElt.value,
    completed: false,
    id: Math.random(),
  }, listElt);
});

listElt.addEventListener('click', (event) => {
  if (event.target instanceof HTMLButtonElement) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  }
});

// 3 - Ecouter le click de toggleElt
// et tout cocher/décocher
// -> document.querySelectorAll (retourne un NodeList tous les éléments d'un sélecteur CSS)
// -> il faut mettre true / false en bouclant en fonction de toggleElt.checked
toggleElt.addEventListener('click', () => {
  const checkboxes = listElt.querySelectorAll('input[type=checkbox]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = toggleElt.checked;
  });
});


fetchTodos().then((res) => {
  res.data.forEach((todo) => {
    createTodo(todo, listElt);
  });
});
