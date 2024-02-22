window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":0,"numPassedTests":5,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":6,"startTime":1708609475681,"success":false,"testResults":[{"numFailingTests":1,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1708609480220,"runtime":4403,"slow":false,"start":1708609475817},"testFilePath":"C:\\Estudos\\Jest\\jest\\api_reqres.test.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mTeste de API Reqres › Teste de Registro de Usuário email errado\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m\"Missing password\"\u001b[39m\n    Received: \u001b[31m\"Note: Only defined users succeed registration\"\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 70 |\u001b[39m         })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 71 |\u001b[39m         expect(response\u001b[33m.\u001b[39mstatusCode)\u001b[33m.\u001b[39mtoBe(\u001b[35m400\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 72 |\u001b[39m         expect(response\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39merror)\u001b[33m.\u001b[39mtoBe(\u001b[32m'Missing password'\u001b[39m)\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                                     \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 73 |\u001b[39m         console\u001b[33m.\u001b[39mlog(\u001b[32m'Etapa de Registro de Usuário email errado feita com Sucesso!'\u001b[39m)\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 74 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 75 |\u001b[39m })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toBe (\u001b[22m\u001b[2m\u001b[0m\u001b[36mjest/api_reqres.test.js\u001b[39m\u001b[0m\u001b[2m:72:37)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Teste de API Reqres"],"duration":714,"failureMessages":[],"fullName":"Teste de API Reqres Deve criar um novo usuário","status":"passed","title":"Deve criar um novo usuário"},{"ancestorTitles":["Teste de API Reqres"],"duration":533,"failureMessages":[],"fullName":"Teste de API Reqres login caminho feliz","status":"passed","title":"login caminho feliz"},{"ancestorTitles":["Teste de API Reqres"],"duration":519,"failureMessages":[],"fullName":"Teste de API Reqres login usuário inválido","status":"passed","title":"login usuário inválido"},{"ancestorTitles":["Teste de API Reqres"],"duration":540,"failureMessages":[],"fullName":"Teste de API Reqres login senha inválida","status":"passed","title":"login senha inválida"},{"ancestorTitles":["Teste de API Reqres"],"duration":540,"failureMessages":[],"fullName":"Teste de API Reqres Teste de Registro de Usuário caminho feliz","status":"passed","title":"Teste de Registro de Usuário caminho feliz"},{"ancestorTitles":["Teste de API Reqres"],"duration":508,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m\"Missing password\"\u001b[39m\nReceived: \u001b[31m\"Note: Only defined users succeed registration\"\u001b[39m\n    at Object.toBe (C:\\Estudos\\Jest\\jest\\api_reqres.test.js:72:37)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Teste de API Reqres Teste de Registro de Usuário email errado","status":"failed","title":"Teste de Registro de Usuário email errado"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Estudos\\Jest\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":["api_reqres.test.js"],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Estudos\\Jest\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"./jest/reports/22-02-2024_10-44-34","filename":"report.html","expand":true}]],"rootDir":"C:\\Estudos\\Jest","runTestsByPath":false,"seed":1306170142,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"api_reqres.test.js","testSequencer":"C:\\Estudos\\Jest\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1708609480239,"_reporterOptions":{"publicPath":"./jest/reports/22-02-2024_10-44-34","filename":"report.html","expand":true,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})