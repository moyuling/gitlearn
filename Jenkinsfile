node {
  stage ('Prepare environment') {
    sh 'npm install'
  }
  stage ('Code analyse') {
    sh 'echo "Run some lints"'
  }
  stage ('Unit test') {
    sh 'echo "Tests will back"'
  }
  stage ('Build') {
    sh 'npm run build'
  }
  stage ('Deploy') {
    sshagent(['075cfc25-cf69-49ff-b355-c4fb4a9e7ea6']){
      sh 'ssh app@199.195.248.151 rm -rf /usr/share/nginx/html/**'
      sh 'scp -r dist app@199.195.248.151:/usr/share/nginx/html/'
    }
  }
}
