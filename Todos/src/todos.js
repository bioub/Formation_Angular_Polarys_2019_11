/**
 * @param {object} todo
 * @param {string} todo.title
 * @param {boolean} todo.completed
 * @param {number} todo.id
 */
export function createTodo(todo, listElt) {
  const rowElt = document.createElement('div');
  rowElt.dataset.todoId = todo.id;
  rowElt.className = 'todo-row';

  // 1 - Créer et insérer une balise <input type="checkbox">
  // la cocher en fonction de todo.completed
  // -> HTMLInputElement (type et checked)
  const checkboxElt = document.createElement('input');
  checkboxElt.type = 'checkbox';
  checkboxElt.checked = todo.completed;
  rowElt.appendChild(checkboxElt);

  const spanElt = document.createElement('span');
  spanElt.innerText = todo.title;
  rowElt.appendChild(spanElt);

  // 2 - Créer et insérer une balise <button>-</button>
  // pour écrirer entre les balises ouvrantes/fermantes
  // -> innerText / innerHTML
  // Au clic du bouton (événement click) : supprimer la ligne (rowElt)
  // -> parent.removeChild(enfant)
  // https://developer.mozilla.org/fr/docs/Web/API/Node/removeChild
  // -> parentNode (pour retrouver le parent d'un élément)
  const buttonElt = document.createElement('button');
  buttonElt.innerText = '-';
  // buttonElt.addEventListener('click', (event) => {
  //   // event.target.parentNode.parentNode.removeChild(event.target.parentNode);
  //   listElt.removeChild(rowElt);
  // });
  rowElt.appendChild(buttonElt);

  listElt.appendChild(rowElt);
}

