const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const devTeamMembers = [];
const emptyId = [];
// Write code to use 1.inquirer to gather information about the _development _team _members,
// and to 2.create objects for each team member (using the correct classes as blueprints!)
    // need to create  function () for the questions using inq and prompt the questions - JSG
    /
    const questionsEmployee = [
        {
            type: "input",
            name: "nameManager",
            message: "enter the name of manager?"
        },
        {
            type: "input",
            name: "managerId",
            message: "Enter the Managers ID"
        },
        {
            type: "input",
            name: "emailManager",
            message: "Enter the manager's email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Ente the manager's office phone number number?"
            
        }
    ];
    
    //jsg - need to create the response simular to last homework but using the .then in act 24 mini project
    //Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    //jsg - this allows the response to be pushed to the devTeamMembers array
    function managerData() {
        console.log("Build your team");
        inquirer.prompt(questionsEmployee).then(function(data){
            const manager = new Manager(data.nameManager, data.managerId, data.emailManager, data.officeNumber);
            devTeamMembers.push(manager);
            emptyId.push(data.managerId);
            buildTeam();
        });
    };
    
    function buildTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeRoles",
                message: "select employee roles to add.",
                choices: [
                    "Engineer",
                    "Intern",
                    "finished adding employees"
                ]
            }
            // this tell if the empRoles is equal to either Engineer or Intern then present the function()
        ]).then(function(data){
            if (data.employeeRoles === "Engineer"){
                engineer();
            } else if (data.employeeRoles === "Intern"){
                intern();
            } else (outputTeam());
        });
    };
    
    function engineer() {
        inquirer.prompt([
            {
                type: "input",
                name:"engineerName",
                message: "Enter engineer's name?"
            },
            {
                type: "input",
                name:"engineerId",
                message: "Enter engineer's ID?"
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Enter engineer's email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Enter engineer's GitHub username?"
            }
        ]). then(function(data){
            const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub);
            devTeamMembers.push(engineer);
            emptyId.push(data.engineerId);
            buildTeam();
        });
    };
    
    function intern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's ID?"
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is the intern's email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is the intern's school?"
            }
        ]). then(function(data){
            const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool);
            devTeamMembers.push(intern);
            emptyId.push(data.internId);
            buildTeam();
        });
    };
    
    function outputTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(devTeamMembers), "utf-8");
    }
    
    managerData();

// After the user has input all employees desired, call the 3.`render` function (required
// above) and 4. pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to 5.create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named 6.`team.html` in the
// `output` folder.
      

//You can use the variable 7.`outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
