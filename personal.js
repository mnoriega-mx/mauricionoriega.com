

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

let hsActive = true;

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
let uni_string = "Second year student at Tec de Monterrey. Currently studying B.S in Computer Science";
let cer_string = ""

let classes1S = document.getElementById("1s-classes");
let classes2S = document.getElementById("2s-classes");
let classes3S = document.getElementById("3s-classes");



/* PORTFOLIO*/
let investor_button = document.getElementById("investor");
let mathJump_button = document.getElementById("math-jump");
let ticTacToe_button = document.getElementById("tic-tac-toe");
let memoryGame_button = document.getElementById("memory-game");
let oms_button = document.getElementById("oms");

let mathJumpCover = document.getElementById("container-5")
let ticTacToeCover = document.getElementById("container-1")
let memoryGameCover = document.getElementById("container-3")
let omsCover = document.getElementById("container-7")
let loteryCover = document.getElementById("container-9")

let project_view = document.getElementById("project");
let backButton = document.getElementById("back-to-portfolio");

let project_image = document.getElementById("project-image");
let project_text = document.getElementById("project-text");

let mathJump_string = "The objective of Math Jump is to encourage young students to practice their math skills in a fun way. Math Jump is fully programed on Python, and can run in all operating systems.";
let ticTacToe_string = "This classic game of Tic Tac Toe runs in the web, and was created from scratch using HTML, CSS and JavaScript. It is a two player game, and the first player to get three in a row wins. This website is currently hosted on GitHub Pages.";
let memoryGame_stringf = "This memory game is a fun project made to compete head to head with your friends. The objective of the game is to find all the pairs of cards before your opponent does. This project was fully coded in python and runs on your terminal.";
let oms_string = "OMS is a project made to simulate a business managing sales and inventory. In this case, GameStop is the business that is being simulated. This project was fully coded in python and runs on your terminal. This is my first ever coding project 3 years ago.";
let investor_string = "Mr. Investor is an interactive chatbot programmed to help you be finnancially responsible. This project was coded using Next.js and integrates the OpenAI API.";

mathJump_button.addEventListener('click', clickMathJump);
mathJump_button.addEventListener('mouseover', hoverMathJump);
mathJump_button.addEventListener('mouseout', notHoverMathJump);

ticTacToe_button.addEventListener('click', clickTicTacToe);
ticTacToe_button.addEventListener('mouseover', hoverTicTacToe);
ticTacToe_button.addEventListener('mouseout', notHoverTicTacToe);

memoryGame_button.addEventListener('click', clickMemoryGame);
memoryGame_button.addEventListener('mouseover', hoverMemoryGame);
memoryGame_button.addEventListener('mouseout', notHoverMemoryGame);

oms_button.addEventListener('click', clickOMS);
oms_button.addEventListener('mouseover', hoverOMS);
oms_button.addEventListener('mouseout', notHoverOMS);

investor_button.addEventListener('click', clickLotery);
investor_button.addEventListener('mouseover', hoverLotery);
investor_button.addEventListener('mouseout', notHoverLotery);

backButton.addEventListener('click', clickBack)



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

    about_me_bg.style.backgroundImage = "";
    about_me_text.style.backgroundColor = "";
}

function clickAI() {
    background.style.backgroundImage = "url('Assets/AIWallpaper.png')";
    personal_image.src = "Assets/MAU_AI.JPG";
}

function clickHS() {
    title.innerHTML = "High School";
    educationTxt.innerHTML = hs_string;
    diploma_navbar.style.display = "block"
    doc.src = "Assets/TranscriptHS.pdf#toolbar=0";
    grad_date.hidden = true;
    doc.style.width = "448px";
    doc.style.height = "571px";
    hs_transcript_button.style.border = "2px solid white";
    hs_diploma_button.style.border = "none";
    ib_diploma_button.style.border = "none";
    hs_transcript_button.innerHTML = "High School Transcript";
    hs_diploma_button.innerHTML = "High School Diploma";
    ib_diploma_button.innerHTML = "IB Diploma";
    doc.style.display = "block";
    classes1S.hidden = true;
    classes2S.hidden = true;
    classes3S.hidden = true;
    hsActive = true;
}

