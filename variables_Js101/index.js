//JAVASCRIPT BOOK 101

// create variables

// let message;
// message = "hello";
// message = "world";
// alert(message);

//We can also declare two variables and copy data from one into the other.

// let hello = "hello world";
// let message;
// message = hello;
// console.log(message);

// //✔ Tasks
// Working with variables importance: 2
// 1. Declare two variables: admin and name . 2. Assign the value "John" to name . 3. Copy the value from name to admin . 4. Show the value of admin using alert (must output “John”).

let admin, name;
name = "john";
admin = name;

console.log(admin);

//Data types
// A variable in JavaScript can contain any data. A variable can at one moment be a string and at another be a number:

let message = "hello";
message = 123545;

//Programming languages that allow such things are called “dynamically typed”
//There are eight basic data types in JavaScript

//Number;
let n = 123;
n = 12.345;

//The number type represents both integer and floating point numbers.
//Infinity represents the mathematical Infinity  ∞. It is a special value that’s greater than any number.

console.log(1 / 0);

//BigInt;

//BigInt type was recently added to the language to represent integers of arbitrary length. A BigInt is created by appending n to the end of an integer literal

const BigInt = 1233444444444566778899900n;
console.log(BigInt);

String;
//A string in JavaScript must be surrounded by quotes.
// let str = "string";
// let str2 = "Single quotes are ok too";
// let phrase = `can embed another ${str}`;
// console.log(phrase);

//Boolean (logical type)
//The boolean type has only two values: true and false .

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

console.log(nameFieldChecked);
console.log(ageFieldChecked);

//The null value

//In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
//It’s just a special value which represents “nothing”, “empty” or “value unknown

let age = null;
console.log(age);

//The “undefined” value
//The meaning of undefined is “value is not assigned”. If a variable is declared, but not assigned, then its value is undefined

// let x;
// console.log(x);

//Data types
//All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever).

// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 0n);
// console.log(typeof true);
// console.log(typeof "foo");
// console.log(typeof Symbol("id"));
// console.log(typeof Math);
// console.log(typeof null);
// console.log(typeof alert);

//1. Math is a built-in object that provides mathematical operations. We will learn it in the chapter Numbers. Here, it serves just as an example of an object.

//2. The result of typeof null is "object" . That’s wrong. It is an officially recognized error in typeof , kept for compatibility. Of course, null is not an object. It is a special value with a separate type of its own. So, again, this is an error in the language.

//3. The result of typeof alert is "function" , because alert is a function. We’ll study functions in the next chapters where we’ll also see that there’s no special “function” type in
//JavaScript. Functions belong to the object type. But typeof treats them differently, returning "function" . That’s not quite correct, but very convenient in practice.

//string conversion

let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

//Numeric Conversion

//For example, when division / is applied to non-numbers:

console.log("6" / "2");

//We can use the Number(value) function to explicitly convert a value to a number:

let str = "123";
console.log(typeof str);
let num = Number(str);
console.log(typeof num); //123

let ages = Number("an arbitrary string instead of a number");
console.log(ages);

console.log(Number(true));
console.log(Number(false));

//Summary
//The three most widely used type conversions are to string, to number, and to boolean.
//String Conversion – Occurs when we output something. Can be performed with String(value) . The conversion to string is usually obvious for primitive values.
//Numeric Conversion – Occurs in math operations. Can be performed with Number(value) .7

//✔ Tasks

// console.log("" + 1 + 0);
// console.log("" - 1 + 0);
// console.log(true + false);
// console.log(6 / "3");
// console.log(4 + 5 + "px");
// console.log("$" + 4 + 5);
// console.log("4" - 2);
// console.log("4px" - 2);
// console.log(7 / 0);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log("\t\n" - 2);

//Operators

//Terms: “unary”, “binary”, “operand”

//An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2 . Sometimes, people call these “arguments” instead of “operands”.

//Unary Operator

//●An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

let b = 1;
b = -b;
console.log(b); // -1, unary negation was applied

//● An operator is binary if it has two operands. The same minus exists in binary form as well:

