import { Request } from "./request"

const request = new Request("http://localhost:3000/employees");


export class UI{
    constructor(){
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
    }

    addAllEmployeeToUI(employees) {
        request.get()
        .then(employees => {
            let result = ""
            /*
                <tr>                             
                    <td>Mustafa Murat Coşkun</td>
                    <td>Bilişim</td>
                    <td>4000</td>
                    <td>1</td>
                    <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                    <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
                </tr>
            */
            employees.forEach(element => {
                result += 
                `   <tr>                             
                        <td>${element.name}</td>
                        <td>${element.departmant}</td>
                        <td>${element.salary}</td>
                        <td>${element.id}</td>
                        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
                    </tr> `
            });
    
            this.employeesList.innerHTML = result;
        })
        .catch(err => {
            console.log(err)
        })

    }

    addEmployeeToUI(employee) {
        this.employeesList.innerHTML += 
        `   <tr>                             
                <td>${employee.name}</td>
                <td>${employee.departmant}</td>
                <td>${employee.salary}</td>
                <td>${employee.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr> `

    }

    addUserEmployeeToUI(){
        if( this.nameInput.value.trim() !== "" && this.departmentInput.value.trim() !== "" && this.salaryInput.value.trim() !== ""  ){
            request.post({name: this.nameInput.value.trim(), departmant: this.departmentInput.value.trim(),  salary: Number(this.salaryInput.value.trim()) })
                .then(employees => {
                    this.addEmployeeToUI(employees)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else{
            alert("Tüm inputları girin")
        }
    }

    clearInputs(){
        this.nameInput = ""
        this.departmentInput = ""
        this.salaryInput = ""
    }

    deleteUserEmployees(user){
        const id = user.parentElement.previousElementSibling.previousElementSibling.textContent
        console.log(id)
        request.delete(id).then(message => {
            this.deleteUserEmployeesToUI(user.parentElement.parentElement)
            }).catch(err => {
            console.log(err)
            })  
    }

    deleteUserEmployeesToUI(element){
        // element.style = "display: none"
        element.remove()
    }

    updateUserEmployees(){

    }
}