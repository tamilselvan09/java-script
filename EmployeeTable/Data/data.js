let employee = [{id:101, name:"Tamil",email:"tamil@gmail.com"},
                {id:102, name:"Selvan",email:"selvan@gmail.com"},
                {id:103, name:"Tamilan",email:"tamilan@gmail.com"}]



function displayData(){
    let row = ""
     for (emp of employee) {
        row = row + `<tr><td> ${emp.id}</td>        
                          <td> ${emp.name}</td>        
                          <td> ${emp.email}</td>        
                      </tr>`
     }
     document.getElementById('rajini').innerHTML = row
  }              