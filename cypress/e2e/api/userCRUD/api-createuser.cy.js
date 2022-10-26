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
                
                })                
        });

        it('Create user with invalid data', () => {
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: {
                    "name": "morpheus"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                
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
                
                })                
        });
            
    });

})