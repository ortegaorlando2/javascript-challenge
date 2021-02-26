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
button.on("click", handleClick);
console.log("passed click count")

function handleClick() {
    clickCount++;
    console.log(`button clicked ${clickCount}`);
}

    // event.target;
// clickCount ++;
// console.log(`clicks ${clickCount}`)
//Modify the text 
//d3.select(".text3").text("I know that you believe in Aliens!");
// }


// getting a reference to the Yes button
let button2 = d3.select("#NoAlien");
button2.on("click", handleClick);

let button3 = d3.select("#Alien");
function handleClick2(event) {event.target;}
button3.on("click", handleClick);
// getting a reference to the Yes button
let button4 = d3.select("#NoAlien");
function handleClick3(event) {event.target;}
button4.on("click", handleClick);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$



let text4 = d3.select("#text4");
// Modify the text of an HTML element
d3.select(".text4").text("Be aware: Aliens Exist!");

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

