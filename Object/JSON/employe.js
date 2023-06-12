let employe = [{id : 101, name : "Rahul", sal : 45000, loc :"chennai" },
               {id : 102, name : "Sonia", sal : 55000, loc :"covai" },
               {id : 103, name : "Priya", sal : 65000, loc :"Bangaluru" }]

               //print emp names
       

               //for of
               
               for (emp of employe) {
                console.log(emp.name)  //all name
               } 


               //for loop


               for (var i =0; i <= employe.length -1 ; i=i+1){
                console.log(employe[i].name)              // all name
               }

               //while loop


               var i = 0;
               while(i<=employe.length-1){
                console.log(employe[i].id)            //id value
                i=i+1
               }