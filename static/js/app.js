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
var inputElement = d3.select("#datetime");
var inputHTML = inputElement.html();
var inputText = inputElement.text();

// Click handler
function handleClick(date) {
  // Define input source
  var inputValue = d3.select("#datetime").property("value");

  // Pass the user-entered date to the filtering function
  filteredData = filterData(inputValue);

  console.log(filteredData)

  // Check for no results
  if(filteredData.length == 0) { console.log("Response is null") }

  else {
    // Iterate through each row of the data, and add it to the page's data table
    filteredData.forEach(sightings => {
      var tr = tableBody.append("tr");
      Object.entries(sightings).forEach(function([key, value]) {
        tr.append("td").text(value);
      });
    });
  }
}

// Filters the source data, based on a supplied date
function filterData(date) {
  console.log(`The date supplied for filtering is ${date}`);
  var filteredData = data.filter(sighting => sighting.datetime === date);
  console.log(`The filtered data is: ${filteredData}`);
  return filteredData;
}

// Button click event
button.on("click", handleClick);
