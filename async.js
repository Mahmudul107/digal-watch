console.log(1)
console.log(2)

setTimeout (doSomething, 4000) //set 4000 mili seconds means 4 second and setTimeout also a asynchronous js
setTimeout( () =>{
    console.log(7)
},3000)

console.log(4)
console.log(5)
console.log(6)

function doSomething (){
    console.log(3);
}