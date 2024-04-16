const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.ts',
    setupNodeEvents(on, config) {
      // node event listeners
    },
    supportFile: 'cypress/support/e2e.ts'
  }
});