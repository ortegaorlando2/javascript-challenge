// This code will run when linked to in HTML

console.log("Place to test my UFO script");
// create variables
let dateToday = 'Today';
let visitorsToday = 1001
let previousVisitors = '1'
let visitorsTotal = parseInt(previousVisitors) + visitorsToday
let believeAliens = true;
let sights = [1,2,3]
let verifiedSight = true
let numSpheres=0
let numDiscs=0
let numCilinders=0
let numArrows=0
let numUnknown=0
let categorySights = [1,2,3,4,5];
let ligthAverage = 0
let lights=0
let datetime="01-01-2021"
let city="Tampa"
let state="fl"
let country="us"
let shape="sphere"
let durationMinutes="No time"
let comment="moving fast"


if (visitorsToday === 1001) {document.getElementById("insert").innerHTML=`Before you we had ${visitorsToday} visitors`};


// getting a reference to the Yes/No buttons
let clickCount1 = 0;
let button = d3.select("#Alien");
button.on("click", () => {
    clickCount1++;
    if(clickCount1 === 1){visitorsTotal=visitorsToday+1
        document.getElementById("insert").innerHTML=`Now we have ${visitorsTotal} visitors.
        Join the club: ${clickCount1} believers and counting!`}
    console.log(`button clicked ${clickCount1}`);
    console.log(`Visitors ${visitorsTotal}`)
});

clickCount2=0
let button2 = d3.select("#NoAlien");
button2.on("click", () => {
    clickCount2++;
    if(clickCount2 === 1){visitorsTotal=visitorsToday+1
        document.getElementById("insert").innerHTML=`Now we have ${visitorsTotal} visitors. 
        You should believe. They are out there  !!!`}
    console.log(`button clicked ${clickCount2}`);
    console.log(`Visitors ${visitorsTotal}`)
});

clickCount3=0
// getting a reference to the Yes button
let button3 = d3.select("#newUFO");
button3.on("click", () => {
    clickCount3++;
    if(clickCount3 === 1){
        document.getElementById("Coming Soon").innerHTML=`Coming Soon!: Form to report your own UFO`}
    console.log(`button clicked ${clickCount3}`);
    console.log(`Visitors ${visitorsTotal}`)
});

clickCount4=0
let button4 = d3.select("#NoUFO");
button4.on("click", () => {
    clickCount4++;
    if(clickCount4 === 1){
        document.getElementById("Coming Soon").innerHTML=`Maybe tomorrow?`}
    console.log(`button clicked ${clickCount4}`);
    console.log(`Visitors ${visitorsTotal}`)
});


if (visitorsTotal === 20000){console.log(`${visitorsTotal} visitors milestone!`)}
else if (visitorsToday >0){console.log(`approaching our next visitor's milestone`)}
else{console.log(`We surpassed our 20000 visitors!`)}

//Here we are going to put the database
let allSights=[]

if (verifiedSight)
// Add a new sight if verified
    {sights.push(4)}
// Eliminate sight if not verified
    else {sights.pop()}

sights.slice(1,2)
console.log(`My favorite sight is # ${sights.slice(1,2)}`)

//iterate over sights
for (let i=0; i < sights.length; i++){
    console.log(`Sight number: ${sights[i]}`)
}

//iterating up to one element before the last one
for (let j=0; j < sights.length-1; j++){
    allSights.push[j]
    console.log(j)};

//define a function to add a new sight
console.log(`There were ${sights.length} sights`)
let numSights= sights.length
console.log(`New sight reported. There are now ${numSights+1} in the database`)

let addSight= numSights + 1
    console.log(addSight)

console.log("Do you want to report a new sight?")
newSight(categorySights, objectShape, objectCity, objectCountry );

function verify(sawIt){
    let verifySight= sawIt
    if(verifySight){
    console.log("The sight has been verified")
    sawIt = true    }
    else{
    console.log("The sight is not verified")
    sawIt = false
    }
    return}

arrayloop(sights)

function arrayloop(sights){
    for (let s=0; s < sights.length; s++)
    console.log(sights[s])
    return sights}

lightsAverage=avg(categorySights);

function avg (arr){
    let total = 0;
    for (let c=0; c < arr.length; c++){
         total += arr[c];}  //cumulative number
        let meanValue = total/arr.length //calculate average
        return meanValue;} //return meanValue}

console.log(`the average # of lights in sights is: ${Math.round(lightsAverage)}`)

function variance(arr){
    let  vari =0;
    let differenceMean =0
    for (let t=0; t<arr.length; t++){
        differenceMean += (arr[t] -avg(arr))**2 
    }
    vari = differenceMean/arr.length
    return vari
}

let variancelights = 0
varianceLights = variance(categorySights,lightsAverage)
console.log(`The variance of lights in a sight is # ${varianceLights.toFixed(2)}`)

function stdev (arr){
    let vari = variance(arr);
    stdev = Math.sqrt(vari)
    return stdev
}

console.log(`The standard deviation of lights in a sight is  ${stdev(categorySights).toFixed(2)}`)

// Java scrip callback function
let UFO=[{"numSight":1 ,'shapeShape':"fireball",'shapeCity':"Phoenix",'shapeCountry':"us"},
        {"numSight":2 ,'shapeShape':'circle','shapeCity':"Buffalo",'shapeCountry':"us"},
        {"numSight":3 ,'shapeShape':'light','shapeCity':"Tampa",'shapeLshapeCountryights':"us"},
        {"numSight":4 ,'shapeShape':'other','shapeCity':"Las Cruces",'shapeCountry':"us"},
        {"numSight":5 ,'shapeShape':'unknown','shapeCity':"Valladolid",'shapeCountry':"Mexico"}];


function objectShape(shape){
    console.log(`The shape of the UFO was like a ${shape}`)   
    return }
function objectCity(city){
    console.log(`The city was ${city}`)  
    return }
function objectCountry(country){
    console.log(`The country was ${country}`)   
    return }

//iterate on the UFO most common characteristics
function commonUfos(UFO){
    for (let x=0; x < UFO.length; x++){ 
        console.log(`Category sight: ${categorySights[x]}`)  
        objectShape(UFO[x].shapeShape); 
        objectCity(UFO[x].shapeCity);
        objectCountry(UFO[x].shapeCountry);} 
    }

    commonUfos(UFO)

    function newSight(categorySights, objectShape, objectColor, objectLights ){        
        sights.push()
        console.log("Alert New sight reported!");
        for (var sadd=0; sadd < categorySights.length; sadd++)
        console.log(`What shape was the UFO? choose sphere, disc, cilinder, arrow, or joined_objects`)
        shape = "sphere"
        objectShape(shape)
        console.log(`What color was the UFO? choose black, grey, sylver, gold, or multicolor`)
        color = "black"
        objectCity(city)
        console.log(`How many lights did the UFO had?`)
        lights=1
        objectCountry(country)
        
        let sawIt = false
        verify(sawIt)
        return sawIt
    }




