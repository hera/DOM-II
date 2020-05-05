/*

* [x] `mouseover`
* [ ] `keydown`
* [ ] `wheel`
* [ ] `drag / drop`
* [ ] `load`
* [ ] `focus`
* [ ] `resize`
* [ ] `scroll`
* [ ] `select`
* [ ] `dblclick`

*/


// mouseover + mouseout

let images = document.querySelectorAll('img');

for (let img of images) {
    img.addEventListener('mouseover', (event) => {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "1s ease";
    });
    
    img.addEventListener('mouseout', (event) => {
        event.target.style.transform = "";
    });
}

