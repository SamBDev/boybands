var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = Math.max(bands.length, vegetables.length);
console.log(loopCount);

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Create variables for appending 
var newElement, newText;
// var breakElement = document.createElement("br");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  newElement = document.createElement("p")
  newText = document.createTextNode(currentBand);
  newElement.appendChild(newText);
  bandElement.appendChild(newElement);
  
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  newElement = document.createElement("p")
  newText = document.createTextNode(currentVeggie);
  newElement.appendChild(newText);
  veggieElement.appendChild(newElement);
  
}