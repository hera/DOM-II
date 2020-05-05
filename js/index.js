
// load

document.body.style.opacity = 0;

window.addEventListener('load', (event) => {
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = 1;
    }, 1000);
    
});


// resize

let dimensionsDiv = document.createElement('div');
dimensionsDiv.style.width = '250px';
dimensionsDiv.style.backgroundColor = '#444';
dimensionsDiv.style.color = 'white';
dimensionsDiv.style.position = 'fixed';
dimensionsDiv.style.borderRadius = '10px';
dimensionsDiv.style.top = '20px';
dimensionsDiv.style.right = '20px';
dimensionsDiv.style.transition = 'opacity 0.4s ease';
dimensionsDiv.style.opacity = '0';
dimensionsDiv.style.fontSize = '2rem';
dimensionsDiv.style.padding = '2rem';

document.body.appendChild(dimensionsDiv);

window.addEventListener('resize', (event) => {
    dimensionsDiv.style.opacity = 1;
    dimensionsDiv.textContent = `${window.innerWidth} x ${window.innerHeight}px`;
    setTimeout(() => {
        dimensionsDiv.style.opacity = '0';
    }, 3000);
});


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


// double click

busImage.addEventListener('dblclick', (event) => {
    if (currentImage === imageSources.length - 1) {
        currentImage = 0;
    } else {
        currentImage++;
    }
    busImage.setAttribute('src', imageSources[currentImage]);
});


// scroll

let progressBar = document.createElement('div');

progressBar.style.position = 'fixed';
progressBar.style.left = 0;
progressBar.style.top = '90px';
progressBar.style.height = '5px'
progressBar.style.width = '400px';
progressBar.style.backgroundColor = 'orange';
document.body.prepend(progressBar);


window.addEventListener('scroll', (event) => {
    let htmlTag = document.documentElement;
    let percentage = (window.scrollY + htmlTag.clientHeight) / htmlTag.offsetHeight * 100;
    progressBar.style.width = `${percentage}vw`
});


// click + propagation

let buttons = document.querySelectorAll('.btn');

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        event.currentTarget.style.backgroundColor = 'orange';
        // event.stopPropagation();
    });
}

let destinations = document.querySelectorAll('.destination');

for (let destination of destinations) {
    destination.addEventListener('click', (event) => {
        event.currentTarget.style.backgroundColor = 'orange';
    });
}


// copy

function messageCopied(selection) {
    alert(`You've copied: ${selection}`);
}

window.addEventListener('copy', (event) => {
    messageCopied(document.getSelection().toString());
});