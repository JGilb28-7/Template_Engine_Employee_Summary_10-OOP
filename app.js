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
// Write code to use 1.inquirer to gather information about the _development _team _members,
// and to 2.create objects for each team member (using the correct classes as blueprints!)
    // need to create  function () for the questions using inq and prompt the questions - JSG
    // need to create the a way to select the employee type using list...

function dataManager() {
    inquirer
        .prompt([{
            name: 'name',
            type: 'input',
            message: 'Enter Managers Name',
        },
        {
            name:'email',
            type:'input',
            message:'Enter the Managers Email Address',
        },
        {
            name:'id',
            type:'input',
            message:'Enter the ID Number for Manager'
        },
        {
            name:'number',
            type:'input',
            message:'Enter the Managers Phone Number'
        },
    ])
        //jsg - need to create the response simular to last homework but using the .then in act 24 mini project
        //Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
        //jsg - this allows the response to be pushed to the devTeamMembers array
        .then(function(response){
            console.log(response);
            const newManager = new Manager(
                response.name,
                response.email,
                repsonse.id,
                response.number,
            );
            devTeamMembers.push(newManager);
                dataTeam();
            });
        }
    dataManager();

        //jsg -tested here to make sure the prompt works via node app.js in terminal - complete
    function dataTeam() {
        inquirer
            .prompt([
            {
            name: 'team',
            type: 'list',
            message: 'add a team member?',
            //use choices for list
            choices: [
                'select a Manager',
                'select an Engineer',
                'select an Intern',
                'finished'
            ],
        },
    ])
        //use a .then again and use a switch function 
        //Resources: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

        .then(function (data) {
            switch (data.team) {
                case 'select a Manager':
                dataManager();
                break;
                case 'select an Engineer':
                dataEngineer();
                break;
                case 'select an Intern':
                    dataIntern();
                    break;
                case 'team is finished':
                    dataTeam();
                    break;
            }
            
        });
    }
  
        //jsg - repeat above for the team members with the changes for unique input
    function dataEngineer() {
        inquirer
            .prompt([{
                name: 'name',
                type: 'input',
                message: 'Enter Engineer Name',
            },
            {
                name:'email',
                type:'input',
                message:'Enter Engineer Email Address',
            },
            {
                name:'id',
                type:'input',
                message:'Enter the ID Number for Manager'
            },
            {
                name:'github',
                type:'input',
                message:'Enter the Engineers Githib ID'
            },
        ])
            .then(function(response){
                console.log(response);
                const newEngineer = new Engineer(
                    response.name,
                    response.email,
                    repsonse.id,
                    response.github,
                );
                devTeamMembers.push(newEngineer);
                buildTeam();
                });
            }
    function dataIntern() {
        inquirer
            .prompt([{
                name: 'name',
                type: 'input',
                message: 'Enter Intern Name',
            },
            {
                name:'email',
                type:'input',
                message:'Enter Intern Email Address',
            },
            {
                name:'id',
                type:'input',
                message:'Enter the ID Number for Intern'
            },
            {
                name:'school',
                type:'input',
                message:'Enter the Intern school name'
            },
        ])
            .then(function(response){
                console.log(response);
                const newIntern = new Intern(
                    response.name,
                    response.email,
                    repsonse.id,
                    response.github,
                );
                devTeamMembers.push(newIntern);
                buildTeam();
                });
            }
        
    function dataTeam(){
   fs.writeFileSync(outputPath, render(devTeamMembers), "utf8");
   }
 

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
