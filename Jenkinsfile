pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/fadykaram88/Senior-project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Restart Application') {
            steps {
                sh 'pm2 restart index.js || pm2 start index.js'
            }
        }
    }
}

