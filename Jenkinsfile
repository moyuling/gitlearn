pipeline {
  agent any
  stages {
    stage('myStage'){
      steps {
        sh 'ls -la'
      }
    }
    stage('Build') {
      steps {
        echo 'Build test branch'
        echo 'Build master branch'
      }
    }
  }
}
