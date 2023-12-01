pipeline {
    agent any
    stages('Launch TNR') {
        stage('Launch Demo') {
            steps('Install dependancies') {
                bat script: "npm i"

            }
            steps('Run demo test') {
                bat script: "npx cypress run --browser firefox -spec cypress/e2e/test/demo.cy.js"
                
            }
        }
    }
}