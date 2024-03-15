// //Task 11
// //let name : string [] = ["Ali","Muzamil","Zafar","Hamza"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);

// //Task 12
// let names : string [] = ["Ali","Muzamil","Zafar","Hamza"]
// let message : string = "Do you like to play football?"
// console.log(names[0] + " "+ message )
// console.log(names[1] + " "+ message )
// console.log(names[2] + " "+ message )
// console.log(names[3] + " "+ message )

// // //Task 13
// // let transpotation : string [] = ["Honda MOtorcycle","Audi","Honda civic"];
// // transpotation.map((items) => console.log(`I would like to own a ${items}`));


// //Task 14

//  let guestArr : string [] = ["Ali","Hasseb","Wajahat"];
//  guestArr.map((items) => (console.log(`Dear ${items} , You are invited to the dinner`)))


// //Task 16
// let guestArr : string[] = ["Alishba","Hasseb","Ali","Hamza"]
// let canNotAttend : string = "Ali"
// let newGuest : string = "Wajahat"

// guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(guestArr)

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
// );

// //Part 2 new
// let guestBeg : string = "Muizz"
// guestArr.unshift(guestBeg);
// console.log(guestArr)

// //Part 3 Middle
// let middleGuest :  string = "Fatima"
// let middleIndex = guestArr.length/3
// guestArr. splice(middleIndex,0,middleGuest)
// console.log(guestArr)

// //Part4 append
// guestArr.push("Zeeshan")
// console.log(guestArr)

// //Part 5
// guestArr.map((items) =>
// console.log (`Dear ${items}, you are invited more people list on the dinner`));


// //Task 17
// // Initial list of guests
// let guests: string[ ] =["Ali","Bilal"];

// // Informing that only two person can be invited
// // console.log("Due to limited space, only two people can be invitedfor dinner.");
// // // Removing guest only two names remain
// while(guests.length > 2) {
//     const removedGuest = guests.pop();
//     console.log(`Sorry, ${removedGuest}, you're no longer invited to dinner.`)
// }

// // // Printing invitation  to the remaining two guests
// guests.forEach((guest) => {
//     console.log(` Dear ${guest}, you're still invited to dinner.`);
// });

// // // Removing the last two names from thelist
// // guests.pop();
// // guests.pop();

// // Printing the finallist to conform it's empty
// console.log("Final guest list:", guests);

// //Task 18
// // Store the location in an array
// let placesToVisit: string[] = ["Tokyo","Pakistan","America","China","Japan"];

// //print the array in its original order
// console.log("Original order", placesToVisit);

// // print the order in alphabetical order without modifing the actual list
// console.log("Alphabetical order",[...placesToVisit].sort());

// // Show that the array in still inits original order
// console.log("Original order after sorting:", placesToVisit);

// // Print the array in reverse alphaabetical order without changing the order of the original list
// console.log("Reverse alphabetical order:",[...placesToVisit].sort().reverse());

// //Show the array is still in its original order
// console.log("Original order after reserving sorting:",placesToVisit);

// // Reverse the order of the list
// placesToVisit.reverse();
// console.log("Reserved order:", placesToVisit);

// // Reserve the order of the list again to get back to the original order
// placesToVisit.reverse();
// console.log("Back to original order:", placesToVisit);

// // Sort the order in alphabetical order
// placesToVisit.sort();
// console.log("Sorted in alphabetical order:", placesToVisit);

// // // Sort the array in reserve in alphabetical order
// placesToVisit.sort((a,b) => b.localeCompare(a));
// console.log("Sorted in reserve alphabetical order:",placesToVisit);

// //Task 19
// let invitation : string [] = ["ali", "bilal"]
// let count_invitation : number = invitation.length

// console.log(`${count_invitation} people will come to the dinner`)

// // Task 20
// let country: string [] = ["Pakistan","India","Newyork","Japan","China"]
// console.log("List of country:")
// console.log(country)

// // Task 21
// // think of something you could store in a Typescript Object. Write a program
// // that create objects containing these items.

// let person: {name: string, fname: string , age: number} = {name:"Arsalan", fname: "male", age: 17}
// console.log(person)

// //Task 22
// //International Error: If you haven't received an array index error in one of your
// //programs yet, try to make one happen. Change an index in one of your programs
// //produce an index error. Make sure you correct the error before closing the program.

// const days : string [] = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// // console.log(days{7})
 //console.log(days[6])

 //Task 23
//  let car = "subaru";
//  console.log("is car == 'subaru'? predict true")
//  console.log(car == 'subaru')

//  console.log("is car != 'honda city' ? predict false")
//  console.log( car != 'honda city') 

//  console.log("is car == 'subaru'? predict false")
//  console.log( "car == 'subaru'" )

//  console.log("is car == 'SUBARU'? predict false")
//  console.log( "car == 'SUBARU'" )

//  console.log("is car.length =6? predict true")
//  console.log("car.length == 6")

