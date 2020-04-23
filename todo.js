//Link to Video that helped me understand how to deal with the functionality of JavaScript, specifically the add, remove --> https://www.youtube.com/watch?v=b8sUhU_eq3g



function genNewTodo(text, id) {
  let newDiv = document.createElement("div");
  newDiv.className = "list_item";
  newDiv.id = id;
  newDiv.addEventListener("click", update);
  newDiv.addEventListener("click", completeToDo);

  let newListItem = document.createElement("li");
  newListItem.innerText = text;

  let newIcon = document.createElement("i");
  newIcon.className = "add__icon icon--deleteTrash fas fa-trash-alt";
  newIcon.addEventListener("click", removeTodo);

  newDiv.appendChild(newListItem);
  newDiv.appendChild(newIcon);

var list = document.querySelector(".list");

  let newItem = list.appendChild(newDiv);

}

var todoArray = [];
let ajaxToDo = new XMLHttpRequest();
ajaxToDo.open("GET", "https://cse204.work/todos", true);
ajaxToDo.setRequestHeader("x-api-key","cd679f-1a5c76-c58d52-74735c-f21eac");
ajaxToDo.send();

ajaxToDo.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        todoArray = JSON.parse(this.responseText);
        for (i = 0; i < todoArray.length; i++) {
            genNewTodo(todoArray[i].text, todoArray[i].id);
          if (todoArray[i].completed == true) {

            let completedTodo = document.getElementById(todoArray[i].id);
            completedTodo.querySelector("li").classList.toggle("word_complete");
          }


        }
    }
}



function update() {
  console.log(this);
  let parent = this.parentElement;
let parentID = this.id;
let isUpdated = false;
if ((parent.classList.contains("word_complete")) == false) {
  isUpdated = true;
}
console.log("UPDATE BOOL");
console.log(isUpdated);
let updateUser = {completed : isUpdated}

let updateFunc = new XMLHttpRequest();
updateFunc.open("PUT", "https://cse204.work/todos/" + parentID, true);
updateFunc.setRequestHeader("Content-type", "application/json");
updateFunc.setRequestHeader("x-api-key", "cd679f-1a5c76-c58d52-74735c-f21eac");
updateFunc.send(JSON.stringify(updateUser));

updateFunc.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    console.log(document.getElementById(parentID));
   document.getElementById(parentID).querySelector("li").classList.toggle("word_complete");
  }
  else if (this.readyState == 4) {
    console.log("not updated")
  }
}

}


document.querySelector(".addAToDo").addEventListener("submit", addToDo);
document.querySelector(".add__icon").addEventListener("click", addToDo);

function addToDo(event) {
  event.preventDefault();
  let userData = {text: document.querySelector(".addAToDo input[type=text]").value};
  document.querySelector(".addAToDo input[type=text]").value = '';

  let addAnItem = new XMLHttpRequest();

  addAnItem.open("POST", "https://cse204.work/todos", true);
  addAnItem.setRequestHeader("Content-type", "application/json");
  addAnItem.setRequestHeader("x-api-key", "cd679f-1a5c76-c58d52-74735c-f21eac");
  addAnItem.send(JSON.stringify(userData));

  addAnItem.onreadystatechange = function() {

    // Wait for readyState = 4 & 200 response
    if (this.readyState == 4 && this.status == 200) {

        // parse JSON response
        var todo = JSON.parse(this.responseText);

            genNewTodo(todo.text, todo.id);

    } else if (this.readyState == 4) {

        // this.status !== 200, error from server
        console.log(this.responseText);

    }
}
}


function removeTodo() {
  console.log("REMOVE");
  var deleteID = this.parentElement.id;
  let deletion = new XMLHttpRequest();
   deletion.open("DELETE", "https://cse204.work/todos/" + deleteID, true);
   deletion.setRequestHeader("x-api-key", "cd679f-1a5c76-c58d52-74735c-f21eac");
   deletion.send();

   deletion.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
      var deleteElement =  document.getElementById(deleteID);
      deleteElement.remove();

     }
     else if (this.readyState == 4) {
       console.log("Did not remove");
     }
   }

}



var arrayOfListItems = document.querySelectorAll(".list .list_item");

for (i = 0; i < arrayOfListItems.length; i++) {
  arrayOfListItems[i].addEventListener("click", completeToDo);
}


function completeToDo() {

  this.querySelector("li").style.textDecoration = "line-through"

}
