// //OBJECTS

// //arrays are a very special type of object. Arrays are objects with indexed properties. All the other objects, and also the objects we will see here, are objects with named properties

// let dog = {
//   dogName: "Bingo",
//   weight: 2.4,
//   color: "brown",
//   breed: "chihuahua",
//   age: 3,
//   burglarBiter: true,
// };

// //We can access the properties of this object in a very similar way as we would with the array. This time, we are not using the index number, but the name of the property, to get the value:

// let dogWeight = dog["weight"];
// console.log(dogWeight);

// dog["country"] = "Germany";
// console.log(dog);

// dog["height"] = "5.3inch";
// console.log(dog);

// let variable = "weight";
// console.log(dog[variable]);

// variable = "breed";
// console.log(dog[variable]);

// animal = "color";
// console.log(dog[animal]);

// const table = {
//   height: 45,
//   color: "red",
//   Brand: "Bronzito",
//   specification: "Classic",
// };

// table["height"] = 65;
// console.log(table);

// const student = {
//   name: "jaden",
//   classRoom: "K-Gold",
//   yearDate: 2022,
//   gender: true,
// };

// console.log(student);

// student["certificate"] = "Well Behaved";
// student["classRoom-color"] = "Gold";
// student["gender"] = "Not Available";
// console.log(student);
// newStudent = ["classRoom"];
// newStudent = ["name"];
// console.log(student[newStudent]);
// console.log(student[newStudent]);

// console.log("====== working with object ======");

// //Practice exercise 3.4
// //1. Create a new myCar object for a car. Add some properties, including, but not limited to, make and model, and values for a typical car or your car. Feel free to use booleans, strings, or numbers.

// //2. Create a variable that can hold the string value color. This variable containing a string value color can now be used to reference the property name within myCar. Then, use the variable within the square bracket notation to assign a new value to the color property in myCar.
// //3. Use that same variable and assign a new property string value to it, such as forSale. Use the bracket notation once again to assign a new value to the forSale property to indicate whether the car is available for purchase.
// //4. Output make and model into the console. 5. Output the value of forSale into the console.

// console.log("====== Practice exercise ======");

// const myCar = {
//   name: "Nissan",
//   yearModel: 2008,
//   color: "silver",
//   abs: true,
// };

// newCarColor = "color";
// myCar[newCarColor] = "purple";
// console.log(myCar[newCarColor]);
// console.log(myCar);

// newCarColor2 = "forsale";
// myCar[newCarColor2] = 60000;
// console.log(myCar);

// if (newCarColor2 === "forsale") {
//   console.log(`This car is no longer available:${newCarColor2}`);
// } else {
//   console.log("Not available");
// }
// carname = "yearModel";
// myCar[carname] = "still";
// console.log(myCar);

// carname = "model";
// myCar[carname] = "Benz";
// console.log(myCar["name"]);
// console.log(myCar[carname]);

// console.log("--------end of object solution---------");

// //Working with objects and arrays
// //When working with objects and arrays, you will see these often combined. In the last section of this chapter, we will deal with combining objects and arrays, and also objects inside objects.

// //Objects in objects
// //Let's say we want to have an object for a company. This company will have an address. And an address is another object. If we give our company an address, we are using an object inside an object:

// let company = {
//   companyName: "Healthy Candy",
//   activity: "food manufacturing",
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//     yearsOfEstablishment: 2023,
//   },
// };

// //To access or modify one of the properties of the address here, we can use two approaches:

// company.address.zipcode = "5610"; //object....modification
// company["state"] = "malta"; //arry[modification]
// company.state = "Gozo";

// // variable = "expiry";
// // company[variable] = 2033;

// company["street"] = "3rd avenue";
// console.log(company);

// console.log("--------end of object in objects---------");

// //Arrays in objects
// //Our company might have a range of activities instead of one. We can simply replace the activity from our previous sample with an array:

// company = {
//   companyName: "Alexall",
//   activities: [
//     "food manufacturing",
//     "improving kids' health",
//     "manufacturing toys",
//   ],
//   address: {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },
//   yearOfEstablishment: 2021,

//   managers: ["Nicholas", "Jaden", "Glenda"],
// };

// let activity = company.activities[0];
// console.log(activity);

// activity = company["address"]["city"];

// let secondActivities = company.managers[0];

// console.log(activity);
// console.log(secondActivities);
// console.log("----------end of Arrays in object--------------");

// //Objects in arrays

// //It is very possible that instead of one address, our company has a list of addresses. We can accomplish this by creating an array of address objects. In this case, we will create an array of two:

