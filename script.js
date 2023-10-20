//function clears any previously displayed content by making the target div (eg. 'meme-content') equal an empty string
function clearAll() {
  const meme = document.querySelector(".meme-content");
  const joke = document.querySelector(".joke-content");
  const quote = document.querySelector(".quote-content");
  const riddle = document.querySelector(".riddle-content");

  meme.innerHTML = "";
  joke.innerHTML = "";
  quote.innerHTML = "";
  riddle.innerHTML = "";
}

//function to show a random meme
function showMeme() {
  const randomMemeUrl = getRandomData("memes"); //value should be a string representing image URL
  const memeContainer = document.querySelector(".meme-content"); //identifies the target div element in the HTML code
  const newMeme = document.createElement("img"); //creates new image element
  newMeme.setAttribute("src", randomMemeUrl); //sets the img source to the string acquired from the getRandomData function

  clearAll(); //clears previously displayed content before displaying the meme

  memeContainer.appendChild(newMeme); //adds the new img to the document
}

function showJoke() {
  const randomJokeText = getRandomData("jokes"); //value should be a string representing the joke
  const jokeContainer = document.querySelector(".joke-content"); //identifies the target div element in the HTML code
  const newJoke = document.createElement("p"); // creates a new p element
  newJoke.textContent = randomJokeText; //sets the p text to the joke string

  clearAll(); //clears previously displayed content before displaying the joke

  jokeContainer.appendChild(newJoke); //adds the new img to the document
}

function showQuote() {
  const randomQuote = getRandomData("quotes"); //value should be in format: { quote: '', author: '' }
  const quoteContainer = document.querySelector(".quote-content"); //identifies the target div element in the HTML code
  const newQuoteText = document.createElement("p"); // creates a new p element for the quote
  const newQuoteAuthor = document.createElement("p"); // creates a new p element for the author
  newQuoteText.textContent = randomQuote.quote; //sets the p text to the quote string
  newQuoteAuthor.textContent = "- " + randomQuote.author; //sets the p text to the author string

  clearAll(); //clears previously displayed content before displaying the quote

  quoteContainer.appendChild(newQuoteText); //adds the quote p element
  quoteContainer.appendChild(newQuoteAuthor); //adds the author p element
}

function showRiddle() {
  const randomRiddle = getRandomData("riddles"); // Value should be in format: { question: '', answer: '' }
  const riddleContainer = document.querySelector(".riddle-content"); //identifies the target div element in the HTML code
  const newRiddleText = document.createElement("p"); // creates a new p element for the riddle
  const newRiddleAnswer = document.createElement("p"); // creates a new p element for the answer
  newRiddleText.textContent = randomRiddle.question; //sets the p text to the riddle string
  newRiddleAnswer.textContent = "- " + randomRiddle.answer; //sets the p text to the answer string
  newRiddleAnswer.setAttribute("id", "riddle-answer"); //id="riddle-answer" attributed to answer element

  clearAll(); //clears previously displayed content before displaying the riddle

  newRiddleAnswer.hidden = true; //declares that the riddle answer is hidden as a boolean value

  riddleContainer.appendChild(newRiddleText); //adds riddle to the target div element
  riddleContainer.appendChild(newRiddleAnswer);
}

//function to reveal riddle answers
function revealAnswers() {
  const riddleContent = document.querySelector(".riddle-content");
  const riddle = riddleContent.querySelector("p");
  const riddleAnswer = document.querySelector("#riddle-answer"); //selects the riddle answer element

  /* 
conditional statement states the following

if the riddle is displayed and the riddle answer is hidden, show riddle answer

else if the riddle and its answer are both already displayed, give an error message

otherwise show an error message saying there is no riddle to answer
*/

  if (riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  } else if (riddle && riddleAnswer) {
    alert("The riddle answer is already exposed!");
  } else {
    alert("There is no riddle to show the answer for!");
  }
}

//selects a random item from the chosen array
function getRandomData(type) {
  return data[type][rn(data[type].length)];
}

