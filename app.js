//Run this file by command : node --harmony_tailcalls factorialCalculation.js.
//Dev environment node version : 6.9.4
//Dev environment npm version : 3.10.10
//Author : Sanket Makhija
'use strict';

var factorial = require('./factorialCalculation.js');
//Command line utility to find factorial of a number.

var stdin = process.stdin, stdout = process.stdout;
var enterMore = "Enter an integer to find factorial. Decimal number will convert to integer. Press Q / q to exit : ",
showError = "Error. Enter an integer only.",
showResult = "The factorial of a number ";
stdin.resume();
stdout.write(enterMore); 

stdin.on('data', function(data) {
  data = data.toString().trim();
  if(data.toUpperCase() == 'Q'){
    stdin.end();
  }
  else{
    data = parseInt(data,10);
    if(data){
      console.log(showResult + data + " : "  + factorial(data,10));
      console.log(enterMore);
    }
    else{
      console.log(showError);
      console.log(enterMore);
    }
  }
});