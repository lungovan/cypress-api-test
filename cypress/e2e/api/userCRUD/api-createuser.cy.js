/// <reference types="cypress" />


describe('CREAT USERS API', () => {

    context('POST /api/users', () => {
        it('Create user with valid data', () => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                    "name": "morpheus",
                    "job": "leader"
                }
            })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
                expect(response.status).to.equal(201)              
                expect(response.body).to.have.keys('name','job','id','createdAt')
                expect(response.body.name).to.not.be.null
                expect(response.body.job).to.not.be.null
                expect(response.body.id).to.not.be.null
                expect(response.body.createdAt).to.not.be.null
            })                
        });

        it('Create user with no data', () => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                }
            })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
                // Expected bad request
                expect(response.status).to.equal(400)
            })                
        });

        it('Create user with invalid data -- no user', () => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                    "name": "morpheus"
                }
            })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
                // Expected bad request
                expect(response.status).to.equal(400)
            })                
        });   

        it('Create user with invalid data -- no password', () => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                    "name": "morpheus"
                }
            })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
                // Expected bad request
                expect(response.status).to.equal(400)
            })                
        });   
    });

})