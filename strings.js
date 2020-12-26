var myString = 'i\'m "fun" a string';
var string1 = "abc";
var string2 = "ABC";

console.log(myString);
console.log(myString.length);
console.log(myString.toUpperCase());
console.log(myString.indexOf("string"));
//console.log(myString.indexOf("apple"));

if (myString.indexOf("apple") === -1) {
    console.log("apple not found")
} else {
    console.log(myString.indexOf("string"))
}

console.log(string1 === string2);
console.log(string1 < string2);