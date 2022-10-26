/// <reference types="cypress" />

const total = 12
const default_item_per_page = 6
const custom_item_per_page = 5
const default_total_pages = Math.ceil(total/default_item_per_page)
const custom_total_pages = Math.ceil(total/custom_item_per_page)
const list_user_response_keys = ['page', 'per_page', 'total', 'total_pages', 'data', 'support']
const list_user_data_keys = ['id', 'email', 'first_name', 'last_name', 'avatar']
const support_page_url = "https://reqres.in/#support-heading"
const support_text = "To keep ReqRes free, contributions towards server costs are appreciated!"

describe('LIST USERS API', () => {

  context('GET /api/users - Default per_page parameter, per_page=6', () => {
      it('List user API with no parameter', () => {
          cy.request({
              method: 'GET',
              url: 'https://reqres.in/api/users'
          })
              .should((response) => {
                  cy.log(JSON.stringify(response.body))

                  expect(response.status).to.equal(200)
                  expect(response.body).to.have.keys(list_user_response_keys)
                  expect(response.body).to.have.nested.include({'page': 1})
                  expect(response.body).to.have.nested.include({'per_page': default_item_per_page})
                  expect(response.body).to.have.nested.include({'total': total})
                  expect(response.body).to.have.nested.include({'total_pages': default_total_pages})

                  expect(response.body.support).to.have.nested.include({'url': support_page_url })
                  expect(response.body.support).to.have.nested.include({'text': support_text})

                  const expected_data_length = (total > default_item_per_page) ? default_item_per_page : total
                  expect(response.body.data).to.have.length(expected_data_length)
                  response.body.data.forEach(element => {
                    expect(element).to.have.keys(list_user_data_keys)
                    expect(element.id).to.not.be.null
                    expect(element.email).to.not.be.null
                    expect(element.first_name).to.not.be.null
                    expect(element.last_name).to.not.be.null
                    expect(element.avatar).to.not.be.null
                  });
              });
      });



    it('List user API the first page - with page parameter = 1', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=1'
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys(list_user_response_keys)
                expect(response.body).to.have.nested.include({'page': 1})
                expect(response.body).to.have.nested.include({'per_page': default_item_per_page})
                expect(response.body).to.have.nested.include({'total': total})
                expect(response.body).to.have.nested.include({'total_pages': default_total_pages})

                expect(response.body.support).to.have.nested.include({'url': support_page_url })
                expect(response.body.support).to.have.nested.include({'text': support_text})

                const expected_data_length = (total > default_item_per_page) ? default_item_per_page : total
                expect(response.body.data).to.have.length(expected_data_length)
                response.body.data.forEach(element => {
                  expect(element).to.have.keys(list_user_data_keys)
                  expect(element.id).to.not.be.null
                  expect(element.email).to.not.be.null
                  expect(element.first_name).to.not.be.null
                  expect(element.last_name).to.not.be.null
                  expect(element.avatar).to.not.be.null
                });
            });
    });

const last_page = Math.ceil(total/default_item_per_page)

    it(`List user API the last page - with page parameter = ${last_page}`, () => {
        cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users?page=${last_page}`
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys(list_user_response_keys)
                expect(response.body).to.have.nested.include({'page': last_page})
                expect(response.body).to.have.nested.include({'per_page': default_item_per_page})
                expect(response.body).to.have.nested.include({'total': total})
                expect(response.body).to.have.nested.include({'total_pages': default_total_pages})

                expect(response.body.support).to.have.nested.include({'url': support_page_url })
                expect(response.body.support).to.have.nested.include({'text': support_text})

                const expected_data_length = total - ((last_page-1)*default_item_per_page)
                expect(response.body.data).to.have.length(expected_data_length)
                response.body.data.forEach(element => {
                  expect(element).to.have.keys(list_user_data_keys)
                  expect(element.id).to.not.be.null
                  expect(element.email).to.not.be.null
                  expect(element.first_name).to.not.be.null
                  expect(element.last_name).to.not.be.null
                  expect(element.avatar).to.not.be.null
                });
            });
    });

const no_data_page = Math.ceil(total/default_item_per_page) + 1

    it(`List user API with the out of data page, parameter = ${no_data_page}. Should return an empty data response`, () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=' + no_data_page.toString()
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys(list_user_response_keys)
                expect(response.body).to.have.nested.include({'page': no_data_page})
                expect(response.body).to.have.nested.include({'per_page': default_item_per_page})
                expect(response.body).to.have.nested.include({'total': total})
                expect(response.body).to.have.nested.include({'total_pages': default_total_pages})

                expect(response.body.support).to.have.nested.include({'url': support_page_url})
                expect(response.body.support).to.have.nested.include({'text': support_text})

                expect(response.body.data).to.have.length(0)
            });
    });
});

context(`GET /api/users - With custom per_page parameter, per_page=${custom_item_per_page}`, () => {


    it('List user API the first page - with page parameter = 1', () => {
        cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users?page=1&per_page=${custom_item_per_page}`
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys(list_user_response_keys)
                expect(response.body).to.have.nested.include({'page': 1})
                expect(response.body).to.have.nested.include({'per_page': custom_item_per_page})
                expect(response.body).to.have.nested.include({'total': total})
                expect(response.body).to.have.nested.include({'total_pages': custom_total_pages})

                expect(response.body.support).to.have.nested.include({'url': support_page_url })
                expect(response.body.support).to.have.nested.include({'text': support_text})

                const expected_data_length = (total > custom_item_per_page) ? custom_item_per_page : total
                expect(response.body.data).to.have.length(expected_data_length)
                response.body.data.forEach(element => {
                  expect(element).to.have.keys(list_user_data_keys)
                  expect(element.id).to.not.be.null
                  expect(element.email).to.not.be.null
                  expect(element.first_name).to.not.be.null
                  expect(element.last_name).to.not.be.null
                  expect(element.avatar).to.not.be.null
                });
            });
    });

    const last_page = Math.ceil(total/custom_item_per_page)

    it(`List user API the last page - with page parameter = ${last_page}`, () => {
        cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users?page=${last_page}&per_page=${custom_item_per_page}`
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys(list_user_response_keys)
                expect(response.body).to.have.nested.include({'page': last_page})
                expect(response.body).to.have.nested.include({'per_page': custom_item_per_page})
                expect(response.body).to.have.nested.include({'total': total})
                expect(response.body).to.have.nested.include({'total_pages': custom_total_pages})

                expect(response.body.support).to.have.nested.include({'url': support_page_url })
                expect(response.body.support).to.have.nested.include({'text': support_text})

                const expected_data_length = total - ((last_page-1)*custom_item_per_page)
                expect(response.body.data).to.have.length(expected_data_length)
                response.body.data.forEach(element => {
                  expect(element).to.have.keys(list_user_data_keys)
                  expect(element.id).to.not.be.null
                  expect(element.email).to.not.be.null
                  expect(element.first_name).to.not.be.null
                  expect(element.last_name).to.not.be.null
                  expect(element.avatar).to.not.be.null
                });
            });
    });

    const no_data_page = Math.ceil(total/custom_item_per_page) + 1
    it(`List user API with the out of data page, parameter = ${no_data_page}. Should return an empty data response`, () => {
        cy.request({
            method: 'GET',
            url: `https://reqres.in/api/users?page=${no_data_page}&per_page=${custom_item_per_page}`
        })
            .should((response) => {
                cy.log(JSON.stringify(response.body))

                expect(response.status).to.equal(200)
                expect(response.body).to.have.keys(list_user_response_keys)
                expect(response.body).to.have.nested.include({'page': no_data_page})
                expect(response.body).to.have.nested.include({'per_page': custom_item_per_page})
                expect(response.body).to.have.nested.include({'total': total})
                expect(response.body).to.have.nested.include({'total_pages': custom_total_pages})

                expect(response.body.support).to.have.nested.include({'url': support_page_url})
                expect(response.body.support).to.have.nested.include({'text': support_text})

                expect(response.body.data).to.have.length(0)
            });
    });

});

});