
## Test cases for APIs - https://reqres.in

- User APIs
   - List users: api-listusers.cy.js
   - Read single user: api-readuser.cy.js
   - Create user: api-createuser.cy.js
   - Update user: api-updateuser.cy.js
   - Delete user: api-deleteuser.cy.js
- Login API: api-login.spec.cy.js
- Register API: api-register.cy.js


## Tech

Test cases are implemented using:
- [Cypress] - Fast, easy and reliable testing for anything that runs in a browser!
- [node.js] - evented I/O for the backend
- [Javascript] - the programming language of the Web

## Installation
- Test cases requires [Node.js](https://nodejs.org/) v10+ to run.
- Check out the repository `git clone https://github.com/lungovan/reqres-cypress-test.git`
- `cd reqres-cypress-test`
- Run `npm install` to install all dependencies 
## Run test cases
- `cd reqres-cypress-test`
- Run command `npx cypress run` to run tests headless
- Run command `npx cypress open` to run tests on other browsers