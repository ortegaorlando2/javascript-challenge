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

console.log(`Visitors ${visitorsTotal}`)
if (believeAliens){
    console.log(`I know that you believe in Aliens `)
}
else{
    console.log(`Be aware: Aliens Exist!`)};
if (visitorsToday === 0){
    console.log('Bummer')
}
if(previousVisitors !== '1001') {
    console.log('Somebody visited!')
}
if(visitorsToday > parseInt(previousVisitors)){
    console.log('So many visitors today!')}
if(visitorsToday !== 0 && believeAliens){
    console.log(`Join the club: ${visitorsTotal} believers and counting!`)}
if (visitorsTotal === 20000){
    console.log(`${visitorsTotal} visitors milestone!`)}
    else if (visitorsToday >0){ 
    console.log(`approaching our next visitor's milestone`)}
    else{
    console.log(`We surpassed our 20000 visitors!`)}


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
    console.log(sights[i])
}

//iterating up to one element before the last one
for (let j=0; j < sights.length-1; j++){
    allSights.push[j]
    console.log(j);
}

//define a function to add a new sight
console.log(`There were ${sights.length} sights`)
let numSights= sights.length
console.log(`New sight reported. There are now ${numSights+1} in the database`)

let addSight= numSights + 1
    console.log(addSight)

newSight();

function newSight(){        
    sights.push(addSight)
    console.log("Alert New sight reported!");
    let sawIt = false
    verify(sawIt)
    return sawIt
}

function verify(sawIt){
    let verifySight= sawIt
    if(verifySight){
    console.log("The sight has been verified")
    sawIt = true    }
    else{
    console.log("The sight is not verified")
    sawIt = false
    }
    return
}

arrayloop(sights)

function arrayloop(sights){
    for (let s=0; s < sights.length; s++)
    console.log(sights[s])
    return sights
}


let categorySights = [1,2,3,4,5,6,7,8,9,12,11];
let ligthAverage = 0
lightAverage=avg(categorySights);

function avg (arr){
    let total = 0;
    for (let c=0; c < arr.length; c++){
         total += arr[c];}  //cumulative number
        let meanValue = total/arr.length //calculate average
        return meanValue; //return meanValue
}

console.log(`the average # of lights in sights is: ${Math.round(lightAverage)}`)

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
varianceLights = variance(categorySights,lightAverage)
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
        {"numSight":5 ,'shapeShape':'joined_objects','shapeColor':"blue",'shapeLights':20}];

// let shapeUfo = UFO[3];

// console.log(` What is type ${shapeUfo}`)

function objectShape(shape,newSight){
    console.log(`The shape of the UFO is type ${shape}`)
    newSight()
    return 
}
function objectColor(color,newSight){
    console.log(`The color of the UFO is ${color}`)
    newSight()
    return 
}
function objectLights(lights,newSight){
    console.log(`The UFO has ${lights} lights`)
    newSight()
    return 
}
function describeObject(){
    console.log(`moving fast`)
}

//iterate on the UFO
for (let x=0; x < UFO.length; x++){
    if (UFO[x].numSight === 1){
        objectShape(UFO[x].shapeShape,describeObject); 
        objectColor(UFO[x].shapeColor,describeObject);
        objectLights(UFO[x].shapeLights,describeObject)} 
    else{
        console.log(`UFO ${UFO[x].numSight}  is different`)}
    }