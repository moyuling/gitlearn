pipeline {
  agent none
  stages {
    stage('prepare'){
      docker {
        image 'node:7-alpine'
      }
      steps {
        sh 'npm install'
      }
    }
    stage('Unit test') {
      steps {
        echo 'Begin test'
      }
    }
    stage('Build') {
      docker {
        image 'node:7-alpine'
      }
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['474ceaab-c1ca-4c4a-b588-7809f6695b39']) {
          sh 'ssh app@199.195.248.151 rm -rf /usr/share/nginx/html/'
          sh 'scp -r dist app@199.195.248.151:/usr/share/nginx/html/'
        }
      }
    }
  }
}
