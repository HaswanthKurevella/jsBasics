  let names=['haswanth','kumar','kurevella']
  pnames=names.map((name)=>{
    return name+"1";
  });
  console.log(pnames);
  //filter

names=['haswanth','kumar','kurevella','haswanth','haswanth'];
pnames=names.filter((name) => {
    return name !== 'haswanth';
});
console.log(pnames);