// let addresses = [
//   {
//     street: "2nd street",
//     number: "123",
//     zipcode: "33116",
//     city: "Miami",
//     state: "Florida",
//   },

//   {
//     street: "1st West avenue",
//     number: "5",
//     zipcode: "75001",
//     city: "Addison",
//     state: "Texas",
//   },
//   {
//     street: "2nd West avenue",
//     number: "7",
//     zipcode: "90001",
//     city: "catford",
//     state: "St-louis",
//   },
// ];
// let myNewStreet = addresses.str

// let streetName = addresses[0].zipcode;
// streetName = addresses[2].zipcode;
// streetName = addresses[1].state;
// console.log(streetName);

// //practice
// console.log("--------practice----------");

// let fruitsLog = [
//   {
//     mango: "🥭",
//     yeild: "4",
//     Phlevel: "citric",
//     vitamins: "C",
//   },
//   {
//     papayas: "jolo",
//     yeild: "2",
//     Phlevel: "zitrus",
//     vitamins: "d",
//   },

//   {
//     papaya: "🛢",
//     grapes: "4",
//     Phlevel: "zitrus",
//     vitamins: "d",
//   },
// ];
// fruitsLog[1].papayas = "onions";
// fruitsLog[2].papaya = "onions";
// // newFruits = "Healthy";
// // fruitsLog[newFruits] = "True";
// console.log(fruitsLog);

// console.log("-------- end of selfpractice----------");

// //Practice exercise 3.5
// //1. Create an object named people that contains an empty array that is called friends.
// //2. Create three variables, each containing an object, that contain one of your friend's first names, last names, and an ID value.
// //3. Add the three friends to the friend array. 4. Output it to the console.

// const people = { friends: [] };

// const freind1 = { first: "Laurence", last: "Soki", id: 1 };
// const freind2 = { first: "jones", last: "Ramzy", id: 1 };
// const freind3 = { first: "Nick", last: "Allen", id: 1 };
// people.friends.push(freind1, freind2, freind3);
// console.log(people);

let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};
//We can access the properties of this object in a very similar way as we would with the array. This time, we are not using the index number, but the name of the property, to get the value

const dogColor = dog["color"];
const dogWeight = dog.weight;
console.log(dogColor, dogWeight); //output brown 2.4

//Updating objects

//We can change the value of the properties of the objects. Again, this is similar to an array because an array is an object as well, but for properties, we have two options:

dog["breed"] = "German shepeard";
dog.weight = 23;
console.log(dog); //output breed:German shepard

// const variable = "age";
// dog[variable] = 34;
//dog.variable = 34;
variable = "breed";
console.log(dog[variable]);

const myCar = {
  category: ["Abenz", "toyota"],
  brandle: "benz",
  color: "red",
  emission: true,
  yearOfManufacture: 2090,
  make: "london City Trans",
};

//assigned a new value
const variables = "color";
myCar[variables] = "yellow";

//assigned a new value to array elements
const variables2 = "category";
myCar[variables2] = ["RangeSpot", "Teslas"];
console.log(myCar);

//assigned & created new property & value forsale
const addForsale = "forsale";
myCar[addForsale] = "next";
console.log(myCar);

//assigned & created new property & value Y.O.E

const expiryYear = "YearOfExpiry";
myCar[expiryYear] = 2006;
console.log(myCar);

//assigned & created new property & value addModel

const addModel = "Modelnumber";
myCar[addModel] = "34ERDW2";
//console.log(myCar);
const getModel = myCar[addModel];

console.log(getModel);
console.log(myCar.make);

//get the value of the proprty
const getSale = myCar[variables];
console.log(getSale); // output yellow

console.log("-----START HERE😁--------");

//To access or modify one of the properties of the address here, we can use two approaches:

const company = {
  companyName: "Healthy Diet",
  activity: "Healthy Candy",
  address: {
    street: "2nd Street",
    number: "123",
    zipCode: "3316",
    city: "Miami",
    state: "Florida",
  },
  taxReturns: {
    bank: "G.O.C",
    accountNumber: "345123JBU893",
    grossDeduct: "continious",
    formula: "132-Info",
  },
  yearOfEstablishment: 2021,
};

const findActivity = company["companyName"];
const findActivity2 = company[("companyName", "activity")];
const findActivity4 = company.taxReturns.accountNumber;
const findActivity3 = (company["companyName"] = "Vapers choices");
console.log(findActivity, findActivity2, findActivity3, findActivity4);
//output Healthy Diet, Healthy Candy,Vapers choices

const findActivity5 = company["taxReturns"].grossDeduct;
console.log(findActivity5); //continious
