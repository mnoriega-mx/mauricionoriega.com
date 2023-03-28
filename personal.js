let golf_theme_button = document.getElementById('golf');
let beach_theme_button = document.getElementById('beach');
let business_theme_button = document.getElementById('business');

let background = document.getElementById("background");

let personal_image = document.getElementById("personal-img");

golf_theme_button.addEventListener('click', clickGolf);
beach_theme_button.addEventListener('click', clickBeach);
business_theme_button.addEventListener('click', clickBusiness);

function clickGolf() {
    background.style.backgroundImage = "url('Augusta16th.jpg')";
}

function clickBeach() {
    background.style.backgroundImage = "url('Cacaluta.jpeg')";
    personal_image.src = "MauBuzo.jpeg";
}

function clickBusiness() {
    background.style.backgroundImage = "url('Professional.jpeg')";
    personal_image.src = "FotoMau.jpeg";
}
