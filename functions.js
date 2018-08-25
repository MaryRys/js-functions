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

