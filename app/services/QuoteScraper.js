const cheerio = require("cheerio");
const axios = require("axios");

const options = {
  method: "GET"
};

axios("https://www.goodreads.com/quotes/tag/gratitude")
  .then(result => {
    const $ = cheerio.load(result.data);
    const quotes = [];
    const quoteWidgets = $(".quoteText").each((i, elem) => {
      const quoteElement = $(elem);
      const quote = {
        quote: quoteElement.text()
        // author: quoteElement.find(".authorOrTitle").text()
      };
      quotes.push(quote);
      //   console.log($(elem).html());
      //   console.log(quote);
    });
    console.log(JSON.stringify(quotes, null, 2));
  })
  .catch(err => {
    console.log(err);
  });
