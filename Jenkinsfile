pipeline {
  agent {
    docker {
      image 'node:7-alpine'
    }
  }
  stages {
    stage('prepare'){
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
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'ssh app@199.195.248.151 rm -rf /usr/share/nginx/html/'
        sh 'scp -r dist app@199.195.248.151:/usr/share/nginx/html/'
      }
    }
  }
}
