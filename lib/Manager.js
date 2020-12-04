// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//need to extend the engineer.js to the employee.js by creating a new class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
 //needs function to overwrite the getRole()
    getRole() {
         return "Manager"
    }
}

module.exports = Manager;
