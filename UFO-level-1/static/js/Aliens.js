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

d3.selectAll("li").style("color", "green");


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

// // button on click retrieve date to search

// let text = d3.select("#text");
// let output = d3.select(".output");
// // let output = d3.select(".output")
// text.on("change", handleChange);

// function handleChange(event) {
//     // grab the value of the input field
//     let inputText = event.target.value;
//     console.log(inputText)
//     // clear the existing output
//     // @TODO: YOUR CODE HERE
//     event.target.value = '';
  
//     // Set the output text to the reversed input string
//     output.text(reversedInput);
// }


// ~~~~~~~~~~~~~~~~FORMS~~~~~~~~~~~~~~~~~~~~

// Assign the data from `data.js` to a descriptive variable
let UFOcase = data;
let buttonA = d3.select("#buttonA");
let form = d3.select("#form");

// Create event handlers 
buttonA.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter(event) {

  // Prevent the page from refreshing
  event.preventDefault();
  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#UFOSearcher");

 
  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  console.log(`values ${inputValue}`)


 
console.log(UFOcase);

//   let n = inputValue.getMonth()+
//             inputValue.getDate()+
//             inputValue.getFullYear()



// GetFormattedDate()
// function GetFormattedDate() {
//     var todayTime = new Date();
//     var month = format(todayTime .getMonth() + 1);
//     var day = format(todayTime .getDate());
//     var year = format(todayTime .getFullYear());
//     return month + "/" + day + "/" + year;
// }

  console.log(inputValue);

  let filteredData = UFOcase.filter(theones => 
    theones.city === inputValue);

  console.log(filteredData);

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

