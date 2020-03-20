let oneDayList = [];

export default class Item{
    createNewItem(){
        const contentInfomation = document.getElementById('itemId').value;
        const newItem = {id: new Date().getTime(), content: contentInfomation}
        oneDayList.push(newItem);
        console.log(oneDayList);
        return this.oneDayList;
    }

    format(){
        document.querySelector('#bodySection').innerHTML = "";
        for(let i = 0; i < oneDayList.length; i++){
            const htmlFormatting = `
                ${oneDayList[i].content}
                <button id = "#${oneDayList[i].id}" class = "remove">Complete</button>
                <button class = "complete">Remove</button>`
            document.querySelector('#bodySection').innerHTML += htmlFormatting;
        }
        oneDayList.forEach((element) =>{
            document.getElementById('#' + element.id).addEventListener('click', this.createNewItem);
        })
    }

    eventListeners(){
        document.querySelectorAll('.remove').forEach(item =>{
            item.addEventListener('click', item =>{
                
                if(item.id == item.target.id){
                    console.log('they match');
                }
            })
        })

    }
}

