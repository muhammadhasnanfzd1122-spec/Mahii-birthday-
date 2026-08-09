/* ========================= */
/* PASSWORD */
/* ========================= */

const PASSWORD = "0000";

/* ========================= */
/* ELEMENTS */
/* ========================= */

const introPage = document.getElementById("introPage");
const loginPage = document.getElementById("loginPage");
const loadingPage = document.getElementById("loadingPage");
const letterPage1 = document.getElementById("letterPage1");
const birthdayPage = document.getElementById("birthdayPage");
const galleryPage = document.getElementById("galleryPage");
const giftPage = document.getElementById("giftPage");
const finalLetterPage = document.getElementById("finalLetterPage");
const thanksPage = document.getElementById("thanksPage");

const photo = document.getElementById("photo");
const music = document.getElementById("music");
const typingText = document.getElementById("typingText");

/* ========================= */
/* PAGE SYSTEM */
/* ========================= */

function hideAll() {

document.querySelectorAll(".page").forEach(page=>{

page.classList.remove("active");

});

}

function show(page){

hideAll();

page.classList.add("active");

}

/* ========================= */
/* INTRO */
/* ========================= */

function goPassword(){

show(loginPage);

}

/* ========================= */
/* PASSWORD CHECK */
/* ========================= */

function checkPassword(){

let pass=document.getElementById("password").value;

if(pass===PASSWORD){

show(loadingPage);

setTimeout(()=>{

show(letterPage1);

},2500);

}else{

document.getElementById("error").innerHTML=
"❌ Wrong Password";

}

}

/* ========================= */
/* OPEN PAGES */
/* ========================= */

function openBirthday(){

show(birthdayPage);

if(music){

music.play().catch(()=>{});

}

}

function openGallery(){

show(galleryPage);

}

function openGift(){

show(giftPage);

}

function openFinalLetter(){

show(finalLetterPage);

startTyping();

}

function openThanks(){

show(thanksPage);

}

/* ========================= */
/* PHOTO SLIDESHOW */
/* ========================= */

const photos=[

"Photo1.jpg",
"Photo2.jpg",
"Photo3.jpg",
"Photo4.jpg",
"Photo5.jpg",
"Photo6.jpg",
"Photo7.jpg",
"Photo8.jpg",
"Photo9.jpg",
"Photo10.jpg"

];

let current=0;

if(photo){

setInterval(()=>{

current++;

if(current>=photos.length){

current=0;

}

photo.src=photos[current];

},3000);

}

/* ========================= */
/* TYPEWRITER */
/* ========================= */

const message=`💖 Dear Maahi ❤️

Happy Birthday To The Most Amazing Best Friend 🎂

Thank you for always being there.

For every smile,
every memory,
every crazy moment,
and every beautiful friendship.

You are truly special.

May Allah bless you with happiness,
success,
love,
good health,
and endless smiles.

Never stop shining. ✨

Forever Best Friends ❤️

- Izaaaa 🌸`;

let i=0;

function startTyping(){

typingText.innerHTML="";

i=0;

typeWriter();

}

function typeWriter(){

if(i<message.length){

typingText.innerHTML+=message.charAt(i);

i++;

setTimeout(typeWriter,35);

}

}

/* ========================= */
/* HEARTS */
/* ========================= */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,700);

/* ========================= */
/* PETALS */
/* ========================= */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
(6+Math.random()*5)+"s";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

}

setInterval(createPetal,1200);

/* ========================= */
/* FIREWORKS */
/* ========================= */

function createFirework(){

const fire=document.createElement("div");

fire.className="firework";

fire.innerHTML="✨";

fire.style.left=Math.random()*100+"vw";

fire.style.top=Math.random()*70+"vh";

document.body.appendChild(fire);

setTimeout(()=>{

fire.remove();

},1200);

}

setInterval(createFirework,2500);

/* ========================= */
/* MUSIC SUPPORT */
/* ========================= */

document.addEventListener("click",()=>{

if(music && music.paused){

music.play().catch(()=>{});

}

},{once:true});