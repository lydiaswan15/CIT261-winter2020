import { qs, qsa, bindTouch } from "./utilities.js";
let toDoList = [];

function saveTodo(toDo) {
  console.log("saved", toDo);
}

export default class Todo {
  constructor() {
    bindTouch("#newTodoButton", this.addNewTodo.bind(this));
  }
  listTodos() {
    console.log("listed");
  }
  addNewTodo() {
    //get todo text
    const todoText = document.querySelector("#newTodo");
    toDoList.push(toDoList);
    // save to datastore
    saveTodo(todoText.value);
    //list Todos
    this.listTodos();
  }
  removeTodo(id) {}
  completeTodo(id) {}
}