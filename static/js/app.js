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
var tableMain = d3.select("table");

// Define table header
var tableHeaders = ["Date", "City", "State", "Country", "Shape", "Duration", "Comments"];

// Define input sources
var button = d3.select("#filter-btn");
var inputElement = d3.select("#datetime");
var inputHTML = inputElement.html();
var inputText = inputElement.text();


// Load initial data into the table
function loadDefaultData() {

  // Iterate through each row of the data, and add it to the page's data table
  tableData.forEach(sightings => {
    var tr = tableBody.append("tr");
    Object.entries(sightings).forEach(function([key, value]) {
      tr.append("td").text(value);
    });
  });
  
}


// Click handler
function handleClick(date) {

  // Define input source
  var inputValue = d3.select("#datetime").property("value");

  // Pass the user-entered date to the filtering function
  filteredData = filterData(inputValue);

  console.log(filteredData)

  // Check for empty results
  if(filteredData.length == 0)
  /* Method to just print the result to console
  { console.log("Response is null") }
  */
  {

    // Remove the existing rows
    d3.select("thead").remove();
    d3.selectAll("tr").remove();

    var tr = tableBody.append("tr");
    var td = tr.append("td").text("No results");
  }

  // Results contains data.  Display it.
  else {

    // Remove existing rows
    d3.select("thead").remove();
    d3.selectAll("tr").remove();

    // Re-create the table header
    tableMain.append("thead");
    var tableHead = d3.select("thead");

    // Add header cells to the header row
    tableHeaders.forEach(header => {
      var th =tableHead.append(header);
    });

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
