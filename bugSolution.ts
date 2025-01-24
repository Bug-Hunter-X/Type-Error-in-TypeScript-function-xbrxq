function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
//Solution 1: Using array destructuring
console.log(greeter(user[0]));
//Solution 2: Using Template Literals
console.log(`Hello, ${user[0]}`);
//Solution 3:  Handling the array in the function
function greeter2(person: string[]): string {
    return `Hello, ${person.join(' ')}`;
}
console.log(greeter2(user));