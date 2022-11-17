import { UI } from './ui.js';


// Element secme
const form = document.getElementById("employee-form");
const employeesList = document.getElementById("employees");
const updateEmployeeButton = document.getElementById("update");


const ui = new UI();

EventListener();

function EventListener(){
    document.addEventListener("DOMContentLoaded",getAllEmployees)
    form.addEventListener("submit", addEmployee)
    employeesList.addEventListener("click", updateOrDelete)
    updateEmployeeButton.addEventListener("click", employeeUpdate)

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
        if(updateEmployeeButton.style.display === "none"){
            updateEmployeeButton.style.display = "block"
            ui.employeeInfoToInputs(e.target.parentElement.parentElement)
        }
        else{
            updateEmployeeButton.style.display = "none"
            ui.clearInputs()
        }
    }
}

function employeeUpdate(){
    ui.employeeUpdate()
    // ui.clearInputs()
}




