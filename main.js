// code to generate random Simpsons quote on button click
//blank array that will store quotes for random generation
const quoteArray = [];

//factory function to create objects of quotes & citations
function newQuote(quote, citation) {
    return {
        quote: quote,
        citation: citation
    }
};

//create objects of quotes & citations, put quotes in array
let quote1 = newQuote("This town is a part of us all... a part of us all... a part of us all", 
"Marge, Lemon of Troy (S06E24)");
quoteArray.push(quote1.quote);

let quote2 = newQuote("When I grow up, I'm going to Bovine University!", "Ralph Wiggum Lisa the Vegetarian (S07E05");
quoteArray.push(quote2.quote);

let quote3 = newQuote("It takes two to lie; one to lie, and one to listen.", "Homer, Colonel Homer (S03E20");
quoteArray.push(quote3.quote);


//function to generate random quote

function getRandomQuote() {
    let randNum = Math.floor(Math.random()*3);
    let randQuote = quoteArray[randNum];
    return randQuote;
};

console.log(getRandomQuote());


let simpsonQuote = document.getElementById("quote-quote");
let quoteInfo = document.getElementById("quote-citation");

function updateQuote() {
    simpsonQuote.innerHTML = getRandomQuote();
    quoteInfo.innerHTML = 'citation info';
}

let quoteButton = document.getElementById("quote-button");

//quoteButton.addEventListener('click', updateQuote);
quoteButton.onclick = updateQuote;

