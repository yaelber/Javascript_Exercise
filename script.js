// Function #1//
var x = 3;
var y = 4
function mathOne(x,y) {
	return x+y;
}
mathOne(x,y);

//Function #2//
var x = 12;
if (x<10) {
	greeting = "less than 10";
}	else {
	greeting = "equal or more than 10";
}

//Function #3//
var num = prompt('what is your lucky number?');
var number = Number(num);
function newLuckyNumber(number) {
	return number + 3 
}

newLuckyNumber(3)

//Function 4 (option 3)//
var x = 3;
var y = 4;
console.log (x+y)

var x = "I Love "
var y = "Homework"
console.log(x+y)

//Function 5 (option 7)//
var stringOne = 'love';
var stringTwo = 'love';
function compare(stringOne,stringTwo) {
	if stringOne == stringTwo {
		return greeting = "they are the same"
	} else {
		return false
	}
}

//Function 6 (option 8)//
var name = prompt('Enter a name',"");
alert("You entered the name " + name);

//Function 7(option 5)//
var numberString = prompt('Give a number'); 
var number = Number(numberString);
function checkValue(number) {
  if (number < 10) {
   alert('It was less than 10')
  } else {
    alert(number + ' is greater than or equal to 10');
  }
}

checkValue(number)

//Function 8(option 10)//
var doorNum = prompt('There are 3 doors. Behind each door there is a prize. '+ 'Which door would you like to open? ' + 'Enter 1,2 or 3 below:'); 
var number = Number(doorNum);
function doorSelect(number) {
  if (number === 1) {
   alert('You won a horse')
  } else if (number === 2) {
  	alert('You won a duck')
  } else 
  	alert('You won a cow')
}
doorSelect(number)