function clickUni() {
    title.innerHTML = "University";
    educationTxt.innerHTML = uni_string;
    hs_transcript_button.style.border = "2px solid white";
    hs_diploma_button.style.border = "none";
    ib_diploma_button.style.border = "none";
    hs_transcript_button.innerHTML = "1st Semester";
    hs_diploma_button.innerHTML = "2nd Semester";
    ib_diploma_button.innerHTML = "3rd Semester";
    diploma_navbar.style.display = "block";
    doc.src = "";
    doc.style.border = "none";
    grad_date.hidden = false;
    classes1S.hidden = false;
    hsActive = false;
}

function clickCer() {
    title.innerHTML = "Certificates";
    educationTxt.innerHTML = cer_string;
    diploma_navbar.style.display = "none";
    doc.src = "Assets/Certifications.pdf#toolbar=0";
    grad_date.hidden = true;
    doc.style.width = "448px";
    doc.style.height = "625px";
    doc.style.display = "block";
    classes1S.hidden = true;
    classes2S.hidden = true;
    classes3S.hidden = true;
}

function clickTranscript() {

    if (hsActive) {
        doc.style.width = "448px";
        doc.style.height = "571px";
        doc.src = "Assets/TranscriptHS.pdf#toolbar=0";
        hs_transcript_button.style.border = "2px solid white";
        hs_diploma_button.style.border = "none";
        ib_diploma_button.style.border = "none";
    } else {
        classes1S.hidden = false;
        classes2S.hidden = true;
        classes3S.hidden = true;
    }
    
}

function clickHSdiploma() {
    if (hsActive) {
        doc.style.width = "715px";
        doc.style.height = "512px";
        doc.src = "Assets/DiplomaPrepa.pdf#toolbar=0";
        hs_transcript_button.style.border = "none";
        hs_diploma_button.style.border = "2px solid white";
        ib_diploma_button.style.border = "none";
    } else {
        classes1S.hidden = true;
        classes2S.hidden = false;
        classes3S.hidden = true;
    }
    
    
}

function clickIBdiploma() {
    if (hsActive) {
        doc.style.width = "448px";
        doc.style.height = "625px";
        doc.src = "Assets/DiplomaIB.pdf#toolbar=0";
        hs_transcript_button.style.border = "none";
        hs_diploma_button.style.border = "none";
        ib_diploma_button.style.border = "2px solid white";
    } else {
        classes1S.hidden = true;
        classes2S.hidden = true;
        classes3S.hidden = false;
    }
    
    
}

function clickMathJump() {
    project_view.style.display= 'flex';
    project_image.src = "Assets/MathJump.png";
    project_text.innerHTML = mathJump_string;
}
function hoverMathJump() {
    mathJumpCover.style.border = "5px solid white";
}
function notHoverMathJump() {
    mathJumpCover.style.border = "none";
}

function clickTicTacToe() {
    project_view.style.display= 'flex';
    project_image.src = "Assets/TicTacToe.png";
    project_text.innerHTML = ticTacToe_string;

}
function hoverTicTacToe() {
    ticTacToeCover.style.border = "5px solid white";
}
function notHoverTicTacToe() {
    ticTacToeCover.style.border = "none";
}

function clickMemoryGame() {
    project_view.style.display= 'flex';
    project_image.src = "Assets/MemoryGame.png";
    project_text.innerHTML = memoryGame_stringf;
}
function hoverMemoryGame() {
    memoryGameCover.style.border = "5px solid white";
}
function notHoverMemoryGame() {
    memoryGameCover.style.border = "none";
}

function clickOMS() {
    project_view.style.display= 'flex';
    project_image.src = "Assets/OMS.png";
    project_text.innerHTML = oms_string;
}
function hoverOMS() {
    omsCover.style.border = "5px solid white";
}
function notHoverOMS() {
    omsCover.style.border = "none";
}

function clickLotery() {
    project_view.style.display= 'flex';
    project_image.src = "Assets/mrinvestor.png";
    project_text.innerHTML = investor_string;
}
function hoverLotery() {
    loteryCover.style.border = "5px solid white";
}
function notHoverLotery() {
    loteryCover.style.border = "none";
}

function clickBack() {
    project_view.style.display= 'none';
 }
