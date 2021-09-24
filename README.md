*******Test Description:********
- launching a browser as mentioned in command line with "--env"
- Firing desired url mentioned in Command line with "--serverURL"
- validate user landed at search engin home page
- enter a search keyword
- validate the first search result shown and assert
- Exit

Note : desired browser i.e. chrome,firefox,etc or desired url i.e. bing, google etc can be given from command line, code will able to handle it

******prerequisite before start execution****
- "node" should be installed in machine (v10.18.1 or higher)
- "npm" should be installed in machine (6.13.4 or higher)
- Browsers should be installed lile chrome,firefox,etc

****Test Execution done in two way:****

**Method1:** Execute below command one by one in command line
- npm install
- npm run getLatestBrowserDriver
- npm run demoTests --serverURL="https://www.google.com/" --env "chrome"

**Method2:**
****IF in Mac OS then fire below command****
- ./testScript/macOS/run_test.sh
****IF in Windows OS then fire below command****
- ./testScript/windows/run_test.bat

**********For Report******************
- Fire in commandline : "allure generate testReports/testCases/smokeTest --clean -o allure-report"
- Then At root folder 'allure-report' folder will be created -> Open 'index.html'

*******Test Execution Evidence screenshot******
- Go to 'testOutputFiles/screenshots/*'






******Folder Structure understanding*********
1. config
    - global.js -> for having input files
    - nightwatch.conf.js ->custom nightwatch config file which calls main nightwatch config file
    - nightwatch.json -> nightwatch config file

2. lib
    - It will have drivers and server

3. node_modeles
    - This will be visible after running "npm i"

4. testCases
    - smokeTest -> testcases related to smoke are grouped here
    - sanityTest -> testcases related to sanity are grouped
    - regressiontest -> testcases related to regression are group

5. testClient
    - Pages -> As we follow Page object model(POM), pages here

6. testOutputFiles
    - screenshot -> Taken screenshor for evidence

7. testReports
    - Nightwatch creates .xml reports under this folder

8. testScript
    - macOS->run_test.sh -> for running all command line together easy duing jenkins
    - windows->run_test.bat -> for running all command line together easy duing jenkins

9. testUtils
    - If we wanted to use any common utility function, can be written here for better code reusability and maintainability

10. nightwatch.js -> test runner
11. package.json -> running script and dev/global dependency      packages
12. allure-report
    - index.html -> It has sample report (actually not needed to checkin this but just to show in demo it added here)

