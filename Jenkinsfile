node {
    def commit_id
    
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > ./git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('test') {
        nodejs(nodeJsInstallationName: 'node16') {
            sh 'npm install --only=dev'
            sh 'npm test'
        }
    }

    stage('finish'){
        step {
            sh 'node build completed successfully'
        }
    }
}