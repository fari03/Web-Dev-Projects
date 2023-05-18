async function getRandomQuote() {
  const response = await fetch(' https://api.quotable.io/random');
    const data = await response.json();
    return data.content;
  }
  
  function displayRandomQuote() {
    const quoteText = document.getElementById("quote-text");
    getRandomQuote().then(quote => {
      quoteText.textContent = quote;
    });
  }
  
  const newQuoteBtn = document.getElementById("new-quote-btn");
  newQuoteBtn.addEventListener("click", displayRandomQuote);
  
  // Initial quote display
  displayRandomQuote();
  
