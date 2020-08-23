let arrayOfTodos = [
  {
  "userId": 14,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
},
{
  "userId": 20,
  "id": 2,
  "title": "delectus aut autem",
  "completed": false
}]
console.log('userid', arrayOfTodos[0].userId)
const fetchTodos = () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then( (response) => response.json())
  .then( (json) => arrayOfTodos = json)
}

const logTodos = () => {
  console.log(arrayOfTodos)
}

const populateTodos = () => {
  
  var ol = document.getElementById('todo-list')
  
  for (let index = 0; index < 20; index++) {

  var listItem = document.createElement("li");
  const elementTitle = arrayOfTodos[index].title
  var listItemText = document.createTextNode(elementTitle);
  listItem.appendChild(listItemText);
  ol.appendChild(listItem)
  listItem.setAttribute("id","liid")
 
  

var isComplete = arrayOfTodos[index].completed;
  
 for (let index = 0; index < 20; index++) {
   
    if (isComplete){
      (listItem.style.backgroundColor = "lightpink")
   }
   else{
    (listItem.style.backgroundColor = "#FF0120")
   }

console.log(isComplete)
}
}
}

let resetTodos = () => {   
  for (let i=0; i < 500; i++){   
    var myobj = document.getElementById("liid");   
    myobj.remove();
  } 
}