////Q.85 Finding the Position of a Substring: Write a function that locates the first occurrence
//// of the word "code" within any given string and returns its position.


// This function finds where "code" first shows up in a text
function findCodePosition(str: string): number {
   return str.indexOf("code"); // Looks for "code" and tells where it found it
}
// Example: Searching within a sentence
console.log(findCodePosition("Learn to code with JavaScript")); // Outputs the start position of "code"
// It tells us the position number where "code" starts.


////Q.86 Checking for Text Presence: Create a function that checks if the word "JavaScript" is present
// //in a given string. It should return true if found, otherwise false.


// This function checks if a sentence has "JavaScript" in it
function checks(str: string) {
    if (str.includes("JavaScript")) { // Checks for "JavaScript" and returns true or false
        return true
   } else {
       return false
   }
}

// Example: Seeing if a text mentions JavaScript
console.log(checks("I love coding in JavaScript!")); // Outputs true or false based on the check
// It simply says true if "JavaScript" is there, or false if it's not.


//Q.87 Extracting a Substring: Demonstrate how to extract the first 10 characters from a string.


// This function takes out the first 10 characters from any text
function extractFirstTenChars(str: string): string {
    return str.substring(0, 10); // Gets characters from start to position 10
}
// Example: Taking the first 10 characters of a sentence
console.log(extractFirstTenChars("Hello, my name is hamna khan!")); // Shows the first 10 characters
// It gives us a smaller piece of the original text, just the beginning part.


////day 30 (Q.88) Rounding to the Nearest Integer: Write a function that takes a decimal number as input and returns
//// the number rounded to the nearest integer.

// This function rounds a decimal number to the nearest whole number
function roundToNearestInteger(num: number): number {
    return Math.round(num); // Rounds the number
}
// Example: Rounding a decimal
console.log(roundToNearestInteger(4.7)); // Outputs: 5
console.log(roundToNearestInteger(4.4)); // Outputs: 4
// This shows how the function rounds numbers either up or down.



//Q.89: Converting Strings to Numbers: Create a function that takes a string representing a number
// (like "123") and converts it into an actual number type.

// This function changes a string into a number
function convertStringToNumber(str: string): number {
   return parseFloat(str); // Converts the string to a number
}
// Example: Turning a numeric string into a real number
console.log(convertStringToNumber("123.45")); // Outputs: 123.45
console.log(convertStringToNumber("98")); // Outputs: 98
// We're taking strings that look like numbers and turning them into actual numbers.


//Q.90 Checking if a Value is NaN: Demonstrate how to check if a variable's value is NaN (Not a Number) and
// return a boolean result.

// This function checks if a value is Not a Number (NaN)
function isValueNaN(value: any): boolean {
   return isNaN(value); // Checks and returns true if the value is NaN, false otherwise
}
// Examples: Checking different values
console.log(isValueNaN("hello")); // Outputs: true, because "hello" isn't a number
console.log(isValueNaN(123)); // Outputs: false, because 123 is a number==
// This way, we can guard against unexpected non-numeric values in our calculations or inputs.



////Q.91 create an array of your three favorite and add a new fruit to the end of the array.


//// define array with three favorite fruits
 let favoriteFruits: string[] = ["mango", "cherry", "strawberry"];
// //add banana to the end of the array
  favoriteFruits.push("banana");
 console.log(favoriteFruits);

////Q.92 write a function to remove the last element from an array and return the remove element?

function removeLastElement(str:string[]) {
    return str.pop()
}
let names:string[] = ["hamna", "minhaj", "aijaz", "fiza"];
console.log(removeLastElement(names));


////Q.93 find the index of "banana" in an array of fruits and replace it with "mango".

let fruits:string[] = ["apple", "banana", "orange"];
fruits[fruits.indexOf("banana")] = "mango";
console.log(fruits);


////Q.94 use the .map() method to create a new array that contains the length of each word from an array of words.

////define an array with some words
const words: string[] = ["hellow", "world", "typescript", "javascript"]
////uses .map() to create a new array with the length of each word
const lengths: number[] = words.map(word => word.length);
console.log(lengths);


////Q.95 write a function that uses the .filter()method to return an array of numbers greater than 10.


//Filtering an array of numbers
const numbers: number[] = [5, 10, 15, 20, 25, 30, 35, 40];

function filterGreaterThenTen(numbers :number []): number[] {
    return numbers.filter(number => number > 10);
}
console.log(filterGreaterThenTen(numbers));


////Q.96 demonstrate how to use the .reduce() method to calculate the sum of all members in an array.

const  number: number[] =[1, 2, 3, 4, 5];

function calculatesum(numbers: number[]):number {
    return numbers.reduce((accumulator, current) => accumulator + current,0);
}
console.log(calculatesum(number));


////Q.97 write a function that returns the current date in the format "dd-mm-yyyy".

function getCurrentDate(){
    const currentdate = new Date();
    const day = String(currentdate.getDate()).padStart(2, '0');
    const month = String(currentdate.getMonth()+ 1).padStart(2, '0');
    const year = currentdate.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
}
console.log(getCurrentDate());


////Q.98 create a javascript snippet that calculates and logs how many days are left untill new year.

function daysUntilNewYear(){
    const currentDate = new Date ();
    const nextYear = new Date(currentDate.getFullYear()+ 1,0,1);
    const defferenceInMillis = nextYear.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(defferenceInMillis / (1000*60*60*24));
    return daysLeft;
}
console.log("days untill new year. " + daysUntilNewYear());


////Q.99 generate a date object representing your next birthday and log it to the console.

function getNextBirthday(month: number , day: number): Date{
    const currentDay = new Date();
    let year = currentDay.getFullYear();
    const birthday = new Date(year, month - 1, day);
    if (birthday < currentDay) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
const nextBirthday = getNextBirthday(24, 10);
console.log("Next birthday on:", nextBirthday.toLocaleDateString());


////Q.100 use the jaascript math object to find the square root of 144.

const squareRoot = Math.sqrt(144);
console.log(`The square root of 144 is ${squareRoot}`);

