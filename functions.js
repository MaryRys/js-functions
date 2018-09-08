// input = animal ex. fish
// output = animal product ex. fish sticks

function nuggetizer(animal){
return `${animal} stix`;
};

console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat')); 

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};
console.log('deer:', nuggetizer2('deer'));

const nomnom = (person, food) => {
    return `${person} devoured ${food}`;
};

const bearSticks = nuggetizer('bear');
console.log(nomnom('mary', bearSticks));

// function numberAdder that takes in a number and returns the 
// number plus 3. so input =22 output =25

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'allTheNumbers');
};
console.log('num: ', numberAdder(22)); 

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

numberAdder(22);
numberAdder(2);
numberAdder(4);
numberAdder(22);
