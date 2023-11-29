/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//
let todoItems = [
];
let todoItemsForm = document.getElementById("todoItemform");
let todoItemsList = document.getElementById("todoList");
let todoInput = document.getElementById("todoInput");
// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
todoItemsForm.addEventListener ("submit", addTodoItem);

function addTodoItem (event) {
  event.preventDefault();

  todoItems.push(todoInput.value)
  console.log("addTodoItem", todoItems);

  todoInput.value = "";

  renderItems();
}

function renderItems() {
  todoItemsList.innerHTML = "";

  for (let i=0; i < todoItems.length; i++) {
    
    let tempListItem = document.createElement ("li");
    
    tempListItem.textContent = todoItems[i];

    todoItemsList.appendChild(tempListItem);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete task";
    deleteBtn.dataset.index = i;

    deleteBtn.addEventListener("click", function(event){
      todoItems.splice(event.target.dataset.index, 1);
      renderItems();
    })


    tempListItem.appendChild(deleteBtn);

    let completeBtn = document.createElement('button');
    completeBtn.textContent = "Done!";
    completeBtn.dataset.complete = i;

    completeBtn.addEventListener("click", function(event){
      todoItemscompleted = true;

      console.log(todoItemscompleted)
    })

    tempListItem.appendChild(completeBtn);

    for (let i=0; 1 < todoItems.length; i++) {
      if (todoItemscompleted = true){
        
      }

    }
    

  }
}


















//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();