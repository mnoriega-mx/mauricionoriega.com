
let golf_theme_button = document.getElementById('golf');
let beach_theme_button = document.getElementById('beach');
let business_theme_button = document.getElementById('business');
let AI_theme_button = document.getElementById('ai');

golf_theme_button.addEventListener('click', clickGolf);
beach_theme_button.addEventListener('click', clickBeach);
business_theme_button.addEventListener('click', clickBusiness);
AI_theme_button.addEventListener('click', clickAI);

let background = document.getElementById("background");
let personal_image = document.getElementById("personal-img");

/* ABOUT ME */
let about_me_bg = document.getElementById("page-2");
let about_me_text = document.getElementById("txt-container");



/* EDUCATION */
let hs_button = document.getElementById("high-school");
let uni_button = document.getElementById("university");
let cer_button = document.getElementById("certifications");

let hs_transcript_button = document.getElementById("hs-transcript");
let hs_diploma_button = document.getElementById("hs-diploma");
let ib_diploma_button = document.getElementById("ib-diploma");

hs_button.addEventListener('click', clickHS);
uni_button.addEventListener('click', clickUni);
cer_button.addEventListener('click', clickCer);

hs_transcript_button.addEventListener('click', clickTranscript);
hs_diploma_button.addEventListener('click', clickHSdiploma);
ib_diploma_button.addEventListener('click', clickIBdiploma);

let title = document.getElementById("education-h1");
let educationTxt = document.getElementById("education-txt");
let doc = document.getElementById("doc");
let diploma_navbar = document.getElementById("diploma-navbar");
let grad_date = document.getElementById("grad-date");

let hs_string = "Graduated from Prepa Tec Santa Catarina from Honors program with final average of 90.5";
let uni_string = "First year student at Tec de Monterrey. Currently studying B.S in Computer Science";
let cer_string = ""



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

    about_me_bg.style.backgroundImage = "url(Assets/SanPedro.jpeg)";
    about_me_text.style.backgroundColor = "rgba(138, 138, 138, 0.5)";
}

function clickAI() {
    background.style.backgroundImage = "url('Assets/AIWallpaper.png')";
    personal_image.src = "Assets/MAU_AI.JPG";

    about_me_bg.style.backgroundImage = "url(Assets/AI2.jpeg)";
    about_me_text.style.backgroundColor = "rgb(236, 123, 17)";
}

function clickHS() {
    title.innerHTML = "High School";
    educationTxt.innerHTML = hs_string;
    diploma_navbar.style.display = "block"
    doc.src = "Assets/TranscriptHS.pdf#toolbar=0";
    grad_date.hidden = true;
    doc.style.width = "448px"
    doc.style.height = "571px"
    hs_transcript_button.style.border = "2px solid white"
    hs_diploma_button.style.border = "none"
    ib_diploma_button.style.border = "none"
}

function clickUni() {
    title.innerHTML = "University";
    educationTxt.innerHTML = uni_string;
    diploma_navbar.style.display = "none";
    doc.src = "";
    doc.style.border = "none"
    grad_date.hidden = false;
}

function clickCer() {
    title.innerHTML = "Certificates";
    educationTxt.innerHTML = cer_string;
    diploma_navbar.style.display = "none";
    doc.src = "Assets/Certifications.pdf#toolbar=0";
    grad_date.hidden = true;
    doc.style.width = "448px"
    doc.style.height = "625px"
}

function clickTranscript() {
    doc.style.width = "448px"
    doc.style.height = "571px"
    doc.src = "Assets/TranscriptHS.pdf#toolbar=0";
    hs_transcript_button.style.border = "2px solid white"
    hs_diploma_button.style.border = "none"
    ib_diploma_button.style.border = "none"
}

function clickHSdiploma() {
    doc.style.width = "715px"
    doc.style.height = "512px"
    doc.src = "Assets/DiplomaPrepa.pdf#toolbar=0";
    hs_transcript_button.style.border = "none"
    hs_diploma_button.style.border = "2px solid white"
    ib_diploma_button.style.border = "none"
}

function clickIBdiploma() {
    doc.style.width = "448px"
    doc.style.height = "625px"
    doc.src = "Assets/DiplomaIB.pdf#toolbar=0";
    hs_transcript_button.style.border = "none"
    hs_diploma_button.style.border = "none"
    ib_diploma_button.style.border = "2px solid white"
}

