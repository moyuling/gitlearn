node {
  stage('prepare'){
    sh 'npm install'
  }
  stage('Unit test') {
    echo 'Begin test'
  }
  stage('Build') {
    sh 'npm run build'
  }
  stage('Deploy') {
    sh 'ssh app@199.195.248.151 rm -rf /usr/share/nginx/html/'
    sh 'scp -r dist app@199.195.248.151:/usr/share/nginx/html/'
  }
}
