// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

//need to extend the engineer.js to the employee.js by creating a new class
//used exercise 21 subclasses for the super as it relates to the "./emp"
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