//content arrays
const memes = [
  "https://img-9gag-fun.9cache.com/photo/5279860_460s.jpg",
  "https://i.redd.it/54awdw2ow1i61.jpg",
  "https://64.media.tumblr.com/36553455be2c8ace70d192e40d1fcda8/tumblr_n35ymdGWGm1tx39rbo1_1280.jpg",
  "https://images7.memedroid.com/images/UPLOADED923/5d646e19b30e1.jpeg",
  "https://programmercave0.github.io/assets/stackoverflow_memes/so_meme7.jpg",
  "https://qph.cf2.quoracdn.net/main-qimg-1a75da6f82414439b802f2e1b7bc3109-lq",
  "https://i.inews.co.uk/content/uploads/2019/03/Alex-Nelson-Copy-of-Inews-Article-Image-Template-Inews-Format-4-e1553697579239.jpg",
  "https://img.ifunny.co/images/1607e07e81b6db3bee5b5c10ce91f954b5479097306e396b234678ceba597c60_1.jpg",
  "https://preview.redd.it/ghbyqn3xhs531.jpg?width=640&crop=smart&auto=webp&v=enabled&s=87d3cad7033309e9d73ff6f09c083b37007095c3",
  "https://preview.redd.it/d06yv5u08c761.jpg?width=640&crop=smart&auto=webp&v=enabled&s=82465e807bbe99cc0a62c44c1163e9cf1dc522c7",
];

const jokes = [
  "Why did the baker work overtime? Because he kneaded the dough",
  "Whats the best thing about Switzerland? I don't know, but the flag is a big plus",
  "Did you hear about the claustrophobic astronaut? He just needed a little space",
  "How do you drown a hipster? Throw him in the mainstream",
  "What's the difference between a cat and a comma? A cat has claws at the end of paws; a comma is a pause at the end of a clause",
  "What did one hat say to the other? You wait here. I'll go on a head",
  'Why can\'t you hear a pterodactyl go to the bathroom? Because the "P" is silent',
  "Why is it annoying to eat next to football players? They dribble all the time",
  "I got my daughter a fridge for her birthday. I can't wait to see her face light up when she opens it",
  "Why are skeletons so calm? Because nothing gets under their skin",
];

const quotes = [
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
    author: "Abraham Lincoln",
  },
  {
    quote:
      "I've failed over and over and over again in my life and that is why I succeed.",
    author: "Michael Jordan",
  },
  {
    quote:
      "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    author: "Thomas A. Edison",
  },
  {
    quote: "Don't take life too seriously. You'll never get out of it alive.",
    author: "Elbert Hubbard",
  },
  {
    quote:
      "To acquire knowledge, one must study, but to acquire wisdom, one must observe.",
    author: "Marylin vos Savant",
  },
  {
    quote:
      "If you cannot find peace within yourself, you will never find it anywhere else.",
    author: "Marvin Gaye",
  },
  {
    quote:
      "Always walk through life as if you have something new to learn, and you will.",
    author: "Vernon Howard",
  },
  {
    quote:
      "A wise man makes his own decisions, an ignorant man follows the public opinion.",
    author: "Grantland Rice",
  },
  {
    quote:
      "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    author: "Mark Twain",
  },
  {
    quote: "Speak only if it improves upon the silence.",
    author: "Mahatma Gandhi",
  },
];

const riddles = [
  {
    question: "If there is a bee in my hand, what is in my eye?",
    answer: "Beauty. Beauty is in the eye of the bee-holder",
  },
  {
    question:
      "When you take me out of a window, you leave a grieving wife. When you put me in a door, you will save someone's life. What am I?",
    answer: 'The letter "n"',
  },
  {
    question:
      "What has roots that nobody sees, is taller than trees, up, up it goes, and yet never grows?",
    answer: "A mountain",
  },
  {
    question:
      "As a stone inside a tree, I'll help your words outlive thee, but if you push me as I stand, the more I move the less I am. What am I?",
    answer: "A pencil",
  },
  {
    question: "What can go up a chimney down, but can't go down a chimney up?",
    answer: "An umbrella",
  },
  {
    question:
      "I have cities but no houses. I have mountains but no trees. I have water, but no fish. What am I?",
    answer: "A map",
  },
  {
    question: "What disappears as soon as you say it's name?",
    answer: "Silence",
  },
  {
    question:
      "I have keys, but no locks or rooms. You can enter, but you can't go outside. What am I?",
    answer: "A keyboard",
  },
  {
    question: "What gets wet while drying?",
    answer: "A towel",
  },
  {
    question: "What belongs to you, but is used more by other people?",
    answer: "Your name",
  },
];

//returns a random integer between 0 and the array length
function rn(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};
