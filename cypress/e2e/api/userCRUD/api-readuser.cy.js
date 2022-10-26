/// <reference types="cypress" />

describe('LIST USERS API', () => {

  context('GET /api/users - Default per_page parameter, per_page=6', () => {
    it('List user API with no parameter', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
            });
    });

    it('Get user API - Not found user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/200',
            failOnStatusCode: false
        })
            .should((response) => {
                //cy.log(JSON.stringify(response.body))
                expect(response.status).to.equal(404)
            });
    });

    })
})