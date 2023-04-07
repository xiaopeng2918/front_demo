// function sayHi(name, message){
//   console.log("hello", name + "," + message );
// }
// function sayHi2(name, message){
//   console.log("hello", arguments[0] + "," + arguments[1]);
// }
// sayHi("yxp2918", "welcome"); // hello yxp2918,welcome
// sayHi2("yxp2918", "welcome");// hello yxp2918,welcome


// arguments
function sumReLoad(){
  if(arguments.length === 1){
    return arguments[0] + 10;
  }else if(arguments.length === 2){
    return arguments[0] + arguments[1];
  }
}

console.log(sumReLoad(5)); // 15
console.log(sumReLoad(5, 6)); // 11