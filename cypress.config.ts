const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    specPattern: 'cypress/**/*.spec.ts',
    supportFile: 'cypress/support/e2e.ts',
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    video: false,
    videoCompression: 32,
    chromeWebSecurity: false,
    watchForFileChanges: true,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {},
  },
});
