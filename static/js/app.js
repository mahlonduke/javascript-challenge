/*
Using the UFO dataset provided in the form of an array of JavaScript objects, write code that appends a table to your web page
and then adds new rows of data for each UFO sighting.
  Make sure you have a column for `date/time`, `city`, `state`, `country`, `shape`, and `comment` at the very least.
Use a date form in your HTML document and write JavaScript code that will listen for events and search through the `date/time`
column to find rows that match user input.
*/

// from data.js
var tableData = data;
var tableBody = d3.select("tbody");

// Define input sources
var button = d3.select("#filter-btn");
var inputField = d3.select("#datetime");

// Print source data for reference
console.log(`Source Data: ${tableData}`);

// Click handler
function handleClick(date) {
  data.forEach(sightings => {
    var tr = tableBody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
      tr.append("td").text(value);
    });
  });
}

// Button click event
button.on("click", handleClick);

//Date input event
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(`New date entered: ${newText}`);
});
