let selectedColors=['red', 'green', 'blue'];
console.log(selectedColors);
// indexing

console.log(selectedColors[0]); // red
console.log(selectedColors[1]); // green
console.log(selectedColors[2]); // blue

// adding elements
selectedColors[3] = 'pink'; 
console.log(selectedColors);
// updating elements
selectedColors[3] = 3;
console.log(selectedColors);
// deleting elements

delete selectedColors[2];
console.log(selectedColors);

console.log(typeof selectedColors)