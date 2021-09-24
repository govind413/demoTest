module.exports = (function (settings) {
 
  //Setting chromedriver path at runtime to run on different architectures
      
  if (process.platform === "darwin") {
        if(settings.test_settings.chrome.desiredCapabilities.browserName=='chrome'){
              settings.selenium.cli_args["webdriver.chrome.driver"] = "./node_modules/chromedriver/lib/chromedriver/chromedriver";
        }
        if(settings.test_settings.firefox.desiredCapabilities.browserName=='firefox'){
              settings.selenium.cli_args["webdriver.gecko.driver"] = "./node_modules/geckodriver/geckodriver";
        }
        if(settings.test_settings.safari.desiredCapabilities.browserName=='safari'){
              settings.selenium.cli_args["webdriver.safari.driver"] = "./lib/geckodriver_mac"; 
        }
  settings.selectKeyboard="macOS";
  }
  else if (process.platform === "win32" || process.platform === "win64") {
        if(settings.test_settings.chrome.desiredCapabilities.browserName=='chrome'){
              settings.selenium.cli_args["webdriver.chrome.driver"] = "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe";
        }if(settings.test_settings.firefox.desiredCapabilities.browserName=='firefox'){
              settings.selenium.cli_args["webdriver.gecko.driver"] = "./node_modules/geckodriver/geckodriver.exe";
        }if(settings.test_settings.edge.desiredCapabilities.browserName=='MicrosoftEdge'){
              settings.selenium.cli_args["webdriver.edge.driver"] = "./lib/msedgedriver.exe";    
        }
        settings.selectKeyboard="windows";
        }  
  
  settings.test_settings.default.launch_url='https://www.google.com/';
  
  //for Running test in parallel if true
  settings.test_workers.enabled=false;
  
  console.log("parallel execution enabled : "+settings.test_workers.enabled);
  
  return settings;
  
  })(require('./nightwatch.json'));  