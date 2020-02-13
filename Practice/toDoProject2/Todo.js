
let input = document.getElementById('text');
let totalList = [];
let totalContent = document.createElement('li');

function format(){
    document.querySelector('#toDoDiv').innerHTML = "";

    for(let i = 0; i < totalList.length; i++){

        console.log(i);

        //text

        let newContent = `
        <div>
        ${totalList[i].content}
        <button id = ${totalList[i].id}id>Remove</button>
        <button>Complete</button>
        </div>`;

        console.log(newContent);

        document.querySelector('#toDoDiv').innerHTML += newContent;

        addEventListener(totalList[i].id+"id");
        
    }
}

function addEventListener(current){
    
    document.getElementById(current).addEventListener('click', remove);
}

function remove(current){
    console.log("hello");
}

export default class Todo{

    constructor(){
    }

    createNewTodo(){
        //adds the text from there to the array of total items.

        let newTodoItem = document.querySelector('#text').value;
        const newTodo = {id: new Date(), content: newTodoItem, completed: false};

        totalList.push(newTodo);

        format();
        return this.totalList;
    }

    remove(){
        console.log("worked");
    }
    
    


}