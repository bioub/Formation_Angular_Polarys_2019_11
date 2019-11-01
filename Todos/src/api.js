import axios from 'axios';

export function fetchTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/todos');
}
