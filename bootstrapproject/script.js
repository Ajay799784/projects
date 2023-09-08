// x = document.getElementById("demo").innerHTML = "hello javascript";
// function myFunction() {
//   document.getElementById("demo").innerHTML =
//     "this is the ajay kumar of the process of the enter man of the masses";
// }
// function doctor() {
//   document.getElementById("demo").innerHTML = 5 + 6;
// }
// document.getElementById("demo").innerHTML = 5 + 6;
// let x, y, z;
// x = 5;
// y = 6;

// z = x + y;
// document.getElementById("demo").innerHTML = "The value of z is" + z + ".";
// function myFunction() {
//   document.getElementById("demo1").innerHTML = "hello Ajay";
//   document.getElementById("demo2").innerHTML = "hello mouni";
// }
// document.getElementById("heading").innerHTML = "This is javascript heading";
// document.getElementById("para").innerHTML =
//   "This is the my first paragraph information of the content process enter into the world";
// document.getElementById("demo").innerHTML =
//   "This is the example of the functions variable";
// let x = 5 + 2 + 3;
// document.getElementById("demo").innerHTML = x;
// var x = 10;
// var x = 0;
// console.log(x);
// const cars = ["audi", "benz", "volvo"];
// document.getElementById("demo").innerHTML = cars;
// cars[0] = "simha";
// cars.push("king");
// document.getElementById("demo").innerHTML = cars;
// const cars = { type: "audi", model: "500", color: "black" };
// cars.color = "red";
// cars.owner = "ajay kumar";
// document.getElementById("demo").innerHTML =
//   "this is my car and my car color" +
//   cars.color +
//   "this is thecar owner" +
//   cars.owner;
// let x = 5;
// document.getElementById("demo").innerHTML = Math.pow(x, 2);
// let value = toCelsius(77);
// document.getElementById("demo").innerHTML = value;
// function toCelsius(f) {
//   return (5 / 9) * (f - 32);
// }
// const orderSet = new Set([
//   "pasta",
//   "pizza",
//   "burger",
//   "mofarha",
//   "mouni",
//   "ajay",
// ]);
// console.log(orderSet);
// console.log(new Set("ajay"));
// console.log(orderSet.has("pizza"));
// console.log(orderSet.has("bread"));
// orderSet.add("mouni");
// orderSet.add("pinky");
// orderSet.delete("burger");

// console.log(orderSet);
// for (const order of orderSet) console.log(order);
// const staff = ["water", "milk", "rose", "oil", "green"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// // console.log(staff);
// console.log(new Set("ajaykumar o").size);
// let text = "Apple, banana, kiwi";
// let part = slice(7, 13);
// document.getElementById("demo").innerHTML = part;
// function myFunction() {
//   let text = document.getElementById("demo").innerHTML;
//   let raju = (document.getElementById("demo").innerHTML = text.replace(
//     "microsoft",
//     "water"
//   ));
// }
// function myFunction() {
//   let text = "this is the inner material";
//   document.getElementById("demo").innerHTML = text.toUpperCase();
// }
// let text1 = "hello";
// let text2 = "world";
// let text3 = text1.concat(" ", text2);
// document.getElementById("demo").innerHTML = text3;
// let text1 = "       hello world    ";
// let text2 = text1.trimStart();
// document.getElementById("demo").innerHTML = text2.length;
// let text = "5";
// let text2 = text.padStart(4, "0");
// document.getElementById("demo").innerHTML = text2;
// let text = "please locate where locations occurs";
// document.getElementById("demo").innerHTML = text.includes("locations");
// let price = 10;
// let VAT = 0.25;
// let total = `Total:${(price * (1 + VAT)).toFixed(2)}`;
// document.getElementById("demo").innerHTML = total;
// const question = new Map([
//   ["question", "what is the best programming language in the world"],
//   [1, "C"],
//   [2, "java"],
//   [3, "javascript"],
//   ["correct", 3],
//   [true, "Correct🤣🤣"],
//   [false, "try again"],
// ]);
// console.log(question);
// // console.log(Object.entries(openingHours));
// console.log(question.get("question"));
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`answer ${key}:${value}`);
// }
// const answer = Number(prompt("your answer"));
// console.log(answer);
// console.log(question.get(question.get("correct") === answer));
// console.log(question.get("question"));
// for (const [key, values] of question) {
//   if (typeof key === "boolean") console.log(`answer ${key}:${values}`);
// }
// console.log(...question);
// console.log(...question.entries());
// console.log(...question.keys());
// console.log(...question.values());
// const gameEvents = new Map([
//   [17, "goal"],
//   [36, "substution"],
//   [47, "goal"],
//   [61, "substution"],
//   [64, "yellow card"],
//   [69, "red card"],
//   [70, "substution"],
//   [72, "substution"],
//   [76, "goal"],
//   [80, "goal"],
//   [92, "yellow card"],
// ]);
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// gameEvents.delete(64);
// console.log(gameEvents);
// const event = new Set(gameEvents.values());
// const raju = delete gameEvents.key(64);
// console.log(raju);

