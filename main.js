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


//function to generate random quote

const getRandomQuote = () => {
    let randNum = Math.floor(Math.random()*2);
    let randQuote = quoteArray[randNum];
    return randQuote
}

console.log(getRandomQuote());