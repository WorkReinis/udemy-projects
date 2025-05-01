let toDoArray = [];

let input = prompt("What would you like to do?");

while (input !== "quit") {
    if (input === "new") {
        let newTask = prompt("Write the new task"); 
        toDoArray.push(newTask);
        console.log(`${input} added to the ToDo list`);
        input = prompt("What would you like to do?"); 
    }


    else if (input === "list") {
        console.log("**********");
        for (let i = 0; i < toDoArray.length; i++) {
            console.log(`${i}. ${toDoArray[i]}`);
        }
        console.log("**********");
        input = prompt("What would you like to do?"); 
    }

    else if (input === "delete") {
        
        if (toDoArray.length === 0 ) {
            input = prompt("Todo list is already empty. What would you like to do?"); 
        }
        
        else {
            console.log("Here's the current Todo list");
            console.log("**********");
            for (let i = 0; i < toDoArray.length; i++) {
                console.log(`${i}. ${toDoArray[i]}`);
            }
            console.log("**********");
            let deleteIndex = parseInt(prompt("Input index of task you'd like to delete"), 10);

            while (isNaN(deleteIndex) || deleteIndex < 0 || deleteIndex >= toDoArray.length) {
                deleteIndex = parseInt(prompt(`Please input a number between 0 and ${toDoArray.length - 1}`), 10);
            }
            console.log(`${toDoArray[deleteIndex]} removed from to do list`);
            toDoArray.splice(deleteIndex, 1);
            
            input = prompt("What would you like to do?");
        }
    }


    else {
    input = prompt("Invalid command. Please input one of the commands");
}



}

console.log("Okay, exiting app")
