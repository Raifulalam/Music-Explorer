// for navbar responsive (togglenav)

const toggle = document.querySelector('.icon')
toggle.addEventListener('click', toggleNav)
toggle.style.color = 'white'
function toggleNav() {
    const nav = document.getElementById("myTopnav");
    if (nav.className === "topnav") {
        nav.className += " responsive";
    } else {
        nav.className = "topnav";
    }
}

//for music quotes 
const musicQuotes = [
    "Music is the universal language of mankind.",
    "Without music, life would be a mistake.",
    "Music expresses that which cannot be said and on which it is impossible to be silent.",
    "Where words fail, music speaks.",
    "Music is the shorthand of emotion.",
    "One good thing about music, when it hits you, you feel no pain.",
    "Music washes away from the soul the dust of everyday life.",
    "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything.",
    "Music can change the world because it can change people.",
    "Music is the strongest form of magic.",
    "To stop the flow of music would be like the stopping of time itself, incredible and inconceivable.",
    "Music is the divine way to tell beautiful, poetic things to the heart.",
    "Music is the art which is most nigh to tears and memory.",
    "Music is the literature of the heart; it commences where speech ends.",
    "Music is the wine that fills the cup of silence.",
    "Music is like a dream. One that I cannot hear.",
    "Music is a higher revelation than all wisdom and philosophy.",
    "Music is to the soul what words are to the mind.",
    "Music is the mediator between the spiritual and the sensual life.",
    "Music in the soul can be heard by the universe.",
    "Music is well said to be the speech of angels.",
    "Music is a moral law. It gives soul to the universe, wings to the mind, flight to the imagination, and charm and gaiety to life and to everything.",
    "Music is the poetry of the air.",
    "Music is the great uniter. An incredible force. Something that people who differ on everything and anything else can have in common.",
    "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    "Music is the key to the female heart.",
    "Music touches us emotionally, where words alone can't.",
    "Music is the language of memory.",
    "Music is the soundtrack of your life.",
    "Music is a safe kind of high.",
    "Music is the art of thinking with sounds.",
    "Music is love in search of a word.",
    "Music is the moonlight in the gloomy night of life.",
    "Music is the divine way to tell beautiful, poetic things to the heart.",
    "Music is the poetry of the air.",
    "Music is the great uniter. An incredible force. Something that people who differ on everything and anything else can have in common.",
    "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    "Music is the key to the female heart.",
    "Music touches us emotionally, where words alone can't.",
    "Music is the language of memory.",
    "Music is the soundtrack of your life.",
    "Music is a safe kind of high.",
    "Music is the art of thinking with sounds.",
    "Music is love in search of a word.",
    "Music is the moonlight in the gloomy night of life.",
    "Music is what feelings sound like.",
    "Music is the strongest form of magic.",
    "Music is the wine that fills the cup of silence.",
    "Music expresses that which cannot be put into words and that which cannot remain silent.",
    "Music can change the world because it can change people.",
    "Music is the universal language of mankind.",
    "Music is the voice of the soul.",
    "Music is the art of thinking with sounds.",
    "Music is the literature of the heart; it commences where speech ends.",
    "Music is the divine way to tell beautiful, poetic things to the heart.",
    "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    "Music is the key to the female heart.",
    "Music touches us emotionally, where words alone can't.",
    "Music is the language of memory.",
    "Music is the soundtrack of your life.",
    "Music is a safe kind of high.",
    "Music is love in search of a word.",
    "Music is the moonlight in the gloomy night of life.",
    "Music is what feelings sound like.",
    "Music is the strongest form of magic.",
    "Music is the wine that fills the cup of silence.",
    "Music expresses that which cannot be put into words and that which cannot remain silent.",
    "Music can change the world because it can change people.",
    "Music is the universal language of mankind.",
    "Music is the voice of the soul.",
    "Music is the art of thinking with sounds.",
    "Music is the literature of the heart; it commences where speech ends.",
    "Music is the divine way to tell beautiful, poetic things to the heart.",
    "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    "Music is the key to the female heart.",
    "Music touches us emotionally, where words alone can't.",
    "Music is the language of memory.",
    "Music is the soundtrack of your life.",
    "Music is a safe kind of high.",
    "Music is love in search of a word.",
    "Music is the moonlight in the gloomy night of life.",
    "Music is what feelings sound like.",
    "Music is the strongest form of magic.",
    "Music is the wine that fills the cup of silence.",
    "Music expresses that which cannot be put into words and that which cannot remain silent.",
    "Music can change the world because it can change people.",
    "Music is the universal language of mankind.",
    "Music is the voice of the soul.",
    "Music is the art of thinking with sounds.",
    "Music is the literature of the heart; it commences where speech ends.",
    "Music is the divine way to tell beautiful, poetic things to the heart.",
    "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
    "Music is the key to the female heart.",
    "Music touches us emotionally, where words alone can't.",
    "Music is the language of memory.",
    "Music is the soundtrack of your life.",
    "Music is a safe kind of high.",
    "Music is love in search of a word.",
    "Music is the moonlight in the gloomy night of life.",
    "Music is what feelings sound like.",
    "Music is the strongest form of magic.",
    "Music is the wine that fills the cup of silence.",
    "Music expresses that which cannot be put into words and that which cannot remain silent.",
    "Music can change the world because it can change people."
];

// Accessing a random quote
const randomQuote = musicQuotes[Math.floor(Math.random() * musicQuotes.length)];
document.querySelector('.randompara p').innerHTML = randomQuote;
let feedback = document.querySelector(".feedback");
const sendBtn = document.getElementById('sendBtn');
sendBtn.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    name = name.toUpperCase();
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    console.log(name, email, message);
    feedback.style.color = "#fff";
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
    } else {
        feedback.style.display = "block";
        feedback.innerHTML = `Dear ${name}, thank you for your feedback. We will get back to
            you soon. Your email is ${email} and your message is ${message}.`;
    }
})
document.querySelector('.footerp').textContent = `© ${new Date().getFullYear()}  All rights reserved `;

