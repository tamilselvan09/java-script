   //Normal
function message (msg) {
    return "Hello" + msg
}

let result = message("GM");
console.log(result)


  //Fat 

let message1 = (msg) =>{
    return "Hello"+msg
}
let result1 = message1("GM")
console.log(result1)



//Fat Minimise Code


let message2 = msg => "Hello" + msg;
let result2 = message2("GM")
console.log(result)