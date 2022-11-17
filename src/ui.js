import { Request } from "./request"


const request = new Request("http://localhost:3000/employees");
let updateState= null;


export class UI{
    constructor(){
        this.employeesList = document.getElementById("employees");
        this.updateButton = document.getElementById("update");
        this.nameInput = document.getElementById("name");
        this.departmentInput = document.getElementById("department");
        this.salaryInput = document.getElementById("salary");
    }

    addAllEmployeeToUI() {
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
        this.nameInput.value = ""
        this.departmentInput.value = ""
        this.salaryInput.value = ""
    }

    deleteUserEmployees(user){
        const id = user.parentElement.previousElementSibling.previousElementSibling.textContent
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

    employeeInfoToInputs(element){
        const children = element.children
        this.nameInput.value = children[0].textContent
        this.departmentInput.value = children[1].textContent
        this.salaryInput.value = children[2].textContent

        if( updateState === null){
            updateState = {
                updateStateID: children[3].textContent,
                updateParent: element
            }
        }
        else{
            updateState = null;
        }
    }

    employeeUpdate(){
        request.put(updateState.updateStateID, {name: this.nameInput.value.trim(), departmant: this.departmentInput.value.trim(), salary: Number(this.salaryInput.value)})  
            .then(employees => {
                this.updateEmloyeeOnIU(employees)
                
            })
            .catch(err => {
                console.log(err)
            })  
    }

    updateEmloyeeOnIU(element){
        updateState.updateParent.innerHTML = 
        `   <tr>                             
                <td>${element.name}</td>
                <td>${element.departmant}</td>
                <td>${element.salary}</td>
                <td>${element.id}</td>
                <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
                <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
            </tr> `

        this.clearInputs()    

    }
}