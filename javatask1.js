var student_details=[
    student1={
        name:"surya",
        branch:"cse",
        rollno:538,
        class:"3rd year",
    },
    student2={
        name:"raghu",
        branch:"ece",
        rollno:434,
        class:"4rd year",
    },
    student3={
        name:"bhanu",
        branch:"civil",
        rollno:555,
        class:"3rd year",
    },
    student4={
        name:"koti",
        branch:"ece",
        rollno:550,
        class:"2rd year",
    },
    student5={
        name:"suri",
        branch:"cse",
        rollno:543,
        class:"3rd year",
    }
]


function table(){
    var table=document.querySelector("table");
    table.innerHTML +="<tr><td>name</td><td>branch</td><td>rollno</td><td>class</td></tr>";
    table.innerHTML +="<tr><td></td><td>branch</td><td>rollno</td><td>class</td></tr>"

}
