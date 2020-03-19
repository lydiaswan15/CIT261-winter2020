let arrayName = document.querySelectorAll('audio');
let divArray = document.querySelectorAll('div[data-key]');


document.addEventListener('keypress', (anything) => {  
    switch (anything.keyCode) {
        case 65:
            let bang = document.querySelector('audio[data-key = "65"]');
            bang.play();
            bang.currentTime = 0;
            let div1 = document.querySelector('div[data-key = "65"]');
            addClass(div1);
            break;
        case 83:
            let bang1 = document.querySelector('audio[data-key = "83"]');
            bang1.play();
            bang1.currentTime = 0;
            let div2 = document.querySelector('div[data-key = "83"]');
            addClass(div2);
            break;
        case 68:
            let bang2 = document.querySelector('audio[data-key = "68"]');
            bang2.play();
            bang2.currentTime = 0;
            let div3 = document.querySelector('div[data-key = "68"]');
            addClass(div3);
            break;
        case 70:
            let bang3 = document.querySelector('audio[data-key = "70"]');
            bang3.play();
            bang3.currentTime = 0;
            let div4 = document.querySelector('div[data-key = "70"]');
            addClass(div4);
            break;
        case 71:
            let bang4 = document.querySelector('audio[data-key = "71"]');
            bang4.play();
            bang4.currentTime = 0;
            let div5 = document.querySelector('div[data-key = "71"]');
            addClass(div5);
            break;
        case 72:
            let bang5 = document.querySelector('audio[data-key = "72"]');
            bang5.play();
            bang5.currentTime = 0;
            let div6 = document.querySelector('div[data-key = "72"]');
            addClass(div6);
            break;
        case 74:
            let bang6 = document.querySelector('audio[data-key = "74"]');
            bang6.play();
            bang6.currentTime = 0;
            let div7 = document.querySelector('div[data-key = "74"]');
            addClass(div7);
            break;
        case 75:
            let bang7 = document.querySelector('audio[data-key = "75"]');
            bang7.play();
            bang7.currentTime = 0;
            let div8 = document.querySelector('div[data-key = "75"]');
            addClass(div8);
            break;
        case 76:
            let bang8 = document.querySelector('audio[data-key = "76"]');
            bang8.play();
            bang8.currentTime = 0;
            let div9 = document.querySelector('div[data-key = "76"]');
            addClass(div9);
            break;

    }
});

function addClass(divName){
    divName.classList.add("playing");

    divName.style.marginTop = '10px';
    setTimeout(() => {
        divName.classList.remove("playing");
    }, 500);


};