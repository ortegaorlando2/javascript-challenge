// Providing some cool links

let sightsGIS= d3.select(".sightsGIS>a").html();
let myLinkAnchor = d3.select(".inner>a");
let myLinkAnchorAttribute = myLinkAnchor.attr("href");

d3.selectAll("li").style("color", "green");

//-------------IMPORT DATA TABLE-------------------------
//select the table inside html
d3.select('.table')
//Assign this table to a D3 element for manipulation
let tableElement = d3.select('.table')
//change the table format to something more attractive
tableElement.classed('table-striped', true)
//select the body of the html table
let tbodyElem = tableElement.select('tbody');


//let tbody = d3.select("tbody");
//define callback function
function processRecord(row){
    let item = tbodyElem.append('tr');
    Object.values(row).forEach(function(thing){
    item.append('td').text(thing);});
}
data.forEach (processRecord);
//----------------------------------------


// ~~~~~~~~~~~~~~~~FORMS~~~~~~~~~~~~~~~~~~~~

// Assign the data from `data.js` to a descriptive variable
let UFOcase = data;
let buttonA = d3.select("#buttonA");
let buttonB = d3.select("#buttonB");
let buttonC = d3.select("#buttonC");
let buttonD = d3.select("#buttonD");
let form1 = d3.select("#form1");
let form2 = d3.select("#form2");
let form3 = d3.select("#form3");
let form4 = d3.select("#form4");

for (let i=1; i < length.UFOcase; i++){
    console.log(UFOcase.datetime).text()}

// Create event handlers 
buttonA.on("click", runEnter1);
form1.on("submit",runEnter1);
buttonB.on("click", runEnter2)
form2.on("submit", runEnter2);
buttonC.on("click", runEnter3);
form3.on("submit",runEnter3);
buttonD.on("click", runEnter4);
form4.on("submit",runEnter4);

// Complete the event handler function for the form
function runEnter1(event) {
  // Prevent the page from refreshing
  event.preventDefault();  
  // Select the input element and get the raw HTML node
  let inputElement = d3.select("#UFOSearcher"); 
  // Get the value property of the input element
  let inputValue = inputElement.property("value");
  inputValuestrg = inputValue.toString();
  compare = dmy(inputValuestrg)


  function dmy(inputValuestrg) {
    var str = inputValuestrg
    var y = str.substring(0,4);
    var m = str.substring(5,7);
      if (m.substring(0,1) === '0')
        {m=m.substring(1,2);}
    var d = str.substring(8,10);
      if (d.substring(0,1) === '0')
        {d=d.substring(1,2);}

    var compare = m+'/'+d+'/'+y 
    return compare
  }


  console.log(`value ${inputValuestrg}`)
  console.log(`compare ${compare}`)


  let filteredData1 = UFOcase.filter(theones => 
    theones.datetime === compare); 

    console.log(filteredData1);

  
  // d3.select('.table')
  tableElement1=d3.select('#Subset')
  tableElement1.classed('table-striped', true)
  let tbody1 = tableElement1.select('tbody')
  tbody1.html("")
    console.log(tableElement1)
    console.log(tbody1)


  //define callback function
function processRecord1(row){
  let item = tbody1.append('tr');
  Object.values(row).forEach(function(thing){
  item.append('td').text(thing);});
}
filteredData1.forEach (processRecord1);
}

function runEnter2(event) {
    // Prevent the page from refreshing
    event.preventDefault();  
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#UFOCity"); 
    // Get the value property of the input element
    let inputValue = inputElement.property("value");
    console.log(`values ${inputValue}`)

    console.log(inputValue);

    let filteredData2 = UFOcase.filter(theones => 
      theones.city === inputValue);

    console.log(filteredData2); 
    
    
    let tableElement2 = d3.select('#Subset')
    //change the table format to something more attractive
    tableElement2.classed('table-striped', true)
    //select the body of the html table
    let tbody2 = tableElement2.select('tbody')
    tbody2.html("")

  //define callback function
  function processRecord2(row){
    let item = tbody2.append('tr');
    Object.values(row).forEach(function(thing){
    item.append('td').text(thing);});
  }
  filteredData2.forEach (processRecord2);
  }

  function runEnter3(event) {
    // Prevent the page from refreshing
    event.preventDefault();  
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#UFOState"); 
    // Get the value property of the input element
    let inputValue = inputElement.property("value");
    console.log(`values ${inputValue}`)
  console.log(inputValue);
  
    let filteredData3 = UFOcase.filter(theones => 
    theones.state === inputValue); 
    console.log(filteredData3); 

    let tableElement3 = d3.select('#Subset')
    //change the table format to something more attractive
    tableElement3.classed('table-striped', true)
    //select the body of the html table
    let tbody3 = tableElement3.select('tbody')
    tbody3.html("")

  //define callback function
  function processRecord3(row){
    let item = tbody3.append('tr');
    Object.values(row).forEach(function(thing){
    item.append('td').text(thing);});
  }
  filteredData3.forEach (processRecord3);

  }

  function runEnter4(event) {
    // Prevent the page from refreshing
    event.preventDefault();  
    // Select the input element and get the raw HTML node
    let inputElement = d3.select("#UFOShape"); 
    // Get the value property of the input element
    let inputValue = inputElement.property("value");
    console.log(`values ${inputValue}`)

  console.log(inputValue);

    let filteredData4 = UFOcase.filter(theones => 
      theones.shape === inputValue);   

    console.log(filteredData4);  
    
    let tableElement4 = d3.select('#Subset')
    //change the table format to something more attractive
    tableElement4.classed('table-striped', true)
    //select the body of the html table
    let tbody4 = tableElement4.select('tbody')
    tbody4.html("")

  //define callback function
  function processRecord4(row){
    let item = tbody4.append('tr');
    Object.values(row).forEach(function(thing){
    item.append('td').text(thing);});
  }
  filteredData4.forEach (processRecord4);
    
  }

// ***************THIS******************************


