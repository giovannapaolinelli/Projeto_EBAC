const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'k8vw2h',
  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: false,
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // },
  // chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // // return require('./cypress/plugins/index.js')(on, config)
      // on('before:browser:launch', function(browser, launchOptions) {
      //     if (browser.name === 'chrome') {
      //       launchOptions.args.push('--disable-dev-shm-usage')
      //       launchOptions.args.push('--disable-gpu')
      //     }
      //     return launchOptions
      //   })
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/*.feature',
    baseUrl: 'http://lojaebac.ebaconline.art.br',
  },
})