let bin = 1;
let ary = 3;
console.log(ary - bin); // 2, binary minus subtracts values

//String concatenation, binary +

let s = "my" + "string";
console.log(s);
//Note that if one of the operands is a string, the other one is converted to a string too.
console.log("1" + 2);
console.log(2 + "1");

//Note that operations run from left to right. If there are two numbers followed by a string, the numbers will be added before being converted to a string:

console.log(2 + 2 + "1"); // "41" and not "221"

//String concatenation and conversion is a special feature of the binary plus +

// Other arithmetic operators work only with numbers and always convert their operands to numbers.
//For instance, subtraction and division:
console.log("2" - "1");
console.log("6" / "2");

//String concatenation and conversion is a special feature of the binary plus + . Other arithmetic operators work only with numbers and always convert their operands to numbers.
//For instance, subtraction and division:

let u = 1;
console.log(+u);

let y = -3;

console.log(+y);
console.log(+true);
console.log(+"");

//The need to convert strings to numbers arises very often. For example, if we are getting values from HTML form fields, they are usually strings. What if we want to sum them? The binary plus would add them as strings:

let apples = "2";
let oranges = "23";

console.log(apples + oranges); // "23", the binary plus concatenates strings

let mango = "2";
let grapes = "3";
// both values converted to numbers before the binary plus
//console.log(+mango + +grapes);

//If we want to treat them as numbers, we need to convert and then sum them:

console.log(Number(mango) + Number(grapes));

//unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.

//stopped@ pg42
//increement and decrement

let counter = 2;
counter++;
//++counter;
console.log(counter);

//String comparison
//To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

console.log("a" > "A");
console.log("2" > 1);
console.log("01" == 1);

//A regular equality check == has a problem. It cannot differentiate 0 from false :
console.log(0 == false);

//even with an empty string
console.log("" == false);

//This happens because operands of different types are converted to numbers by the equality operator == . An empty string, just like false , becomes a zero.

console.log(null == undefined);
console.log(null === undefined);

//null/undefined are converted to numbers: null becomes 0 , while undefined becomes NaN

//Strange result: null vs 0
//Let’s compare null with a zero:

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

//An incomparable undefined The value undefined shouldn’t be compared to other values:

console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined == 0); //false

//Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons. The equality check
// (3) returns false because undefined only equals null

//Avoid or evade Problems

//Don’t use comparisons >= > < <= with a variable which may be null/undefined , unless you’re really sure of what you’re doing. If a variable can have these values, check for them separately.

//Summary

//● Comparison operators return a boolean value.
//● Strings are compared letter-by-letter in the “dictionary” order.
// ●When values of different types are compared, they get converted to numbers (with the exclusion of a strict equality check).

//●The values null and undefined equal == each other and do not equal any other value.
//●Be careful when using comparisons like > or < with variables that can occasionally be null/undefined . Checking for null/undefined separately is a good idea.

//✔ Tasks
//What will be the result for these expressions?

console.log("========");
console.log(5 > 4);
console.log("apple" > "pineapple");
console.log(undefined == null);

//

// let aged = prompt("whats is your age?");
// alert(`you are ${aged} years old`);

// let isBoss = confirm("Are you the boss?");
// alert(isBoss); // true if OK is pressed

// let nr1 = 2;
// let nr2 = 4;
// let result1 = nr1 ** nr2;
// console.log(result1);

//Modulus;

console.log("========");
// let nr1 = 9.59;
// let nr2 = 2;
// let result1 = nr1 + nr2;
// console.log(`${nr1} % ${nr2} = ${result1}`);

let currentTime = 9.59;
let addHours = currentTime + 2;
console.log(addHours);
let smallMin = addHours + 0.5;
console.log(smallMin);

console.log("========");

console.log("++ prefix-/adds 1/  and postfix ++/remains 1");
let nr1 = 4;
console.log(nr1++);
let nr2 = 5;

console.log(nr2++);
let nr3 = 2;
console.log(nr3++); //nr3++ //2
//console.log(nr1++ + ++nr2 * nr3++);

//mutiplication higher precedence

//output 16

