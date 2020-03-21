export function eventListeners(list){
    let removeButtons = document.querySelectorAll('.remove');
    removeButtons.forEach(item => {
        item.addEventListener('click', () => {
            list.forEach((item, index) => {
                console.log(item);
            });
    });

    let completeButtons = document.querySelectorAll('.complete');
    completeButtons.forEach(item => {
        item.addEventListener('click', () => {
            console.log(list);
        });
    });
}