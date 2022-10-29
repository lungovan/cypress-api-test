/// <reference types="cypress" />

describe('GET USERS API', () => {

  context('GET /api/users/<id>', () => {
    it('Get user API with valid user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2'
        })
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(200)
            expect(response.body).to.have.keys('data', 'support')
            expect(response.body.data).to.have.keys('id', 'email', 'first_name', 'last_name', 'avatar')
            expect(response.body.data.id).to.not.be.null
            expect(response.body.data.email).to.not.be.null
            expect(response.body.data.first_name).to.not.be.null
            expect(response.body.data.last_name).to.not.be.null
            expect(response.body.data.avatar).to.not.be.null
        });
    });

    it('Get user API - Not found user', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/200',
            failOnStatusCode: false
        })
        .should((response) => {
            cy.log(JSON.stringify(response.body))
            expect(response.status).to.equal(404)
        });
    });

    })
})