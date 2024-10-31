let name='Haswanth';
let age=20;
// object literal
let person={
    name:'Haswanth',
    age:20,
};
console.log(person);
// Dot notation
person.name='Haswanth kumar';
console.log(person.name);

// Square bracket notation

person['age']+=5;
console.log(person.age);

person['name']='Haswanth Kurevella'

console.log(person.name);

// Dynamic property names
let selection='name';
person[selection]='hk';

console.log(person.name);
