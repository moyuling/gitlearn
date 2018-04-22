node {
  try {
    stage ('Prepare environment') {
      git branch: 'master', url: 'https://github.com/Troland/gitlearn'
      docker.image('node:7-alpine').inside {
        sh 'npm install'
      }
    }
    stage ('Code analyse') {
      sh 'echo "Run some lints"'
    }
    stage ('Unit test') {
      sh 'echo "Tests will back"'
    }
    stage ('Build') {
      docker.image('node:7-alpine').inside {
        sh 'npm run build'
      }
    }
    stage ('Deploy') {
      sshagent(['has']){
        sh 'ssh app@ip rm -rf /usr/share/nginx/html/**'
        sh 'scp -r dist/** app@ip:/usr/share/nginx/html/'
      }
    }
  } catch (e) {
    mail bcc: '',
    body: '''  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio odio harum in, amet ullam et, consequuntur iusto numquam, est ad sed quae vel eos omnis minima autem cumque excepturi quo!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio odio harum in, amet ullam et, consequuntur iusto numquam, est ad sed quae vel eos omnis minima autem cumque excepturi quo!
    ''',
    cc: '',
    from: '',
    replyTo: '',
    subject: 'It fails all right?',
    to: 'qqnumber@qq.com'
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
