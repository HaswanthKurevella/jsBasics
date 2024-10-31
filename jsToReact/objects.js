const person ={
    name:"John",
    age:20,
    ismarried:false,
};
// const name=person.name;
// const age=person.age;
// const isMarried=person.isMarried;
const {name,age,isMarried}=person;

console.log(name); // Output: John

const person2={...person,name:'haswawnth',ismarried:true,marks:100}
console.log(person2); 