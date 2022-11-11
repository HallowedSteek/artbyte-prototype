// Variables
contentToggleButton = document.querySelector("figure button");
contentToToggle = document. querySelector(".hide");


document.addEventListener('click', function() {
    if (event.target == contentToggleButton || contentToggleButton.contains(event.target)) {
        contentToToggle.classList.toggle('show');
        contentToggleButton.classList.toggle('active');
        if (contentToggleButton.classList.contains('active')) {
            contentToToggle.scrollIntoView({behavior: "smooth"});
        }
    }
})