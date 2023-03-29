let golf_theme_button = document.getElementById('golf');
let beach_theme_button = document.getElementById('beach');
let business_theme_button = document.getElementById('business');
let AI_theme_button = document.getElementById('AI');

let background = document.getElementById("background");

let personal_image = document.getElementById("personal-img");

let about_me_bg = document.getElementById("page-2");

golf_theme_button.addEventListener('click', clickGolf);
beach_theme_button.addEventListener('click', clickBeach);
business_theme_button.addEventListener('click', clickBusiness);
AI_theme_button.addEventListener('click', clickAI);

function clickGolf() {
    background.style.backgroundImage = "url('Assets/Augusta16th.jpg')";
    personal_image.src = "Assets/Chip.jpeg";
}

function clickBeach() {
    background.style.backgroundImage = "url('Assets/Cacaluta.jpeg')";
    personal_image.src = "Assets/MauBuzo.jpeg";
}

function clickBusiness() {
    background.style.backgroundImage = "url('Assets/Professional.jpeg')";
    personal_image.src = "Assets/FotoMau.jpeg";

    about_me_bg.style.backgroundImage = "url(Assets/SanPedro.jpeg)"
}

function clickAI() {
    background.style.backgroundImage = "url('Assets/AIWallpaper.png')";
    personal_image.src = "Assets/MAU_AI.JPG";

    about_me_bg.style.backgroundImage = "url(Assets/AI2.jpeg)"
}
