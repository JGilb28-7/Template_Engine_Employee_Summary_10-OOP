// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");
//used exercise 21 subclasses for the super as it relates to the "./emp"
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }
      
    getSchool() {
        return this.school
    }
    //needs function to overwrite the getRole()
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;
