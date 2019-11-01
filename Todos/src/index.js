/**
     * @param {object} todo
     * @param {string} todo.title
     * @param {boolean} todo.completed
     * @param {number} todo.id
     */
    function createTodo(todo) {
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
        });
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