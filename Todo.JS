let input =prompt('what would you like todo?');
const todos=['lion', 'Tiger']

while (input !=='quit' && input !=='q') {

    if(input === 'list') {
        console.log('**********');
        for(let i=0; i<todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('**********');

    } else if(input === 'new'){
        const newTodo = prompt('Ok, what is the new Todo!');
        todos.push(newTodo);
        console.log(`${newTodo} addded to the list`);

    } else if(input === 'delete') {
        const index =parseInt(prompt('Ok, enter an index to delete:'));
        if(!Number.isNaN(index)){
       const deleted= todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);

    }  else {

        console.log('Unkmown Index')
    }
    }

     input = prompt('what would you like todo?');
}
console.log('OK, YOU QUIT!!!');
