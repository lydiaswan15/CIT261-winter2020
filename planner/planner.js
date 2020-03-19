import Item from './Item.js';

let item = new Item();

document.querySelector('#newItemButton').addEventListener('click', item.createNewItem);
document.querySelector('#newItemButton').addEventListener('click', item.format);