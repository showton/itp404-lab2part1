let url = "https://thejsguy.com/teaching/2018/api/restaurants.json";

let resultsTemplateString = document.getElementById("results-template")
  .innerHTML;
let renderResults = Handlebars.compile(resultsTemplateString);

$.getJSON(url).then(
  function(response) {
    console.log(response);
    let renderedResults = renderResults({
      result: response.data
    });
    $("#results").html(renderedResults);
  },
  function() {
    console.error("error occured");
    $("#results").html("404 Error");
  }
);
