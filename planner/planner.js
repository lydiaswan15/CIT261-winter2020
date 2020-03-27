import Item from './Item.js';
import {getFullDate, getTodayDate} from "./date.js";
import {movingEventListeners} from './eventListeners.js';


let item = new Item();

document.querySelector('#newItemButton').addEventListener('click', item.createNewItem);

//Adding the date to the opening page. 
 
    //Getting today's date and adding that.
    const fullDate = getFullDate();
    const todayDate = getTodayDate();

    document.getElementById('todayDate').innerHTML = fullDate;
    document.getElementById('todaysDatePageOne').innerHTML = todayDate;


//Adding event listeners to the right and left buttons that move the screen depending on the direction. 

const rightButtons = document.querySelectorAll('.rightButtons');
console.log(rightButtons);
rightButtons.addEventListener('click', movingEventListeners);






