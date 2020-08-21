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
  //access the ol tag to insert list items
  var ol = document.getElementById('todo-list')
  
  for (let index = 0; index < arrayOfTodos.length; index++) {

  //created list item
  var listItem = document.createElement("li");

//loop through attay to poopulate don with each items title
  const elementTitle = arrayOfTodos[index].title
  

//created text to go inside <li> text </li> 
  var listItemText = document.createTextNode(elementTitle);

//append tecxt to the listItem
  listItem.appendChild(listItemText);
  
//append to ol li text li ol
  ol.appendChild(listItem)
  }
}


//Then capture the ol item into a variable (getElementById)


//createElement to make a new li
//createText inside the li using the title property.
// Now append the text to the new element.
// Then append the element to the ol element.
// Put all of that inside your populateTodos function.







//JUANS WORK

// const populateUserSelection = () => {
//   console.log('hey im working')
//   const inputElement = document.getElementById('input')
//   const inputElement = document.querySelector('input')
//   console.log('inputElement:' inputElement)
//   let inputValue = inputElement[0].value
//   //clear array 
//   //filter userId  of the line number in the input
//   todoByUserId = arrayOfTodos.filter(todo =>{
//     console.log('todo.userId', todo)
//     if (todo.userid === inputValue
//       return todo
//     }
//     )
//   //store the new Array
// }
// const removeTodos = {} => {
//   //remove todos
//   //show todos
  




















// }

  // const populateTodos = () => {
  // access the ol tag to insert list items
 // var ol = document.getElementById('todo-list')

  // loop through array to populate dom with each items title
 // for (let index = 0; index < arrayOfTodos.length; index++) {
    // created listItem
    //var listItem = document.createElement("li"); 
    // get array item title
    //const elementTitle = arrayOfTodos[index].title
    // created text to go inside <li> text </li>
   // var listItemText = document.createTextNode(elementTitle); 

    // appended the text to the listItem
   // listItem.appendChild(listItemText);

    // append to <ol> <li> Hi there and greetings! </li> </ol>
   // ol.appendChild(listItem)
 // }
//}