//    console.log("is car.length!= 10? predict false")
//    console.log("car.length != 10")

//    console.log("is 10 > 45 ? predict false")
//    console.log( 10 > 45)
  
//    console.log("is 3 <= 2 ? predict false")
//    console.log(3 <= 2)

// console.log(" is 72 > 83 ? predict false")
// console.log(  72>= 83)

// console.log("is car == 'subaru' && car.length == 6? predict true")
// console.log("car == 'subaru' && car.length == 6")

// Task 24
//More Condition Tests: You don't have tolimt the number of tests you create to 10. If you want to try more comparisions,
//write more tests. have at least one True and False result for each of the following:
// Tasts forequality and inquality with strings

// let name_1 : string = "Arsalan"
 //let name_2 :string  = "Arsalan Shaikh"
 //let name_3 : string = "sir Arsalan Shaikh"

//  if (name_1 == name_3){
//      console.log("name are equal")
//  } else {
//      console.log("names are not equal")
//  }

//  if (name_1 != name_2) {
   
  
// console.log("names are equal")
//  }

 //let age_1 : number = 18
 //let age_2 : number = 22

 //if (age_1 == 18) {
 // console.log("eligible foe vote")
 //}

//if (age_1 ! = 22){
//console.log("eligibal for vote in older category")
//} 

   //  if (age_1 <= age_2){ //less
   //   console.log("younger")
   // }

   // if (age_2 >= age_1){ //greater
   //   console.log("older")
   //  }

//  if (age_1 == 18 && age_2 == 22) {
//   console.log(" person is eligibal for vote")
//  }

// if (age_1 == 18 || age_2 ! != 22){
//    console.log("person is eligibal not for vote")
// }

// let country : string []  = ["Pakistan","india","japan","china"]
//  if (country.includes("Pakistan")){
     
//     console.log("Pakistan is in country list")
//  }

 //if (!country.includes ("america")){
  //   console.log("america is not include in an array")
 //}

 //Task 25
//  let alian_color = "green"
//  if  (alian_color = "green")
//  console.log("you earn 5 points")

// let alian_color : string = "red"
// if(alian_color == "red")
// console.log("no output")

//Task 26
//  let alian_color = "red"
//  if  (alian_color == "green"){
//     console.log("player just earned 5 points for shooting the alien")
 
//  }else { console.log("player just earned 10 point")
//   } 

// let alian_color = "red"
//  if  (alian_color == "green"){
//     console.log("player just earned 5 points for shooting the alien")
//  }else{
//     console.log("player  just earn 10 point")
//  }

// //Task 27

// let alian_color: string = "red"

// if (alian_color  == "green"){
// console.log("5 points")
// } else if (alian_color == "yellow"){
//    console.log("10 points")
// } else {
//    console.log("15 points")
// }

// // Task 28

// let age : number = 100
// if (age <2){
//    console.log("you area baby")
// }else if (age < 4){
//    console.log("you are  a toddler")
// } else if (age < 13){
//    console.log("you are a kid")
// } else if (age < 20) {
//    console.log("you are a teenager")
// } else if (age < 65) {
//    console.log("you are a adult")
// } else {
//    console.log("you are older")
// }

// Task 29

// let favourite_fruits : string [] = ["kivi","orange","apples"]

// if (favourite_fruits.includes("kivi")) {
//    console.log("kivi")
//  }

//  if (favourite_fruits.includes("peach")) {
//    console.log("You really like bananas")
//  }

//  if (favourite_fruits.includes("orange")) {
//    console.log("orange")
//  }

//  if (favourite_fruits.includes("berry")) {
//    console.log("You really like bananas")
//  }

//  if (favourite_fruits.includes("apple")) {
//    console.log("apple")
//  }





// // Task 30
 //let users : string [] = ["eric","hafeeb","ali","fatima","admin"]

// for(let user of users) {
//    if (user === "admin") {
//       console.log("Hello admin, would you like to see a status report?")
//    } else {
//       console.log(`Hello ${user}, thankyoufor logging in again`)
//    }
// }

// Task 31
 //let users: string [] = ["eric","haseeb","ali","fatima","admin"]

//  if (users.length === 0) {
//     console.log("we need to found some users!")
//  } else {
//     for (let user of users) {
//        if ( user === "admin") {
//           console.log("Hello admin, would you like to see a status report?")
//        } else {
//           console.log(`Hello ${user}, thank you for logging in again`)
//        }
//     }
//  }

// users = []
// if (users.length === 0) {
//    console.log ("we need to find some users!")
// }

// // Task 32

// let current_users : string [] = ["admin","Eric","Ali","Ha,za","fatima"]
// let new_users : string [] = ["admin","fatima","Aliza","Haseeb","Noor"]

// let current_users_lower : string [] =current_users.map(user => user.toLocaleLowerCase())

