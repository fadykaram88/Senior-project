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
                sh '/usr/bin/pm2 restart index.js || /usr/bin/pm2 start index.js''
            }
        }
    }
}