// let nr1 = 4;
// let nr2 = 5;
// let nr3 = 2;
// console.log(nr1++ + ++nr2 * nr3++);

//It outputs 16. It will do the multiplication first, according to the basic mathematical order of operations.

//For multiplying, it uses 6 (prefix, so 5 is incremented before multiplying) and 2 (postfix, so 2 is only incremented after execution, meaning it won't affect our current calculation). This comes down to 12. And then nr1 is a postfix operator, so this one will execute after the addition. Therefore, it will add 12 to 4 and become 16.

//++nr2 //6 *//nr3++ //2 = 12 + nr1++ 4

//Practice exercise 2.3
//Write some code to calculate the hypotenuse of a triangle using the Pythagorean theorem when given the values of the other two sides. The theorem specifies that the relation between the sides of a right-angled triangle is a2 + b2 = c2.

//Pythagorean theorem -calculate the hypotenuse of a triangle

//solution
function calculateHypotenuse(a, b) {
  const squarNum = a ** a + b ** b;
  return Math.sqrt(squarNum);
}

const findRoot = calculateHypotenuse(2, 2);
console.log(findRoot);

let ab = 2;
let bc = 3;
let cd = 4;

let total = bc + ab;
let total2 = ab / cd;
cd %= b;

console.log({ tot: total, tot2: total2, tot3: cd });

//RECAP COMPARISM OPERATORS
//Comparison operators are different from the operators we have seen so far. The outcome of the comparison operators is always a Boolean, true, or false.

//Equal
//There are a few equality operators that determine whether two values are equal

//They come in two flavors:

//EQUAL VALUE ONLY:
// returns(true)when values are
//equal even though the
//type is different:

// EQUAL VALUE && DATA TYPE
//while the second returns (true)
//only when the value and the
// type are the same:

console.log("========");

//EQUAL VALUE ONLY:
// let x = 5;
// let z = "5";
// console.log(x == z);

// EQUAL VALUE && DATA TYPE
// let d = 5; //number
// let e = "5"; //string
// console.log(d === e);

//. This triple equals operator is the one you should most commonly be using when you need to check for equality, as only with this one can you be sure that both variables are really equal.

let f = 5; //number
let g = "5"; //string
console.log(f != g); //when there is only one equals sign in a != operator, it is comparing loosely for non-equality,Therefore, it concludes that they are equal and therefore not equal should result in false.

console.log(f !== g);
//The one with two equals signs is checking for strict nonequality:

console.log("========");
//Logical operators
//Whenever you want to check two conditions in one, or you need to negate a condition, the logical operators come in handy. You can use &&, ||, and !

let w = 1;
let x = 2;
let z = 3;
console.log(w < x && x < z);
console.log(w > x || x < z);

console.log("========");
//NOT ! OPERATOR
//In some cases you will have to negate a Boolean. This will make it the opposite value. It can be done with the exclamation mark, which reads as not:
let m = false;
console.log(!m);

//You can also negate an expression that evaluates to a Boolean, but you would have to make sure that the expression gets evaluated first by grouping it.

let xprs1 = 1;
let xprs2 = 2;
console.log(!(xprs1 < xprs2));

//Chapter project Miles-to-kilometers converter

//1 mile equals 1.60934 kilometers.
// i mile = 1.6kil

//Solution

const newValueMiles = 130;

const kiloMeter = 1.60934;

const milesToKiloConverter = newValueMiles * kiloMeter;
console.log(
  `The distance of  ${newValueMiles} kms is equal to ${milesToKiloConverter} miles.`
);

console.log("========");

//inches to cm conversion 2.54cm
const InchestoCm = 2.54;
//pounds to kilogram is 0.453592
const poundsToKilo = 0.453592; //2.2046 0.453592

//Given height in cm
const heightIncm = 1.85;
console.log(heightIncm);

//Given weight in pounds
const wightInPunds = 90;

const InchesResult = heightIncm * InchestoCm;
console.log(InchesResult);

const weightResult = wightInPunds * poundsToKilo;
console.log(weightResult);
const bmi = wightInPunds / heightIncm ** heightIncm;
console.log(bmi);
