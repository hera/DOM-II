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
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = '1s ease';
    });
    
    img.addEventListener('mouseout', (event) => {
        event.target.style.transform = '';
    });
}


// keydown

let imageSources = ['img/fun-bus.jpg', 'img/snow.jpg', 'img/tree.jpg', 'img/house.jpg'];
let currentImage = 0;

let busImage = document.querySelector('.container .intro img');
busImage.style.transition = 'all 1s ease';

window.addEventListener('keydown', (event) => {

    // left arrow button

    if (event.keyCode == 37) {
        if (currentImage === 0) {
            currentImage = imageSources.length - 1;
        } else {
            currentImage--;
        }
        busImage.setAttribute('src', imageSources[currentImage]);
    }

    // right arrow button

    if (event.keyCode == 39) {
        if (currentImage === imageSources.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
        busImage.setAttribute('src', imageSources[currentImage]);
    }
});
