window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":0,"numPassedTestSuites":0,"numPassedTests":0,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":1,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":0,"startTime":1708608613075,"success":false,"testResults":[{"numFailingTests":0,"numPassingTests":0,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":0,"runtime":0,"slow":false,"start":0},"testFilePath":"C:\\Estudos\\Jest\\jest\\api_reqres.test.js","failureMessage":"  \u001b[1m● \u001b[22mTest suite failed to run\n\n    \u001b[1m\u001b[31mJest encountered an unexpected token\u001b[39m\u001b[22m\n\n    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.\n\n    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.\n\n    By default \"node_modules\" folder is ignored by transformers.\n\n    Here's what you can do:\n     • If you are trying to use ECMAScript Modules, see \u001b[4mhttps://jestjs.io/docs/ecmascript-modules\u001b[24m for how to enable it.\n     • If you are trying to use TypeScript, see \u001b[4mhttps://jestjs.io/docs/getting-started#using-typescript\u001b[24m\n     • To have some of your \"node_modules\" files transformed, you can specify a custom \u001b[1m\"transformIgnorePatterns\"\u001b[22m in your config.\n     • If you need a custom transformation specify a \u001b[1m\"transform\"\u001b[22m option in your config.\n     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the \u001b[1m\"moduleNameMapper\"\u001b[22m config option.\n\n    You'll find more details and examples of these config options in the docs:\n    \u001b[36mhttps://jestjs.io/docs/configuration\u001b[39m\n    For information about custom transformations, see:\n    \u001b[36mhttps://jestjs.io/docs/code-transformation\u001b[39m\n\n    \u001b[1m\u001b[31mDetails:\u001b[39m\u001b[22m\n\n    SyntaxError: C:\\Estudos\\Jest\\jest\\api_reqres.test.js: Unexpected token (20:14)\n\n    \u001b[0m \u001b[90m 18 |\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 19 |\u001b[39m     test(\u001b[32m'login caminho feliz'\u001b[39m\u001b[33m,\u001b[39m \u001b[36masync\u001b[39m () \u001b[33m=>\u001b[39m {\u001b[0m\n    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 20 |\u001b[39m         \u001b[36mconst\u001b[39m \u001b[33m=\u001b[39m response \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m request(app)\u001b[33m.\u001b[39mpost(\u001b[32m'/api/login'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m    |\u001b[39m               \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 21 |\u001b[39m         \u001b[33m.\u001b[39msend({\u001b[0m\n    \u001b[0m \u001b[90m 22 |\u001b[39m             \u001b[32m\"email\"\u001b[39m\u001b[33m:\u001b[39m \u001b[32m\"eve.holt@reqres.in\"\u001b[39m\u001b[33m,\u001b[39m\u001b[0m\n    \u001b[0m \u001b[90m 23 |\u001b[39m             \u001b[32m\"password\"\u001b[39m\u001b[33m:\u001b[39m \u001b[32m\"cityslicka\"\u001b[39m\u001b[0m\n\n      \u001b[2mat constructor (\u001b[22mnode_modules/@babel/parser/src/parse-error.ts\u001b[2m:74:19)\u001b[22m\n      \u001b[2mat Parser.toParseError [as raise] (\u001b[22mnode_modules/@babel/parser/src/tokenizer/index.ts\u001b[2m:1487:19)\u001b[22m\n      \u001b[2mat Parser.raise [as unexpected] (\u001b[22mnode_modules/@babel/parser/src/tokenizer/index.ts\u001b[2m:1527:16)\u001b[22m\n      \u001b[2mat Parser.unexpected [as parseIdentifierName] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2774:12)\u001b[22m\n      \u001b[2mat Parser.parseIdentifierName [as parseIdentifier] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2751:23)\u001b[22m\n      \u001b[2mat Parser.parseIdentifier [as parseBindingAtom] (\u001b[22mnode_modules/@babel/parser/src/parser/lval.ts\u001b[2m:382:17)\u001b[22m\n      \u001b[2mat Parser.parseBindingAtom [as parseVarId] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1567:21)\u001b[22m\n      \u001b[2mat Parser.parseVarId [as parseVar] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1524:12)\u001b[22m\n      \u001b[2mat Parser.parseVar [as parseVarStatement] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1193:10)\u001b[22m\n      \u001b[2mat Parser.parseVarStatement [as parseStatementContent] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:546:21)\u001b[22m\n      \u001b[2mat Parser.parseStatementContent [as parseStatementLike] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:417:17)\u001b[22m\n      \u001b[2mat Parser.parseStatementLike [as parseStatementListItem] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:366:17)\u001b[22m\n      \u001b[2mat Parser.parseStatementListItem [as parseBlockOrModuleBlockBody] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1386:16)\u001b[22m\n      \u001b[2mat Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1359:10)\u001b[22m\n      \u001b[2mat Parser.parseBlockBody [as parseBlock] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1327:10)\u001b[22m\n      \u001b[2mat Parser.parseBlock [as parseFunctionBody] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2572:24)\u001b[22m\n      \u001b[2mat Parser.parseFunctionBody [as parseArrowExpression] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2515:10)\u001b[22m\n      \u001b[2mat Parser.parseArrowExpression [as parseAsyncArrowFromCallExpression] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:1055:10)\u001b[22m\n      \u001b[2mat Parser.parseAsyncArrowFromCallExpression [as parseCoverCallAndAsyncArrowHead] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:900:27)\u001b[22m\n      \u001b[2mat Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:766:19)\u001b[22m\n      \u001b[2mat Parser.parseSubscript [as parseSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:724:19)\u001b[22m\n      \u001b[2mat Parser.parseSubscripts [as parseExprSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:709:17)\u001b[22m\n      \u001b[2mat Parser.parseExprSubscripts [as parseUpdate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:680:21)\u001b[22m\n      \u001b[2mat Parser.parseUpdate [as parseMaybeUnary] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:642:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:385:14)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:397:23)\u001b[22m\n      \u001b[2mat Parser.parseExprOps [as parseMaybeConditional] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:352:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeConditional [as parseMaybeAssign] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:292:21)\u001b[22m\n      \u001b[2mat parseMaybeAssign (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:246:12)\u001b[22m\n      \u001b[2mat Parser.callback [as allowInAnd] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:3112:12)\u001b[22m\n      \u001b[2mat Parser.allowInAnd [as parseMaybeAssignAllowIn] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:245:17)\u001b[22m\n      \u001b[2mat Parser.parseMaybeAssignAllowIn [as parseExprListItem] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2735:18)\u001b[22m\n      \u001b[2mat Parser.parseExprListItem [as parseCallExpressionArguments] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:1035:14)\u001b[22m\n      \u001b[2mat Parser.parseCallExpressionArguments [as parseCoverCallAndAsyncArrowHead] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:877:29)\u001b[22m\n      \u001b[2mat Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:766:19)\u001b[22m\n      \u001b[2mat Parser.parseSubscript [as parseSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:724:19)\u001b[22m\n      \u001b[2mat Parser.parseSubscripts [as parseExprSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:709:17)\u001b[22m\n      \u001b[2mat Parser.parseExprSubscripts [as parseUpdate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:680:21)\u001b[22m\n      \u001b[2mat Parser.parseUpdate [as parseMaybeUnary] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:642:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:385:14)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:397:23)\u001b[22m\n      \u001b[2mat Parser.parseExprOps [as parseMaybeConditional] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:352:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeConditional [as parseMaybeAssign] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:292:21)\u001b[22m\n      \u001b[2mat Parser.parseMaybeAssign [as parseExpressionBase] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:215:23)\u001b[22m\n      \u001b[2mat parseExpressionBase (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:206:39)\u001b[22m\n      \u001b[2mat Parser.callback [as allowInAnd] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:3107:16)\u001b[22m\n      \u001b[2mat Parser.allowInAnd [as parseExpression] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:206:17)\u001b[22m\n      \u001b[2mat Parser.parseExpression [as parseStatementContent] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:636:23)\u001b[22m\n      \u001b[2mat Parser.parseStatementContent [as parseStatementLike] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:417:17)\u001b[22m\n      \u001b[2mat Parser.parseStatementLike [as parseStatementListItem] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:366:17)\u001b[22m\n      \u001b[2mat Parser.parseStatementListItem [as parseBlockOrModuleBlockBody] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1386:16)\u001b[22m\n      \u001b[2mat Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1359:10)\u001b[22m\n      \u001b[2mat Parser.parseBlockBody [as parseBlock] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1327:10)\u001b[22m\n      \u001b[2mat Parser.parseBlock [as parseFunctionBody] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2572:24)\u001b[22m\n      \u001b[2mat Parser.parseFunctionBody [as parseArrowExpression] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2515:10)\u001b[22m\n      \u001b[2mat Parser.parseArrowExpression [as parseParenAndDistinguishExpression] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:1818:12)\u001b[22m\n      \u001b[2mat Parser.parseParenAndDistinguishExpression [as parseExprAtom] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:1159:21)\u001b[22m\n      \u001b[2mat Parser.parseExprAtom [as parseExprSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:703:23)\u001b[22m\n      \u001b[2mat Parser.parseExprSubscripts [as parseUpdate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:680:21)\u001b[22m\n      \u001b[2mat Parser.parseUpdate [as parseMaybeUnary] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:642:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:385:14)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:397:23)\u001b[22m\n      \u001b[2mat Parser.parseExprOps [as parseMaybeConditional] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:352:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeConditional [as parseMaybeAssign] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:292:21)\u001b[22m\n      \u001b[2mat parseMaybeAssign (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:246:12)\u001b[22m\n      \u001b[2mat Parser.callback [as allowInAnd] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:3112:12)\u001b[22m\n      \u001b[2mat Parser.allowInAnd [as parseMaybeAssignAllowIn] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:245:17)\u001b[22m\n      \u001b[2mat Parser.parseMaybeAssignAllowIn [as parseExprListItem] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:2735:18)\u001b[22m\n      \u001b[2mat Parser.parseExprListItem [as parseCallExpressionArguments] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:1035:14)\u001b[22m\n      \u001b[2mat Parser.parseCallExpressionArguments [as parseCoverCallAndAsyncArrowHead] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:877:29)\u001b[22m\n      \u001b[2mat Parser.parseCoverCallAndAsyncArrowHead [as parseSubscript] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:766:19)\u001b[22m\n      \u001b[2mat Parser.parseSubscript [as parseSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:724:19)\u001b[22m\n      \u001b[2mat Parser.parseSubscripts [as parseExprSubscripts] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:709:17)\u001b[22m\n      \u001b[2mat Parser.parseExprSubscripts [as parseUpdate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:680:21)\u001b[22m\n      \u001b[2mat Parser.parseUpdate [as parseMaybeUnary] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:642:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnary [as parseMaybeUnaryOrPrivate] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:385:14)\u001b[22m\n      \u001b[2mat Parser.parseMaybeUnaryOrPrivate [as parseExprOps] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:397:23)\u001b[22m\n      \u001b[2mat Parser.parseExprOps [as parseMaybeConditional] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:352:23)\u001b[22m\n      \u001b[2mat Parser.parseMaybeConditional [as parseMaybeAssign] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:292:21)\u001b[22m\n      \u001b[2mat Parser.parseMaybeAssign [as parseExpressionBase] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:215:23)\u001b[22m\n      \u001b[2mat parseExpressionBase (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:206:39)\u001b[22m\n      \u001b[2mat Parser.callback [as allowInAnd] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:3107:16)\u001b[22m\n      \u001b[2mat Parser.allowInAnd [as parseExpression] (\u001b[22mnode_modules/@babel/parser/src/parser/expression.ts\u001b[2m:206:17)\u001b[22m\n      \u001b[2mat Parser.parseExpression [as parseStatementContent] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:636:23)\u001b[22m\n      \u001b[2mat Parser.parseStatementContent [as parseStatementLike] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:417:17)\u001b[22m\n      \u001b[2mat Parser.parseStatementLike [as parseModuleItem] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:354:17)\u001b[22m\n      \u001b[2mat Parser.parseModuleItem [as parseBlockOrModuleBlockBody] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1385:16)\u001b[22m\n      \u001b[2mat Parser.parseBlockOrModuleBlockBody [as parseBlockBody] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:1359:10)\u001b[22m\n      \u001b[2mat Parser.parseBlockBody [as parseProgram] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:213:10)\u001b[22m\n      \u001b[2mat Parser.parseProgram [as parseTopLevel] (\u001b[22mnode_modules/@babel/parser/src/parser/statement.ts\u001b[2m:195:25)\u001b[22m\n      \u001b[2mat Parser.parseTopLevel [as parse] (\u001b[22mnode_modules/@babel/parser/src/parser/index.ts\u001b[2m:45:10)\u001b[22m\n      \u001b[2mat parse (\u001b[22mnode_modules/@babel/parser/src/index.ts\u001b[2m:66:38)\u001b[22m\n      \u001b[2mat parser (\u001b[22mnode_modules/@babel/core/src/parser/index.ts\u001b[2m:28:19)\u001b[22m\n          at parser.next (<anonymous>)\n      \u001b[2mat normalizeFile (\u001b[22mnode_modules/@babel/core/src/transformation/normalize-file.ts\u001b[2m:50:24)\u001b[22m\n          at normalizeFile.next (<anonymous>)\n      \u001b[2mat run (\u001b[22mnode_modules/@babel/core/src/transformation/index.ts\u001b[2m:39:36)\u001b[22m\n          at run.next (<anonymous>)\n      \u001b[2mat transform (\u001b[22mnode_modules/@babel/core/src/transform.ts\u001b[2m:29:20)\u001b[22m\n          at transform.next (<anonymous>)\n","testResults":[]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Estudos\\Jest\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":["api_reqres.test.js"],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Estudos\\Jest\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"./jest/reports/22-02-2024_10-30-12","filename":"report.html","expand":true}]],"rootDir":"C:\\Estudos\\Jest","runTestsByPath":false,"seed":1133833666,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"api_reqres.test.js","testSequencer":"C:\\Estudos\\Jest\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1708608613790,"_reporterOptions":{"publicPath":"./jest/reports/22-02-2024_10-30-12","filename":"report.html","expand":true,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})