import Item from './Item.js';
import {getFullDate, getTodayDate} from "./date.js";
import {leftAndRight} from "./eventListeners.js";



let item = new Item();
document.getElementById('newItemButton').addEventListener('click', item.createNewItem);

//Adding event listeners to the right and left buttons that move the screen depending on the direction. 
//first right button
let rightButtons = document.querySelectorAll('.rightButtons');
let fullText = document.querySelector('body');
rightButtons.forEach((item) =>{
    item.addEventListener('click', ()=>{
        fullText.classList.add('rightMove');
        leftAndRight();
    })
});

//second right button

let rightButton2 = document.querySelector('#rightButton2');

rightButton2.addEventListener('click', ()=>{
    fullText.classList.add('rightMove2');
    
});

//first right button
let leftButtons = document.querySelector('#leftButton1');
leftButtons.addEventListener('click', ()=>{
    fullText.classList.add('leftMove');
    fullText.classList.remove('rightMove')
});

//second right button

let leftButton2 = document.querySelector('#leftButton2');

leftButton2.addEventListener('click', ()=>{
    fullText.classList.add('leftMove2');
    console.log('welp');
});

//Adding the date to the opening page. 
 
    //Getting today's date and adding that.
    const fullDate = getFullDate();
    const todayDate = getTodayDate();

    document.getElementById('todayDate').innerHTML = fullDate;
    document.getElementById('todaysDatePageOne').innerHTML = todayDate;

 








