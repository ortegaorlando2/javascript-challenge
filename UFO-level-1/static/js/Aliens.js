// Select the text of an HTML element
let text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);

let text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);

// Modify the text of an HTML element
d3.select(".text1").text("I knew that you believed in Aliens!");

// // Select an element's child element
// An object is returned
let sightsGIS= d3.select(".sightsGIS>a").html();
console.log("Click to go to Map: ",sightsGIS);
// // // Capture the child element's href attribute
let myLinkAnchor = d3.select(".inner>a");
console.log(myLinkAnchor);

let myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);

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
let tbody = d3.select("tbody");
//define callback function

function processRecord(row){
    let item = tbody.append('tr');
    Object.values(row).forEach(function(thing){
    item.append('td').text(thing);});
}
data.forEach (processRecord);

// let oldUFO = ["01-01-2021",
//     "8:21 pm",
//     "Houston",
//     "Texas",
//     "USA",
//     "sphere",
//     "black",
//     5,
//     "moving fast"];

//add the old cells to the table using a foreach function

// oldUFO.forEach (UFOitem => 
//     //Add a row to the table (item could be old or new)
//     oldUFOrow.append('td').text(UFOitem)
// );




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

