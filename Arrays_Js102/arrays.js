console.log("Welcome to Arrays");

// arr1 = new Array("purple", "green", "yellow");
// arr2 = ["black", "orange", "pink"];
// arr3 = new Array(10);
// arr4 = [10];
// console.log(arr1);
// console.log(arr3);
// console.log(arr4);

console.log("----Type of--------");

// let arr = ["Hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

console.log("-----------");

//  "if you define an array using const. You can change the values of a constant array, but you cannot change the array itself. Here is a piece of code to demonstrate:"

// const arr = ["hey there"];
// arr[0] = "new value";
// console.log(arr[0]);

//new value TypeError: Assignment to constant variable.
// arr = ["nope, now you are overwriting the array"];//new value

//Accessing elements

//If we want to call a specific value based on its position in the array, we can use the name of our array, add square brackets to the end, and put the index we want to access between the square brackets, like this:

cars = ["Toyota", "Renault", "volks"];
console.log(cars[0]);

//overiding Elements
cars[0] = "tesla";
console.log(cars[0]);
cars[3] = "kia";
cars[-1] = "Fiat";
console.log(cars);
console.log(cars[3]);
console.log(cars[-1]);

//Built-in length property
//Arrays have a very useful built-in property: length. This will return the number of values that the array has:

colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];
console.log("length of colors:", colors.length);
console.log("length of booleans:", booleans.length);
console.log("length of empty array:", emptyArray.length);

//So, be aware that the length is one higher than the maximum index because the index of the array starts at 0, but when determining the length, we look at the number of elements and there are four separate elements. This is why the maximum index is 3 when the length is 4. Hence, the positional value of the last element in the array will be one fewer than the total number of elements.

console.log("---last element inside Array ----");

//use the length to access the last element of the array:
lastElement = colors[colors.length - 1];

//You get the highest index by subtracting 1 from the length[4] because, as you know, arrays are zero-indexed.

console.log(lastElement);
console.log("--------- ----");

numbers = [12, 24, 36];
//skipped [4] && [5]
//If there are elements in the middle of the sequence that do not have a value, they will still get counted
numbers[5] = 48;
console.log(numbers.length);
console.log("Numbers:", numbers);

//Because we added an element, 48, at index 5, it also created 2 elements at index positions 3 and 4 containing empty values

//Practice exercise 3.1
//1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and "Apples."
//2. Check your list length in the console.
//3. Update "Bread" to "Bananas."
//4. Output your entire list to the console.

//solution
// const shoppingList = ["millk", "bread", "Apples"];
// shoppingList[shoppingList.length];
// console.log(shoppingList);
// console.log(shoppingList.length);
// shoppingList[1] = "Bannans";
// console.log(shoppingList);
// console.log("--------- ----");

//Array methods
//length of array is a method

//Methods are functions on a certain object.

//Instead of holding a value, like properties, they perform actions.

//For now, all you need to know is that you can call methods and functions, and when you do, some code that is specified inside that function gets executed.

//Adding and replacing elements

//We can add elements with the push() method:

favouriteFruits = ["grapefruit", "orange", "lemon"];
favouriteFruits.push("tangerine");
console.log(favouriteFruits);
console.log("--------- ----");

//The value gets added to the end of the array. The push method returns the new length of the array, 4 in this case.

let lengthOfFavouritesFruits = favouriteFruits.push("lime");
console.log(favouriteFruits);
console.log("--------- ----");

//if you would want to add elements at a certain index? You can use the splice() method

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
console.log(arrOfShapes);
console.log("---------end of push ----");

// arrOfShapes.splice(2, 0, "square", "trapezoid");
// console.log(arrOfShapes); //the square and trapezoid get inserted on index 2.

//The splice() method takes multiple parameters:

//The first parameter, 2 in our case, is the index of the array on which we want to start inserting.

//The second parameter, 0 in our case, is the number of elements we want to delete starting at our previously defined starting index which is 2

arrOfShapes.splice(2, 2, "square", "Trapezoid");
console.log(arrOfShapes);

console.log("---------end of slice ----");

//You can also add another array to your array. This can be done with the concat() method.

//The elements of the first array will be first, and the elements of the argument of concat() will be concatenated to the end:

let arr5 = [1, 2, 3]; //elements of the first Array
let arr6 = [4, 5, 6]; //concantenated elements
let arr7 = arr5.concat(arr6); //argument as variables
let arr8 = arr7.concat(7, 8, 9); //argument as values
console.log(arr7);
console.log(arr8);
console.log("---------end of concat----");
//output [1,2,3,4,5,6]//end of the element
//output [1,2,3,4,5,6,7,8,9]//end of the element

//Deleting elements
//Removing the last element is done with pop():

arr8.pop();
console.log(arr8);
console.log("---------end of pop----");

//output [1,2,3,4,5,6,7,8]//deletes last element

//shiift()
//Deleting the first element can be done with shift(). This causes all other indices to be reduced by one:

//arr8.shift();
console.log(arr8); //deletes the first element

