pipeline {
    agent any
    stages {
        stage('Intalling Dependancies') {
            steps{
                bat script: "npm i"
            }
        }
        stage('e2e Tests') {
            steps {
                bat script: "npx cypress run --browser firefox -spec cypress/e2e/test/demo.cy.js"     
            }
        }
            
    }
}
