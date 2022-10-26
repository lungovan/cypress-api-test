/// <reference types="cypress" />


describe('DELETE USERS API', () => {

    context('DELETE /api/users/3', () => {
        it('Delete user with valid data', () => {
            cy.request({
                method: 'DELETE',
                url: 'https://reqres.in/api/users/3'
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.status))
                    expect(response.status).to.equal(204)
                })                
        });

    }) 
})