//output [2,3,4,5,6,7,8]//deletes 1st element
console.log("---------end of shift----");

//splice()

//This is a very special method because we can also use it to delete values.

//specify the index from where we want to start deleting

//and then the number of elements we want to delete.

//arr8.splice(1, 3);
arr8.splice(2, 3);

console.log(arr8);

const books = ["a", "b", "c", "d", "e", "f"];
books.splice(1, 3);
//books.splice(1);//Argument 1 start count from 1
//books.splice(3);//Argument 3  delete from 1 - 3
console.log(books);
console.log("---------end of splice----");

//Finding elements

//If you want to check whether a value is present in an array, you can use the find() method. What will go in the find() method is somewhat different. It is actually a function.

//This function will be executed on every element in the array until it finds a match, and if it does not, then it will return undefined.

arr8 = [2, 6, 7, 8];
let findValue = arr8.find((e) => {
  return e === 6;
});
let findValue2 = arr8.find((e) => {
  return e === 7;
});
console.log(findValue, findValue2);

console.log("---------end of find----");

//find Index
//Often, you do not only want to find the element, but you want to know what position it is on. This can be done with the
//indexOf() method.

arr8 = [2, 6, 7, 8];
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2); // 1, -1
//So, the first one will return 1 since that is the index position of 6 in the array. The second one will return -1 because the array does not contain 10.

arr8 = [2, 6, 7, 8, 9, 10];
let findIndex3 = arr8.indexOf(6, 1); //arg1-actualindexNo
let findIndex4 = arr8.indexOf(9, 5); //arg2-position index if its not found -1
console.log(findIndex3, findIndex4);

console.log("--------- end of indexOf----");

//In this case, the value of findIndex3 will be -1, because 6 cannot be found starting from index 2.

//lastIndexof()
let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog"); //4
console.log(lastDog);
console.log("---------lastIndexOf----");

//Sorting()

//It sorts numbers from small to high and strings A-Z. You can call sort() on an array and the order of the values of the array will change to a sorted order:

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert", "Allen"];
names.sort();
console.log(names);

console.log("-----Practice Exercise----");

//Practice exercise 3.2 1.
// Create an empty array to use as a shopping list.
// 2. Add Milk, Bread, and Apples to your list.
// 3. Update "Bread" with Bananas and Eggs.
// 4. Remove the last item from the array and output it into the console.
// 5. Sort the list alphabetically.
// 6. Find and output the index value of Milk.
//  7. After Bananas, add Carrots and Lettuce.
//  8. Create a new list containing Juice and Pop.
//   9. Combine both lists, adding the new list twice to the end of the first list.
//    10. Get the last index value of Pop and output it to the console. 11.
//     Your final list should look like this:

//solution

let shoppingList = ["Milk", "Bread", "Apples"];
console.log(shoppingList);

shoppingList.splice(2, 4, "Bananas", "Eggs");

console.log(shoppingList);
shoppingList.sort();
console.log(shoppingList);

let findValues = shoppingList.find(() => {
  let findMilk = shoppingList.indexOf("milk");
  console.log(` The index of milk is ${findMilk}`);
});

shoppingList.splice(1, 1, "Carrots", "Lettuce");
console.log(shoppingList);

console.log(shoppingList);

let newList = ["Juice", "Pop"];
let newItem = shoppingList.concat(newList, newList);
console.log(newItem);

let findLastIndex = newItem.lastIndexOf("Pop");
console.log(`The last index value of pop is:${findLastIndex}`);
console.log("-----end of solution----");

//Multidimensional arrays
//Earlier, we established already that arrays can contain any data type. This means that arrays can also contain other arrays (which, in turn, can contain… other arrays!). This is called a multidimensional array. It sounds complicated, but it is just an array of arrays:
//a list of lists:

let someValues1 = [1, 2, 3];
let someValues2 = [4, 5, 6];
let someValues3 = [7, 8, 9];

let arrofArrays = [someValues1, someValues2, someValues3];
console.log(arrofArrays);
let arrOfArrays2 = [
  [1, 2, 3, 4, 5, 6],
  [4, 5, 6, 7, 8],
  [7, 8, 9, 10, 11],
];
let value = arrOfArrays2[0][3];
let value2 = arrOfArrays2[1][2];
console.log(value);
console.log(value2);
arrofArrays = [arrofArrays, arrofArrays, arrofArrays];
console.log(arrofArrays);

middleArray = arrofArrays[1][1][1];
console.log(middleArray);

//Practice exercise 3.3 1.
//Create an array containing three values: 1, 2, and 3. 2. Nest the original array into a new array three times. 3. Output the value 2 from one of the arrays into the console.

let val1 = [1, 2, 3];

let val2 = [val1, val1];
let val3 = val2[1][1];
console.log(val2);
console.log(val3);

let carz = ["benz", "toyota", "subaru"];
let allcars = [carz, carz, carz];
console.log(allcars);
getcars = allcars[1][2];
getcars2 = allcars[0][0];
console.log(getcars);
console.log(getcars2);

console.log("-----end of Arrays-");
