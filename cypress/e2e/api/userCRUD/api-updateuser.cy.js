/// <reference types="cypress" />


describe('UPDATE USERS API', () => {

    context('PATCH /api/users', () => {
        it('Update user with valid data with PATCH', () => {
            cy.request({
                method: 'PATCH',
                url: 'https://reqres.in/api/users/2',
                body: {
                    "name": "morpheus"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(200)
                    expect(response.body).to.have.keys('name', 'updatedAt')
                    expect(response.body.name).to.have.eq('morpheus')            
                })                
        });
    });

    it('Update user with valid data with PATCH - missing data', () => {
        cy.request({
            method: 'PATCH',
            url: 'https://reqres.in/api/users/2',
            body: {}
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))
                // Expected bad request
                expect(response.status).to.equal(400)          
            })                
    });

    context('PUT /api/users', () => {
        it('Update user with valid data with PUT', () => {
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
                    expect(response.body).to.have.keys('name', 'job', 'updatedAt')
                    expect(response.body.name).to.have.eq('morpheus')
                    expect(response.body.job).to.have.eq('leader')             
                })                
        });
    });

    context('PUT /api/users', () => {
        it('Update user with valid data with PUT - missing data', () => {
            cy.request({
                method: 'PUT',
                url: 'https://reqres.in/api/users/2',
                body: {
                    "name": "morpheus"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    //Expected bad request status code
                    expect(response.status).to.equal(400)            
                })                
        });
    });

})