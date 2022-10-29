
## Test cases for APIs - https://reqres.in

##### _Functional Test_
- User APIs
   - List users: api-listusers.cy.js
        - Test List user API with no parameter
        - List user API the first page - with page parameter = 1
        - List user API the last page - with page parameter = ${last_page}
        - List user API with the out of data page, parameter = ${no_data_page}
        - List user API the first page - with page parameter = 1, With custom per_page parameter
        - List user API the last page - with page parameter = ${last_page}, With custom per_page parameter
        - List user API with the out of data page, parameter = ${no_data_page}, With custom per_page parameter
   - Read single user: api-readuser.cy.js
        - Get user API with valid user
        - Get user API - Not found user
   - Create user: api-createuser.cy.js
        - Create user with valid data
        - Create user with no data
        - Create user with invalid data -- no user
        - Create user with invalid data -- no password
   - Update user: api-updateuser.cy.js
        - Update user with valid data with PATCH
        - Update user with valid data with PATCH - missing data
        - Update user with valid data with PUT
        - Update user with valid data with PUT - missing data
   - Delete user: api-deleteuser.cy.js
        - Delete user with valid data
        - Delete user with invalid data - not found user
- Login API: api-login.spec.cy.js
        - Login user with valid data
        - Register user with invalid data - no body
        - Register user with invalid data - no passowrd
        - Register user with invalid data - no email
- Register API: api-register.cy.js
        - Register user with valid data
        - Register user with invalid data - no body
        - Register user with invalid data - no password
        - Register user with invalid data - no email

##### _Security and Authorization Test_
- Skipped since all APIs are test API, no documenation or specification about the security.
##### _Performance Test_
- Skipped since all APIs are test API.
##### _Load Tests (positive)_
- Skipped since all APIs are test API.
##### _Stress Tests (negative)_
- Skipped since all APIs are test API.
##### _Stress Tests (negative)_
- Skipped since all APIs are test API.
##### _Usability Tests_
- Skipped since the documentation about the product is not available.

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