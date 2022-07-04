// code to generate random Simpsons quote on button click
//blank array that will store quotes for random generation
const quoteArray = [];

//factory function to create objects of quotes & citations
function newQuote(quote, character, episode, pic) {
    return {
        quote: quote,
        character: character,
        episode: episode,
        pic: pic
    }
};

//create objects of quotes & citations, put quotes in array
let quote1 = newQuote("This town is a part of us all. A part of us all. A part of us all. Sorry to repeat myself, but it will help you remember", 
"Marge Simpson", "Lemon of Troy (S06E24)", "./images/part-of-us-all.jpg");
quoteArray.push(quote1);

let quote2 = newQuote("When I grow up, I'm going to Bovine University!", "Ralph Wiggum", "Lisa the Vegetarian (S07E05)", "./images/bovine-university.jpg");
quoteArray.push(quote2);

let quote3 = newQuote("It takes two to lie; one to lie, and one to listen.", "Homer Simpson", "Colonel Homer (S03E20)", "./images/two-to-lie.jpg");
quoteArray.push(quote3);

let quote4 = newQuote("You mean those leagues where parents push their kids into vicious competition to compensate for their own failed dreams of glory?", 
"Lisa Simpson", "Lisa On Ice (S06E08)", "./images/dreams-of-glory.webp")
quoteArray.push(quote4);

let quote5 = newQuote("There's only one thing to do at a moment like this: strut!", 
"Bart Simpson", "Bart's Girlfriend (S06E07)", "./images/strut.png")
quoteArray.push(quote5);

console.log(quoteArray);

let randNum = Math.floor(Math.random()*quoteArray.length);

function getQuote() {
    let randQuote = quoteArray[randNum].quote;
    return randQuote;
}

function getCharacter() {
    let randChar = quoteArray[randNum].character;
    return randChar;
}

function getEpisode() {
    let randEp = quoteArray[randNum].episode;
    return randEp;
}

function getImage() {
    let randImage = quoteArray[randNum].pic;
    return randImage;
}

console.log(getQuote());
console.log(getCharacter());
console.log(getEpisode());
console.log(getImage());


let simpsonQuote = document.getElementById("quote-quote");
let quoteChar = document.getElementById("quote-character");
let quoteEpisode = document.getElementById("quote-episode");
let episodeImage = document.getElementById("quote-picture");

function updateQuote() {
    randNum = Math.floor(Math.random()*quoteArray.length);
    simpsonQuote.innerHTML = getQuote();
    quoteChar.innerHTML = getCharacter();
    quoteEpisode.innerHTML = getEpisode();
    episodeImage.src = getImage();
}

let quoteButton = document.getElementById("quote-button");

//quoteButton.addEventListener('click', updateQuote);
quoteButton.onclick = updateQuote;

//next ideas: add pictures, add "where's the any key? I'll order a tab" Easter egg
