// Select the text of an HTML element
let text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);

let text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);

// // Modify the text of an HTML element
// d3.select(".text1").text("I knew that you believed in Aliens!");

// // Select an element's child element
// An object is returned
let sightsGIS= d3.select(".sightsGIS>a").html();
// // // Capture the child element's href attribute
let myLinkAnchor = d3.select(".inner>a");
let myLinkAnchorAttribute = myLinkAnchor.attr("href");


 // // Change an element's attribute
// myLinkAnchor.attr("href", "New https here");

// // // Use chaining to join methods

// d3.select(".my-link>a") // returns a reference to the anchor tag
//   .attr("href", "https://nytimes.com") // sets href of anchor tag and returns reference of anchor tag
//   .text("Now this is a link to the NYT!!"); // sets text of anchor tag

// // // Select all list items, then change their font color
d3.selectAll("li").style("color", "green");

// date,
// thtime,
// city,
// state,
// country,
// shape,
// color,
// lights,
// comment

//select the table inside html
d3.select('.table')
//Assign this table to a D3 element for manipulation
let tableElement = d3.select('.table')
//change the table format to something more attractive
tableElement.classed('table-striped', true)
//select the body of the html table
let tbodyElem = tableElement.select('tbody');
// Area to add old UFOs
let oldUFOrow = tbodyElem.append('tr');

//This is where the old table should go
//--------------------------------------
let tbody = d3.select("tbody");
//define callback function
function processRecord(row){
    let item = tbody.append('tr');
    Object.values(row).forEach(function(thing){
    item.append('td').text(thing);});
}
data.forEach (processRecord);
//----------------------------------------


//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
let clickCount = 0;

// getting a reference to the Yes/No buttons
let visitors =0;

let button = d3.select("#Alien");
button.on("click", () => {
    clickCount++;
    if(clickCount === 1){visitorsTotal ++}
    console.log(`button clicked ${clickCount}`);
    console.log(`Visitors ${visitorsTotal}`)
});



clickCount2=0
let button2 = d3.select("#NoAlien");
button2.on("click", () => {
    clickCount2++;
    if(clickCount2 === 1){visitorsTotal ++}
    console.log(`button clicked ${clickCount2}`);
    console.log(`Visitors ${visitorsTotal}`)
});

clickCount3=0
// getting a reference to the Yes button
let button3 = d3.select("#newUFO");
button3.on("click", () => {
    clickCount3++;
    if(clickCount3 === 1){visitorsTotal ++}
    console.log(`button clicked ${clickCount3}`);
    console.log(`Visitors ${visitorsTotal}`)
});

clickCount4=0
let button4 = d3.select("#NoUFO");
button4.on("click", () => {
    clickCount4++;
    if(clickCount4 === 1){visitorsTotal ++}
    console.log(`button clicked ${clickCount4}`);
    console.log(`Visitors ${visitorsTotal}`)
});
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

// button on click retrieve date to search

let text = d3.select("#text");
let output = d3.select(".output");
// let output = d3.select(".output")

text.on("change", handleChange);

function handleChange(event) {
    // grab the value of the input field
    let inputText = event.target.value;
    console.log(inputText)
    // clear the existing output
    // @TODO: YOUR CODE HERE
    event.target.value = '';
  
    // Set the output text to the reversed input string
    output.text(reversedInput);
}
  

// ***************THIS******************************

// d3.selectAll("button").on("click", function() {
//     // What will be logged out? What is `this` in this case?
//     console.log(this);
//     // Answer: It will console log the `button` element.
//   });

// d3.selectAll("li").on("click", function() {
//     // you can select the element just like any other selection
//     let listItem = d3.select(this);
//     listItem.style("color", "blue");
  
//     let listItemText = listItem.text();
//     console.log(listItemText);
//   });



// button5.on("click", () => {
//     clickCount5++;
//     if(clickCount5 === 1){visitorsTotal ++}
//     console.log(`${visitorsTotal}`)
// });

// inputfield.on("change", function(event) {
//     let newText = event.target.value;
//     console.log(newText);
// });


// function handleChange(event) {
//     let believerInput = event.target.value;
//     console.log(believerInput);
//     event.target.value = "";
//     output.text(`UFO on ${believerInput}`);
// };

console.log("passed click count")

// let text4 = d3.select("#text4");
// // Modify the text of an HTML element
// d3.select(".text4").text("Be aware: Aliens Exist!");

// // You can also define the click handler inline
// button.on("click", function(event) {
//   console.log("Hi, a button was clicked!");
//   console.log(event.target);
// });

// // Event handlers are just normal functions that can do anything you want
// button.on("click", function() {
//   d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
// });

// Input fields can trigger a change event when new text is entered.
// inputField.on("change", function(event) {
//   let newText = event.target.value;
//   console.log(newText);
// });



// let oldUFO = ["01-01-2021",
//     "8:21 pm",
//     "Houston",
//     "Texas",
//     "USA",
//     "sphere",
//     "black",
//     5,
//     "moving fast"];

// // Area to add a new UFO
// let newRow = tableElement.select('tbody').append('tr');

// let newUFO = ["01-01-2021","8:21 pm",
//     "Tampa",
//     "Florida",
//     "USA",
//     "sphere",
//     "black",
//     21,
//     "moving fast"];

// for (let i=0; i<9; i++){
//     newRow.append('td').text(newUFO[i]);
// }



// // // Create a list new element
// let li1 = d3.select("ul").append("li");
// li1.text("A new item has been added!");

// // // Use chaining to create a new element and set its text
// let li2 = d3.select("ul").append("li").text("Another new item!");

