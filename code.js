/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

readline_object.on("line", (value) => { //Read input values
	input.push(value);
})
//Call ContestResponse when all inputs are read
readline_object.on("close", ContestResponse); 


function ContestResponse(){
let n = input.shift();
n = parseInt(n);
//console.error(input);
//var input2 = [][];
var inputver = [];

console.error(input);

for (let i = 0; i<= n - 1; i++)
{
    if ( input[i].length >= 5 && input[i].length <= 7 )
    inputver[i] = input[i];
}


var filtered = inputver.filter(function (el) {
  return el !== "";});

var input2 = inputver.map(element => element.split(""));
console.error(filtered);

var a = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];


for (let i = 0; i < a.length; i++)
{
   
}
    
}
