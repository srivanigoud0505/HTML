document.addEventListener("DOMContentLoaded",function(){
    const employeeForm =document.getElementById("Employeeform")
    const employeeName =document.getElementById("EmployeeName")
    const employeeTitle =document.getElementById("EmployeeTitle")
  

    //load employee from local storage
    function loadEmployees()
{
    employeelist.innerHTML  =' ';
    const employees =JSON.parse(localStorage.getItem("employees")) || [];
    employees.forEach((element,index) => {
       const row= document.createElement("tr");
       row.innerHTML=`
       <td>${employee.name}</td>
       <td>${employee.title}</td>
       <td>
       <button onclick ="editEmployee(${index})">Edit</button>
        <button onclick ="deleteEmployee(${index})">Delete</button>
       
       </td>
       
       `; 
       employeelist.appendChild(row);
    });
}
//add a new employee
employeeForm.addEventListener("submit",function(e) { 
    e.preventDefault();
    const newEmployeeName = employeeName.value.trim();
    const newEmployeeTitle = employeeTitle.Value.trim();
    if(newEmployeeName !=="" && newEmployeeTitle !==""){
        const employee= JSON.parse(localStorage.getItem("employees")) || [];
        const newEmployee ={ name:newEmployeeName,title:newEmployeeTitle};
        employee.push(newEmployee);
        localStorage.setItem("employees", JSON.stringify(employees));
        employeeName.value="";
        employeeTitle.value="";
        loadEmployees();
    }
   
});
//add an employee
window.editEmployee =function (index){
    const employees =JSON.parse(localStorage.getItem("employees")) || [];
const employee =employees[index];
const updateName = prompt("edit Employee Name:, employee.name");
const updateTitle = prompt("edit Employee Title:, employee.title");
if (updateName !==null && updateTitle !== null){
    employee.name=updateName;
    employee.title=updateTitle;
    localStorage.setItem("employees",JSON.stringify(employees));
    loadEmployees();
}

};
//delete an employee
window.deleteEmployee =function(index){
    const employees =JSON.parse(localStorage.getItem("employees")) || [];
    employees.splice(index,1);
    localStorage.setItem("employees",JSON.stringify(employees));
    loadEmployees();
};

//intial load of employees
loadEmployees();


});