// console.log(gameEvents.keys());
// const array = new Set(gameEvents.values);
// console.log(array);
// console.log(
//   `an event happend on average every ${90 / gameEvents.size} minutes`
// );
// const time = [...gameEvents.keys()];
// console.log(time);
// x = time.pop();
// console.log(time);
// console.log(`an event happend on average every ${x / gameEvents.size} minutes`);
// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "first" : "second";
//   console.log(`[${half} Half] ${min}:${event}`);
// }
// var x = Number.MAX_SAFE_INTEGER;
// console.log(x);
// var x = Number.MIN_SAFE_INTEGER;
// console.log(x);
// const cars = ["benz", "volvo", "BMW"];
// console.log(cars[0]);
// const cars = new Array("akhil", "vinay", "ajay");
// console.log(cars);
// const fruits = ["banana", "orange", "apple", "mango"];
// console.log(fruits);
// x = fruits.toString();
// console.log(x);
// const person = { firstName: "ajay", lastName: "yaram", age: 23 };
// // console.log(person);
// console.log(person.firstName);
// const fruits = ["apple", "orange", "mango", "jackfruit"];
// console.log(fruits.length);
// console.log(fruits.length - 1);
// const fruits = ["aple", "orange", "mango", "jackfruit"];
// let flen = fruits.length;
// ("<ul>");
// for (let i = 0; i < flen; i++) {
//   "<li>" + console.log(fruits[i]) + "</li>";
// }
// ("</ul>");
// const fruits = ["banana", "orange", "jackfruit", "grape", "mango"];
// fruits.push("lemon");
// console.log(fruits);
// console.log(fruits.length);
// const fruits = ["banana", "orange", "jackfruit", "grape", "mango"];
// console.log(typeof fruits);
// console.log(fruits.join("*"));
// console.log(fruits.push(""));
// console.log(fruits);
// console.log(fruits.pop());
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// fruits.unshift("potato");
// console.log(fruits);
// fruits.shift("grape");
// console.log(fruits);
// fruits[0] = "pinky";
// console.log(fruits);
// const girls = ["mouni", "pinky", "harshi", "tanusha"];
// const boys = ["ajay", "akhil", "vinay", "raju"];
// const childern = girls.concat(boys);
// console.log(childern);
// const arr1 = ["anusha", "yaram"];
// const arr2 = ["ajay", "yaram"];
// const arr3 = ["vinay", "yaram"];
// const childern = concat(arr1, arr2, arr3);
// console.log(childern);
// const arr1 = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
// ];
// const arr2 = arr1.flat();
// console.log(arr2);
// const arr1 = ["banana", "orange", "mango", "apple"];
// arr1.splice(2, 0, "raju", "pinky", "water");
// console.log(arr1);
// const arr1 = ["banana", "orange", "mango", "apple"];
// console.log(arr1.slice(1, 3));
// const fruits = ["apple", "banana", "orange", "guava"];
// // console.log(fruits.sort());
// console.log(fruits.reverse());
// const points = [20, 30, 1, 5, 10, 50, 60];
// console.log(
//   points.sort(function (a, b) {
//     return b - a;
//   })
// );
// console.log(points.sort());
// console.log(points.reverse());
// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// console.log(
//   points.sort(function (a, b) {
//     return a - b;
//   })
// );
// console.log(
//   points.sort(function () {
//     return 0.5 - Math.random();
//   })
// );
// console.log(points.sort({random()}));
// const points = [40, 100, 1, 5, 25, 10];
// // console.log(Math.max(40, 200, 10, 30, 90));
// // console.log(Math.min(100, 20, 30, 850));
// function myArrayMin(arr) {
//   let len = arr.length;
//   let min = Infinity;
//   while (len--) {
//     if (arr[len] < min) {
//       min = arr[len];
//     }
//   }
//   return min;
// }
// console.log(myArrayMin(points));
// const cars = [
//   { type: "Volvo", year: 2010 },
//   { type: "benz", year: 2012 },
//   { type: "rockerz", year: 2000 },
// ];
// console.log(
//   cars.sort(function (a, b) {
//     return a.year - b.year;
//   })
// );
// cars();
// const numbers = [45, 4, 9, 16, 25];
// const numbers2 = numbers.map(myFunction);
// function myFunction(value, index, array) {
//   return value * 2;
// }
// const numbers = [45, 4, 9, 16, 25];
// const newArr = numbers.flatMap((x) => x * 2);
// console.log(newArr);
// const airline = "tap air portugal";
// const plane = "a320";
// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log(airline.length);
// console.log("b234"[0]);
// console.log("b345".length);
// console.log(airline.indexOf("r"));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.length - 1));
// console.log(airline.slice(0, airline.indexOf(" ")));
// console.log(airline.slice(airline.lastIndexOf(" ")));

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s == "B" || s == "E") {
//     console.log("you got the middle seat conguralations");
//   } else {
//     console.log("you got lucky");
//   }
// };
// checkMiddleSeat("32B");
// checkMiddleSeat("43S");
// checkMiddleSeat("76E");

// console.log(new String("jonas"));
// console.log(typeof new String("jonas"));
// console.log(typeof new String("jonas").slice(1));
// console.log(airline.toUpperCase());

// const passenger = "JoNas";
// const PassangerLower = passenger.toLocaleLowerCase();
// const passengerUpper = passenger.toLocaleUpperCase();
// console.log(passengerUpper);
// console.log(PassangerLower);
// console.log(passenger.captalize());
// const numbers = [12, 34, 56, 78, 89];
// let text = " ";
// // console.log(numbers.forEach());
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   console.log(text + value);
// }
// const cars = ["audi", "volvo", "benz"];
// cars.push("reng");
// console.log(cars);
// console.log(new Date());
// console.log(new Date("2000-04-21"));
// console.log(new Date(99, 10, 9));
// console.log(new Date(-1000000000));
// console.log(new Date(24 * 60 * 60 * 1000));
// const d = new Date();
// console.log(d.toISOString());
// const msc = Date.parse("March 21,2012");
// console.log(msc);
// const d = new Date("2000-04-21");
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// const d = new Date("2000-04-21");
// let day = days[d.getDay()];
// console.log(day);
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;
// let years = Math.round(Date.now() / year);
// console.log(years);
// const email = "ajaykumar21042k@gmail.com";
// const loginEmail = "  yaramajay@gmail.com";
// console.log(loginEmail);
// const trimedEmail = loginEmail.trim();
// console.log(trimedEmail);
// const priceGB = "234,89&";
// const priceUS = priceGB.replace("&", "$").replace(",", ".");
// console.log(priceUS);
// const announcement =
//   "all the passanges are in the correct position enter into the way of position of the position";
// console.log(announcement.replaceAll("position", "water"));
// const plane = "A234gb";
// console.log(plane.includes("A23"));
// console.log("this+is+the+water+of+the+man".split("+"));
// const [firstName, lastName] = "ajay kumar".split(" ");
// console.log(firstName);
// const names = ["mr", firstName, lastName].join(" ");
// console.log(names);
// const capitalizeName = function (name) {
//   const names = name.split(" ");
//   const namesUpper = [];
//   for (const n of names) {
//     // const x = n[0].toUpperCase() + n.slice(1);
//     // namesUpper.push(x);
//     const y = n.replace(n[0], n[0].toUpperCase());
//     namesUpper.push(y);
//   }
//   console.log(namesUpper.join(" "));
// };

// capitalizeName("this is the way of the water enter into the content");
// capitalizeName(
//   "there here the water content enter into the process of the masses enter into the world"
// );
// const message = "go to gate 23";
// console.log(
//   message.padStart(50, "this is the information of the content process")
// );
// console.log("9847".padStart(12, "*"));
// console.log(3455 + "ajay");
// const message = "this is the way of the water";
// console.log(message\n.repeat(5));
// document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));

// document.querySelector("button").addEventListener("click", function () {
//   const text = document.querySelector("textarea").value;
//   const rows = text.split("\n");
//   console.log(rows);
//   for (const [i, row] of rows.entries()) {
//     const [first, second] = row.toLowerCase().trim().split("_");

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(`${output.padEnd(20)}${"🥰".repeat(i + 1)}`);
//   }
// });
// const boking = [];
// const createBooking = function (
//   flightNum = "J564",
//   numPassangers = "9",
//   price = "100"
// ) {
//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   boking.push(booking);
// };
// createBooking("LH123", "6");
// const flight = "LH234";
// const jonas = {
//   name: "yaram Ajay",
//   passport: 23456789,
// };
// const checkIn = function (flightNum, passanger) {
//   flightNum = "k789";
//   passanger.name = "Mr." + passanger.name;
//   if (passanger.passport === 23456789) {
//     alert("checked in is correct");
//   } else {
//     alert("checked in is wrong");
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// const value = Math.floor(Math.random() * 10);
// console.log(value);
// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };
// const transformer = function (str, fn) {
//   console.log(`orginal string:${str}`);
//   console.log(`transformed string:${fn(str)}`);
//   console.log(`transformed string:${fn}`);
// };
// transformer("this is the javascript program", upperFirstWord);
// const high5 = function () {
//   console.log("🥰🥰");
// };
// document.body.addEventListener("click", high5);

// ["ajay", "vinay", "akhil"].forEach(high5);
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting}${name}`);
//   };
// };
// const greeter = greet("hey ");
// greeter("jonas");
// greeter("Ajay kumar");
// greet("ajay")("kumar");
// const greetArr = (greeting) => (name) => console.log(`${greeting}${name}`);
// greetArr("hello")("ajay");
// const d = new Date();
// d.getFullYear(2000);
// console.log(d);
// d.setFullYear(2000);
// console.log(d);
// const today = new Date();
// const someday = new Date();
// console.log(today);
// console.log(someday);
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);
// console.log(Math.LN2);
// console.log(Math.LN10);
// console.log(Math.LOG2E);
// console.log(Math.LOG10E);
// console.log(Math.pow(8, 2));
// let names = "ajay";
// let text = "yaram";
// let result = names ?? text;
// console.log(result);
// const ajay = {
//   airline: "stonas",
//   code: "LH",
//   booking: [],
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.code} of ${flightNum}`
//     );
//   },
// };
// ajay.book(239, "jonaskumar");
// ajay.book(876, "vinayKumar");
//event listners
// ajay.Planes = 300;
// ajay.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };
// const addTax = (rate, value) => value + value * rate;
// x = addTax(0.1, 200);
// console.log(x);
// const vat = x / 100;
// console.log(vat);
// const runOnce = function () {
//   console.log("this never will again run once");
// };
// runOnce();
// (function () {
//   console.log("this is the another way of the water");
// })();
// const secureBooking = function () {
//   let PassengerCount = 0;

