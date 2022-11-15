import { Request } from "./request";

// Element secme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");

const request = new Request("http://localhost:3000/employees");

/*
request.get()
    .then(employees => {
        console.log(employees)
    })
    .catch(err => {
        console.log(err)
    })
request.post({name: "Mertcan", department: "Product Manager", salary: 8000})
    .then(employees => {
        console.log(employees)
    })
    .catch(err => {
        console.log(err)
    })
   
request.put(3, {name: "Mertcan", department: "Product Manager", salary: 8000})  
    .then(employees => {
        console.log(employees)
    })
    .catch(err => {
        console.log(err)
    })  
     */
    request.delete(3).then(message => {
        console.log(message)
    }).catch(err => {
        console.log(err)
    })


