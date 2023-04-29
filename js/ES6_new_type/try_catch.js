try {
  console.log("a");
  console.log(b);
  console.log("c");
}catch(Err) {
  console.log(Err.name, Err.message);
}
console.log("d");

/*
result 
a
ReferenceError b is not defined
d

*/