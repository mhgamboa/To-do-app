import ToDoList from './todolist.js';
import ToDoItem from './todoitem.js';

const toDoList = new ToDoList();

//Launch App
document.addEventListener("readystatechange", (event) => {
  if(event.target.readystate === "complete") {
      initApp();
  }
})

const initApp = () => {
  //Add listeners

  //Procedural
}