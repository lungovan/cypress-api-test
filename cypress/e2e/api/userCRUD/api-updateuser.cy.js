/// <reference types="cypress" />


describe('UPDATE USERS API', () => {

    context('PATCH /api/users', () => {
        it('Update user with valid data', () => {
            cy.request({
                method: 'PATCH',
                url: 'https://reqres.in/api/users/2',
                body: {
                    "name": "morpheus",
                    "job": "leader"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(200)
                
                })                
        });
    });

    context('PUT /api/users', () => {
        it('Update user with valid data', () => {
            cy.request({
                method: 'PUT',
                url: 'https://reqres.in/api/users/2',
                body: {
                    "name": "morpheus",
                    "job": "leader"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(200)
                
                })                
        });
    });

})