// for(let new_user of new_users) {
// if(current_users_lower.includes (new_user.toLowerCase())) {

// console.log(`Sorry ${new_users}, that name is taken`)
// } else {
//    console.log(`Yes ${new_users} is still in available list`)

// }
// }



















// Task 33
// let numbers : number [] =[1,2,3,4,5,6,7,8,9]
// for ( let number of numbers) {
//    if (number === 1) {
//       console.log(`${numbers}st`) // 1st
//    } else if (number === 2) {
//       console.log(`${numbers}nd`) //2nd
//    } else if (number === 3) {
//       console.log(`${numbers}rd`) //3rd
   
     
//    } else {
//       console.log (`${number}th`) // 4th , 5th , 6th, 7th, 8th , 9th
//    }
//}

// Task 34

//let favourite_pizza : string [] = ["pepperoni", "chicken", "veg"]

// for (let pizza of favourite_pizza) {
//    console.log(pizza)
// }
// console.log("\n")

// for (let pizza of favourite_pizza){
//    console.log(`I really like ${pizza} pizza!`)
// }
// console.log("\nI really love pizza!")


// Task 35
// let animals : string [] = ["cat","lion","dog"]
// for (let animal of animals) {
//    console.log(animal)
// }
// console.log("\n")
// for (let animal of animals) {
//    console.log(`A ${animal} has a tail`)
// }
// console.log("/n all of these are great pets! but i love cats more")

// Task 36

// function makeShirt(size: string, text: string): void {
//    console.log(`/n you older a ${size} shirt that says ${text}`)
// }
// makeShirt('large','"i love typescript"' )
// makeShirt('medium', '"i need a big shirt"')

// Task 37
// function makeShirt(size: string = 'large', text: string = 'I love typescript'): void {
//    console.log(`you have order a ${size}, shirt thats says ${text}`)
// }

// makeShirt();
// makeShirt('medium')

//different message
//makeShirt('small','I need a big shirt wear')

//Task 38

// function describe_city(city: string, country: string = 'Pakistan'): void {
//    console.log(`${city} is in ${country}`)
// }

// describe_city('karachi')
// describe_city('france', 'europe')
// describe_city('lahore', 'punjab')

// Task 39
// function cityCountry(city: string, country:string): string {
//    return `${city}, ${country}`
// }
// let c1 = cityCountry('lahore' ,'Pakistan')
// let c2 = cityCountry('tokyo','japan')
// let c3 = cityCountry('paris','france')

// console.log(c1)
// console.log(c2)
//console.log(c3)

// Task 40
// function makeAlbum (artist: string, title: string): {artist:string; title: string} {
//    const dictionaries = {
//       artist: artist.charAt(0).toUpperCase() + artist.slice(1),
//       title: title.charAt(0).toUpperCase() + title.slice(1)
//    };
//    return dictionaries;
// }

// let album = makeAlbum("ali","light")
// console.log(album)

// album = makeAlbum("bilal", "red wave")
// console.log(album)

// album = makeAlbum("hamza","seenbreez")
// console.log(album)

// // Task 41
// function show_magicians(magicians: string []): void {
//    for (const magician of magicians) {
// console.log(magician.charAt(0).toUpperCase() + magician.slice(1));
//    }
//  }
// const magician: string[] = ["ali","hamza","bilal"];
// show_magicians(magician)

// Task 42 
// function make_great(magicians: string[]): void {
//    for (let i = 0; i < magicians.length; i++) {       // i stand for index string
//       magicians[i] = magicians[i]  + ' the great '
// }
// }


// const magicians2: string[] = ["usman","haseeb","wajahat"]
// // make_great(magicians2)
// // show_magicians(magicians2)

// // Task 43

// function make_great2(magicians: string[]): string[]{
//    const greatMagicians: string[] = [];
//    for (let i = 0; i < magicians.length; i++) {
//       greatMagicians.push(magicians[i] + ' the Great ');
//    }return greatMagicians;
// }

// const magicians3: string[] = ["usman","haseeb","wajahat"];
// const greatMagicians2: string[] = make_great2(magicians3);
// show_magicians(magicians3);
// show_magicians(greatMagicians2);



// Task 44
// function sandwich(...items: string[]): void {
//    console.log("Sandwich order:")
//    for (let i = 0; i < items.length; i++) {
//       console.log(`-${items[i]}`)
//    }
// }

// console.log("enjoy your sandwich arsalan shaikh")

// sandwich('capsicum','tomato','chickan')
// sandwich('beef','cheese')
//sandwich('garlic chicken','mayo sauce')

// Task 45
// type car = {
//    manufacture:string
//    model: string
//    [key: string]: any;
// }

// function createCar(manufacture: string, model: string, optional: Record<string, any>): car {
//    return{
//       manufacture,
//       model,
//       ...optional
//    }
// }
// const mycar: car = createCar("toyota","corolla", {color:"silver",year:"2024"})
//console.log(mycar)

