// This code will run when linked to in HTML

console.log("Place to test my UFO script");
// create variables
let dateToday = 'Today';
let visitorsToday = 1002
let previousVisitors = '1001'
let visitorsTotal = parseInt(previousVisitors) + visitorsToday
let believeAliens = true;
let sights = [1,2,3]
let verifiedSight = true
let numSpheres=0
let numDiscs=0
let numCilinders=0
let numArrows=0
let numJoined_objects=0
let categorySights = [1,2,3,4,5];
let ligthAverage = 0
let lights=0
let date="01-01-2021"
let time="8:38 pm"
let city="Tampa"
let state="Florida"
let country="USA"
let shape="sphere"
let comment="moving fast"

console.log(`Visitors ${visitorsTotal}`)
if (believeAliens){console.log(`I knew that you believed in Aliens `)}
else{console.log(`Be aware: Aliens Exist!`)};

if (visitorsToday === 0){console.log('Bummer')}
if(previousVisitors !== '1001') {console.log('Somebody visited on:  date!')}

if(visitorsToday > parseInt(previousVisitors)){console.log('So many visitors today!')}
if(visitorsToday !== 0 && believeAliens){console.log(`Join the club: ${visitorsTotal} believers and counting!`)}

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
    console.log(j);}

//define a function to add a new sight
console.log(`There were ${sights.length} sights`)
let numSights= sights.length
console.log(`New sight reported. There are now ${numSights+1} in the database`)

let addSight= numSights + 1
    console.log(addSight)

console.log("Do you want to report a new sight?")
newSight(categorySights, objectShape, objectColor, objectLights );

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
let UFO=[{"numSight":1 ,'shapeShape':"sphere",'shapeColor':"black",'shapeLights':1},
        {"numSight":2 ,'shapeShape':'disc','shapeColor':"grey",'shapeLights':5},
        {"numSight":3 ,'shapeShape':'cilinder','shapeColor':"sylver",'shapeLights':7},
        {"numSight":4 ,'shapeShape':'arrow','shapeColor':"gold",'shapeLights':2},
        {"numSight":5 ,'shapeShape':'joined_objects','shapeColor':"multicolor",'shapeLights':20}];

// let shapeUfo = UFO[3];

// console.log(` What is type ${shapeUfo}`)

function objectShape(shape){
    console.log(`The shape of the UFO was like a ${shape}`)   
    return }
function objectColor(color){
    console.log(`The color of the UFO was ${color}`)  
    return }
function objectLights(lights){
    console.log(`The UFO had ${lights} lights`)   
    return }

    
    function countShape(shape){
    if(shape === 'sphere'){
        numSpheres = numSpheres++}
    else if (shape === "disc"){
        numDiscs = numDiscs++
    }
    else if(shape === "cilinder"){
        numCilinders = numCilinders++}
    else if(shape === "arrow"){
        numArrows === numArrows++
    }
    else
        joined_objects === numJoined_objects
}

    console.log(`moving fast`)

//iterate on the UFO most common characteristics
function commonUfos(UFO){
    for (let x=0; x < UFO.length; x++){ 
        console.log(`Category sight: ${categorySights[x]}`)  
        objectShape(UFO[x].shapeShape); 
        objectColor(UFO[x].shapeColor);
        objectLights(UFO[x].shapeLights);} 
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
        objectColor(color)
        console.log(`How many lights did the UFO had?`)
        lights=1
        objectLights(lights)
        
        let sawIt = false
        verify(sawIt)
        return sawIt
    }




