pipeline {
    agent any
    // environment {
    //     token = ""
    //     projectKey = "POEI23Project2GR1"

    // }
    stages('Launch TNR') {
        stage('Launch Demo') {
            steps {
                echo 'Install dependancies'
                bat script: "npm install --only=dev"

            }
            steps {
                echo 'Run demo test'
                bat script: "npx cypress run --browser firefox -spec cypress/e2e/test/demo.cy.js"
                
            }
        }
    }
}