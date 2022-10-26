const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    base_url: 'https://reqres.in',
    login_url: '/api/login',
    register_url: '/api/register',
  }
});