//   return function () {
//     PassengerCount++;
//     console.log(`${PassengerCount} passengers`);
//   };
// };
// const booker = secureBooking();
// booker();
// let f;
// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };
// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };
// g();
// f();
// //
// h();
// f();
// setTimeout(function () {
//   console.log("timmer");
// }, 2000);
// let day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "sunday";
//     break;
//   case 1:
//     day = "monday";
//     break;
//   case 2:
//     day = "tuesday";
//     break;
//   case 3:
//     day = "wednesday";
//     break;
//   case 4:
//     day = "thursday";
//     break;
//   case 5:
//     day = "friday";
//     break;
//   case 6:
//     day = "saturday";
//     break;
// }
// console.log(day);
// const cars = ["BMW", "volvo", "saab", "ford", "fiat", "audi"];
// for (let i = 0; i < cars.length; i++) {
//   console.log(i + 1 + " " + cars[i]);
// }
// const numbers = [45, 4, 9, 16, 25];
// numbers.forEach(myFunction);
// function myFunction(value) {
//   console.log(value);
// }
// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red;";
//   document.querySelector("body").addEventListener("click", function () {
//     header.style.color = "blue";
//   });
// })();
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2, 6));
// console.log(arr.slice());
// console.log([...arr]);
// console.log(arr.splice(2, 6));
// let arr1 = ["a", "b", "c", "d", "e"];
// console.log(arr1.reverse());
// let arr1 = ["apple", "banana", "fruit"];
// let arr2 = ["jackfruit", "mango"];
// console.log(arr1.concat(arr2));
// console.log(arr1.concat(arr2).join(","));
// let arr1 = ["apple", "banana", "fruit"];
// console.log(arr1[0]);
// console.log(arr1.at(1));
// // gett last element in an array
// console.log(arr1[arr1.length - 1]);
// console.log(arr1.slice(-1)[0]);
// console.log(arr1.at(-1));
// console.log("ajay".at(-1));
// const cars = ["volvo", "benz", "mini"];
// for (let x of cars) {
//   console.log(x);
// }
// let language = "javascript";
// for (let x of language) {
//   console.log(x);
// }
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     console.log("this is the ajaykumar");
//     continue;
//   }
//   console.log("this is the vinay kumar");
// }
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(
//       `this is the way of the water enter into the way of the masses ${movement}`
//     );
//   }
// }
// console.log("---- for eachmethod---");
// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(
//       `this is the position of the way of the water enter into the content ${movement}`
//     );
//   } else {
//     console.log(
//       `This is the another function of the way of the water ${Math.abs(
//         movement
//       )}`
//     );
//   }
// });
// const curriencies = new Map([
//   ["USD", "United states dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "pound sterling"],
// ]);
// curriencies.forEach(function (value, key, map) {
//   console.log(`${key}:${value}`);
// });
// const checkDogs = function (dogs) {
//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`this ${i + 1} is the dog function`);
//     } else {
//       console.log(`this is the ${i + 1} cat function`);
//     }
//   });
// };
// x = [3, 4, 2, 12, 7];
// checkDogs(x);
// const movements = [400, 500, -300, 900, -800, -1200, -600];
// // const withdrawls = [];
// // for (const mov of movements) {
// //   if (mov < 0) {
// //     withdrawls.push(mov);
// //   }
// // }
// // console.log(withdrawls);
// // const withdrawls = movements.filter(function (mov) {
// //   return mov < 0;
// // });
// // console.log(withdrawls);
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   return acc + cur;
// }, 0);
// console.log(balance);
// const calcAverageAge = function (ages) {
//   const humanAge = ages.map(function (age) {
//     let result = age <= 2 ? 2 * age : age * 4;
//     const adults = humanAge.filter((age) => age >= 18);
//     console.log(adults);
//   });
// };
// calcAverageAge([5, 3, 4, 2, 1, 12, 8, 3]);
// const movements = [100, 200, -300, -400, 7000];
// const withdrawl = movements.find(function (mov) {
//   if (mov < 0) {
//     return mov;
//   }
// });
// console.log(withdrawl);
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arr.flat());
// console.log(23 === 23.0);
// console.log(Number.parseInt("23px"));
// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(10, 20));
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER);
// console.log(1231142344444613483n);
// console.log(new Date(3 * 24 * 60 * 60 * 1000));
// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
console.log(new Intl.DateTimeFormat("en-us").format());
