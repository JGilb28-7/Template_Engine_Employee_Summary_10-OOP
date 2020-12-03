// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

        getName() {
            return this.name;
        }
        getId() {
            return this.id;
        }
        getEmail() {
            return this.email
        }
        //needs to return 'Employee' so need to return the class name
        getRole() {
            return "Employee";
        }

}
module.exports = Employee;