

function getJson(url){
    return fetch(url)
        .then((response) => {
            console.log(response);
            if(response.ok){
                return response.json();
            }
            else{
                throw new Error('not ok');
                console.log('will not run');
            }
        })

    .catch(err => {
        consol.elog(err);
    });

}
        
getJson('foods.json').then((data) => {
    console.log(data);
});


function longProcess(){

    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            if(true){
                resolve(42);
            }
            else{
                reject('It did not work');
            }
            }, 200); 
    })
}

//when this is all completed, then it will return 42 back and put it back into the function where it is called above. 
longProcess().then((response) => {
    const total = 100 + response;
    console.log("total", total);
});

const baseUrl = 'https://pokeapi.co/api/v2/';

getJson(baseUrl + 'pokemon').then((data) => {
   buildList(data.results);
});

function buildList(pokemon){
    const element = document.getElementById('listElement');
    element.innerHTML = pokemon.map((item) =>{
        return `<li><a href = "${item.url}">${item.name}</a></li>`;
    }).join('');
}