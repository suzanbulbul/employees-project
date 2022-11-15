import { UI } from "./ui"


// Element secme
const form = document.getElementById("employee-form");
const nameInput = document.getElementById("name");
const departmentInput = document.getElementById("department");
const salaryInput = document.getElementById("salary");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");
const addUserEmployeeButton = document.getElementById("user-add");


const ui = new UI();

EventListener();

function EventListener(){
    document.addEventListener("DOMContentLoaded",getAllEmployees)
    form.addEventListener("submit", addEmployee)
    employeesList.addEventListener("click", updateOrDelete)


}

function getAllEmployees(){
    ui.addAllEmployeeToUI()

}

function addEmployee(e){
    ui.addUserEmployeeToUI();

    e.preventDefault();
}

function updateOrDelete(e){
    // console.log(e.target.id)
    if(e.target.id === "delete-employee"){
        ui.deleteUserEmployees(e.target)

    }
    else if(e.target.id === "update-employee"){
        ui.updateUserEmployees(e.target.id)
    }
}


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

request.delete(3).then(message => {
    console.log(message)
    }).catch(err => {
    console.log(err)
    })
*/


