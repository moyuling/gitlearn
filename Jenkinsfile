pipeline {
  agent {
    docker {
      image 'node:7-alpine',
      args '-u root:root'
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
        echo 'Begin test1'
      }
    }
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
        sshagent(['075cfc25-cf69-49ff-b355-c4fb4a9e7ea6']) {
          sh 'ssh app@199.195.248.151 rm -rf /usr/share/nginx/html/'
          sh 'scp -r dist app@199.195.248.151:/usr/share/nginx/html/'
        }
      }
    }
  }
}
