const quote = document.getElementById("quote");
const author = document.getElementById("author");
const api_url = "https://api.quotable.io/quotes/random";

async function getQuote(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data[0].content;
  author.innerHTML = data[0].author;
}

getQuote(api_url);

function tweet() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " ----- by " +
      author.innerHTML,
    "Tweet Window",
    "width=1080, height=760"
  );
}
