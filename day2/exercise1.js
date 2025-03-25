const people = ["Greg", "Mary", "Devon", "James"];

people.splice(0,0)

people[3]="Jason"

people.push("meriam")

let getindex = people.indexOf("Mary")

let people2=people.slice(0,4)

let fooIndex = people.indexOf("Foo"); // Returns -1 (because "Foo" is not in the array)

console.log("Index of Foo:", fooIndex);

let last = people[people.length - 1]; 

console.log("Last element:", last);

console.log(people)

console.log(getindex)

console.log(people2)


