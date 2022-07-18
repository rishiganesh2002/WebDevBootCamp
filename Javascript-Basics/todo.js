// Todos are a list of arrays
let todos = [];

let command = prompt("What would you like to do?");

while (command !== "quit" && command !== "q"){
    if(command == "new"){
        const newTodo = prompt("Enter new Todo");
        todos.push(newTodo);
        console.log(`Ok new todo: ${newTodo} added`);
    } else if(command == "list"){
        for(let todo of todos){
            console.log("****************");
            console.log(todo);
            console.log("****************");
        }
    } else if(command == "delete"){
        let deleteIndex = prompt("Enter index to delete todo");
        parseInt(deleteIndex);
        if(!Number.isNaN(deleteIndex)){
            const deleted = todos.splice(deleteIndex, 1);
            console.log(`Deleted ${deleted}`);
        }
        todos.splice(deleteIndex, 1);
    }

    command = prompt("What would you like to do!");
    console.log(command);
}


