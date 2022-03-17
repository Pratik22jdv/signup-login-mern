pipeline {
    // agent {
    //     docker {
    //         image 'node:lts-buster-slim'
    //         args '-p 3000:3000'
    //     }
    // }

    agent any
    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
    }
}
