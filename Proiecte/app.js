// Variables
contentToggleButton = document.querySelector("figure button");
contentToToggle = document.querySelector(".hide");
revealOptions = {
    distance: '100px',

}

document.addEventListener('click', function() {
    if (event.target == contentToggleButton || contentToggleButton.contains(event.target)) {
        contentToToggle.classList.toggle('show');
        contentToggleButton.classList.toggle('active');
        if (contentToggleButton.classList.contains('active')) {
            contentToToggle.scrollIntoView({ behavior: "smooth" });
        }
    }
})

ScrollReveal().reveal('.reveal', {
    scale: 0.75,
    easing: 'cubic-bezier(.2,.6,.76,1.19)',
    duration: 250,
    distance: '150px',
    interval: 100,
    origin: 'top',
})


// preload pricing illustration
var img = new Image();
img.src = "/img/license.svg";