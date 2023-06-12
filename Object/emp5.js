   //for in


let emp = {id :101,
           first_Name:"Rahul",
           last_Name:"Gandhi",
           email:"rahul@gmail.com",
           loc:['Bangalouru','Kerala'],
           sal:45000,
           designation:"Project Manager"
        }

        for (key in emp) {
            console.log(key)  //Only keys
        }



        
let emp1 = {id :101,
    first_Name:"Rahul",
    last_Name:"Gandhi",
    email:"rahul@gmail.com",
    loc:['Bangalouru','Kerala'],
    sal:45000,
    designation:"Project Manager"
 }

 for (key in emp1) {
     console.log(emp1[key])  //now values and dont use this time () only use []
 }