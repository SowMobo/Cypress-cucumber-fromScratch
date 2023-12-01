pipeline {
    agent any
    // environment {
    //     token = ""
    //     projectKey = "POEI23Project2GR1"

    // }
    stages('Launch TNR') {
        stage('Launch Demo') {
            // options {
            //     // Timeout counter starts BEFORE agent is allocated
            //     // timeout(time: 15, unit: 'SECONDS')
            // }
            steps {
                echo 'Install dependancies'
                bat script: "npm install --only=dev"

            }
            steps {
                echo 'Run demo test'
                bat script: "npx cypress run --browser firefox -spec cypress/e2e/test/demo.cy.js"
                
            }
        }
        // stage('Publishing test reports in Jenkins') {
        //     steps {
        //          robot outputPath: './reports', logFileName: 'log.html', outputFileName: 'output.xml', reportFileName: 'report.hml', passThreshold: 100, unstableThreshold: 75.0
        //     }
        // }
        // stage('Importing test results to jira-xray') {
        //     steps {
        //         echo    'Generate token'
        //         bat script: token=$(curl -H "Content-Type: application/json" -X POST --data @"cloud_auth.json" https://xray.cloud.getxray.app/api/v1/authenticate|tr -d'"'")
        //     }
        //     steps {

        //         bat script: "curl -H 'Content-Type: text/xml' -X POST -H 'Authorization: Bearer $token' --data @'./reports/output.xml' https://xray.cloud.getxray.app/api/v1/import/execution/robot?projectKey=$projectKey"
        //     }
        // }
    }
}