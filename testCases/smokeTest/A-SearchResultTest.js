var searchEnginHomePage;
var searchResultPage;
var searchEnginName;

module.exports = {
	before : function(browser) {
        browser.url(browser.globals.server);

        browser.maximizeWindow();
        browser.pause(200);

        var fs = require('fs')
        var envFile = fs.createWriteStream('././testReports/testCases/smokeTest/environment.properties')

        if(browser.capabilities.browserName=='chrome'){
          envFile.write('BROWSER_NAME='+browser.capabilities.browserName+"\n"+'BROWSER_VERSION='+browser.capabilities.version+"\n"+"PLATFORM="+browser.capabilities.platform+"\n"+'TEST_EXECUTION_URL='+process.env.npm_config_serverURL+"\n")
        }else{
          envFile.write('BROWSER_NAME='+browser.capabilities.browserName+"\n"+'BROWSER_VERSION='+browser.capabilities.browserVersion+"\n"+"PLATFORM="+browser.capabilities.platformName+" "+browser.capabilities.platformVersion+"\n"+'TEST_EXECUTION_URL='+process.env.npm_config_serverURL+"\n")
        }

        //here we are selecting pages based on url passed from command line
        if(process.env.npm_config_serverURL==='https://www.google.com/'){
            searchEnginHomePage=browser.page.googleHomePage();
            searchResultPage=browser.page.googleSearchResultPage();
            searchEnginName="google";
        }else if(process.env.npm_config_serverURL==='https://www.bing.com/'){
            searchEnginHomePage=browser.page.bingHomePage();
            searchResultPage=browser.page.bingSearchResultPage();
            searchEnginName="bing";
        } 
    },

    //This test case validates if we reach at search engine page
    'a. Validate search engine home page': function (browser) {
        searchEnginHomePage
                .validateSearchEnginHomePage()   
    },

    /*This test case validates if first search result shown is as expected
    */
    'b. Validate 1st search result shown on search engine': function (browser) {
        let d=new Date().getTime();

        searchEnginHomePage
            .searchCompanyName(browser,browser.globals.searchKeyword); 
        searchResultPage  
            .validateLandedOnSearchResult()  
            .validateFirstLink(browser.globals.firstSearchResultText)

        browser.saveScreenshot('./testOutputFiles/screenshots/'+d+"_"+searchEnginName+'.png')
    },

	after : function(browser) {
        browser.end();
    }
}