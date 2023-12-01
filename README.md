Run 'set DEBUG=cypress:*
cypress run' to understand 'Error: Webpack Compilation Error'

# Some commands do not work when refering them from '''scripts''' in package.json
``` npm install --only=dev ```

# If we need to run test cases in folder ```test``` , replace  ``specPattern: "**/*.feature"``` in ```cypress.config.js``` file to ``specPattern: ["**/*.feature", "**/test/*.cy.js"] 

# override config file in CLI
command: ``npx cypress run --config-file cypress/e2e/config/preprodBDD.config.js  -e tags='@search' -b chrome``

