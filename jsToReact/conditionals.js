let age=10;
let name='ram';
if (age>10){
    name='lakshman';
}
else {
    name='bharath';
}

console.log(name); // Output: bharath

//using terenary operators

let age1=16;
let name1=age>10 ? "lakshman": "bharath";

console.log(name1); // Output: bharath

const Component=()=>{
    return age>10? <h1>Lakshman</h1>: <h1>Bharath</h1>
}