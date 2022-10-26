/// <reference types="cypress" />

const LOGIN_URL = `${Cypress.env('base_url')}${Cypress.env('login_url')}`

describe('LOGIN USER API', () => {

    context('POST /api/login', () => {
        it('Login user with valid data', () => {
            cy.request({
                method: 'POST',
                url: LOGIN_URL,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol2"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(200)
                    expect(response.body).to.have.keys('token')
                    expect(response.body.token).to.not.be.null                
                })                
        });


        it('Register user with invalid data - no body', () => {
            cy.request({
                method: 'POST',
                url: LOGIN_URL,
                failOnStatusCode: false,
                body: {}
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(400)
                    expect(response.body).to.have.nested.include({'error': "Missing email or username"})   
                })                
        });

        it('Register user with invalid data - no passowrd', () => {
            cy.request({
                method: 'POST',
                url: LOGIN_URL,
                failOnStatusCode: false,
                body: {
                    "email": "eve.holt@reqres.in"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(400)
                    expect(response.body).to.have.nested.include({'error': "Missing password"})   
                })                
        });


        it('Register user with invalid data - no email', () => {
            cy.request({
                method: 'POST',
                url: LOGIN_URL,
                failOnStatusCode: false,
                body: { "password": "pistol2" }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(400)
                    expect(response.body).to.have.nested.include({'error': "Missing email or username"})   
                })                
        });

    })
})