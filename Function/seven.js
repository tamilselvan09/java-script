function add (a, b, c, d = 200) {
    console.log(a + b+ c+ d)
}

add(10, 20, 30)     //260



function add (a, b, c, d = 200) {
    console.log(a + b+ c+ d)
}                         //d value is over-riding 

add(10, 20, 30, 40)    //100





var a = 100;
var a =1;

console.log(a)  // 1