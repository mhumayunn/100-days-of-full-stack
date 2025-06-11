
function AddTask() {
    console.log("function called!");
    // get input element
    const input=document.getElementById("todo-input");
    //get the text that the user typed
    const task = input.value.trim();
    //start with base case
    if(task === "") 
    {
        return; //don't want to add any empty tasks
    }
    const list = document.getElementById('todo-list');
    //create a new list ITEM
    const newItem = document.createElement("li");
    console.log("after creating new item")
    //set the text of the list item
    newItem.innertext=task;
    //add the list item to the list
    list.appendChild(newItem);
    console.log("after append!")
    //then clear the input box
    input.value ="";
}