/// <reference types="cypress" />

const REGISTER_URL = `${Cypress.env('base_url')}${Cypress.env('register_url')}`

describe('REGISTER USERS API', () => {

    context('POST /api/register', () => {
        it('Register user with valid data', () => {
            cy.request({
                method: 'POST',
                url: REGISTER_URL,
                body: {
                    "email": "eve.holt@reqres.in",
                    "password": "pistol"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(200)
                    expect(response.body).to.have.keys('id','token')
                    expect(response.body.id).to.not.be.null
                    expect(response.body.token).to.not.be.null                
                })                
        });

        it('Register user with invalid data - no body', () => {
            cy.request({
                method: 'POST',
                url: REGISTER_URL,
                failOnStatusCode: false,
                body: {}
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(400)
                    expect(response.body).to.have.nested.include({'error': "Missing email or username"})              
                })                
        });

        it('Register user with invalid data - no password', () => {
            cy.request({
                method: 'POST',
                url: REGISTER_URL,
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
                url: REGISTER_URL,
                failOnStatusCode: false,
                body: {
                    "passowrd": "pistol"
                }
            })
                .should((response) => {
                    cy.log(JSON.stringify(response.body))
                    expect(response.status).to.equal(400)
                    expect(response.body).to.have.nested.include({'error': "Missing email or username"})             
                })                
        });
    })
})