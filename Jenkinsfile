node {
  try {
    stage ('Prepare environment') {
      git branch: 'master', url: 'git@github.com:Troland/gitlearn.git'
      sh 'npm install'
    }
    stage ('Code analyse') {
      sh 'echo "Run some lints"'
    }
    stage ('Unit test') {
      sh 'echo "Tests will back"'
    }
    stage ('Build') {
      sh 'npm run build3'
    }
    stage ('Deploy') {
      sshagent(['075cfc25-cf69-49ff-b355-c4fb4a9e7ea6']){
        sh 'ssh app@199.195.248.151 rm -rf /usr/share/nginx/html/**'
        sh 'scp -r dist app@199.195.248.151:/usr/share/nginx/html/'
      }
    }
  } catch (e) {
    mail bcc: '', body: 'sdf', cc: '', from: '', replyTo: '', subject: 'ok', to: '295565586@qq.com'
  } finally {
    def currentResult = currentBuild.result ?: 'SUCCESS'
    if (currentResult == 'UNSTABLE') {
      echo 'This will run only if the run was marked as unstable'
    }

    def previousResult = currentBuild.previousBuild?.result
    if (previousResult != null && previousResult != currentResult) {
      echo 'This will run only if the state of the Pipeline has changed'
      echo 'For example, if the Pipeline was previously failing but is now successful'
    }

    echo 'This will always run'
  }
}
