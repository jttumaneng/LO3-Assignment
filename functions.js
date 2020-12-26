function getAverage(x, y) {
    var average = (x + y) / 2;
    console.log(average);
    return average;
}
var myResults = getAverage(2, 3);
console.log("the average is " + myResults);

function logResults() {
    console.log("the average is " + myResults);
}
logResults();