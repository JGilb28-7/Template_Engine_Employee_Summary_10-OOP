// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// this links to back the the employee.js file 
const Employee = require("./Employee");

//need to extend the engineer.js to the employee.js by creating a new class
class Engineer extends Employee {
    constructor(name, id, email, github) {
       //used exercise 21 subclasses for the super as it relates to the "./emp"
        super(name, id, email)
        this.github = github
    }
    
    getGithub() {
        return this.github
    }
    //needs function to overwrite the getRole()
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;

