const bananaDiv = document.getElementById('banana');
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter = counter + 1;
counter += 1;
counter++;

console.log('counter ', counter);

const greetingElement = document.getElementById('greeting');
greetingElement.innerHTML = 'Hello my name is Mary';

const firstName = 'mary';
const lastName = 'rys';

greetingElement.innerHTML = document.getElementById ('greeting');

// greetingElement.innerHTML = 'Hello my name is ' + firstName + lastName;

greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// object shorthand notation
let name = 'callan';
let age = '100000';

// let person = {
//     name: name,
//     age: age
// };

let person = {name, age};

console.log('person:', person.name);