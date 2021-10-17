node {
    def commit_id
    
    stage('Preparation') {
        checkout scm
        sh "git rev-parse --short HEAD > .git/commit-id"
        commit_id = readFile('.git/commit-id').trim()
    }

    stage('test') {
        nodejs(nodeJSInstallationName: 'node16') {
            sh 'npm install --only=dev'
            sh 'npm test'
        }
    }

    stage('sonar-scanner') {
        def sonarqubeScannerHome = tool name: 'dev-sonar', type: 'hudson.plugins.sonar.SonarRunnerInstallation'
        withCredentials([string(credentialsId: 'dev-sonar', variable: 'sonarLogin')]){
            sh '${sonarqubeScannerHome}/bin/sonar-scanner -e -Dsonar.host.url=http://143.198.100.39:9000 -Dsonar.login=${sonarLogin} -Dsnoar.projectName=click-counter -Dsonar.projectVersion=${env.BUILD_NUMBER} -Dsonar.projectKey=CS -Dsonar.sources=src -Dsonar.tests=src/__tests__ Dsonar.exclusions=src/style -Dsonar.language=node'
        }
    }

    stage('finish'){
        sh "echo 'node build completed successfully'"
    }
}