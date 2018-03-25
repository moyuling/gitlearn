pipeline {
  agent {
    docker { image 'node:7-alpine' }
  }
  stages {
    stage('myStage'){
      steps {
        sh 'ls -la'
      }
    }
    stage('Build') {
      steps {
        sh './scripts/deploy.sh'
      }
    }
  }
}
