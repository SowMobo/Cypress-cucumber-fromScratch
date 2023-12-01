// const { defineConfig } = require("cypress");
// const webpack = require("@cypress/webpack-preprocessor");
// const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

// async function setupNodeEvents(on, config) {
//   // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
//   await preprocessor.addCucumberPreprocessorPlugin(on, config);

//   on(
//     "file:preprocessor",
//     webpack({
//       webpackOptions: {
//         resolve: {
//           extensions: [".ts", ".js"],
//         },
//         module: {
//           rules: [
//             {
//               test: /\.feature$/,
//               use: [
//                 {
//                   loader: "@badeball/cypress-cucumber-preprocessor/webpack",
//                   options: config,
//                 },
//               ],
//             },
//           ],
//         },
//       },
//     })
//   );

//   // Make sure to return the config object as it might have been modified by the plugin.
//   return config;
// }

// module.exports =  defineConfig({
//   projectId: 'c19z2i',
//   e2e: {
//     baseUrl: "https://amazon.fr",
//     specPattern: ['**/*.feature','**/test/*.cy.js'],
//     setupNodeEvents,
//   },
// });

/****************************************************************************************************
 * Another way to define cypress.config.js file using plugin an only considering tests in feature files
 * ***************************************************************************************************/
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: ["**/*.feature", "**/test/*.cy.js"],
    supportFile: false,
    baseUrl: "https://practice.automationtesting.in",
    retries:{
      runMode : 1
    },
    setupNodeEvents,
  },
});