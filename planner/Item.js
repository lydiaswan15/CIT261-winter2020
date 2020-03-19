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
                <button id = "#${oneDayList[i].id}">Complete</button>
                <button class = "remove">Remove</button>`
            document.querySelector('#bodySection').innerHTML += htmlFormatting;
        }
    }

}

