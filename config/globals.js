console.log("Test execution started on URL: "+process.env.npm_config_serverURL);

module.exports = {
    server:process.env.npm_config_serverURL,
    //server: 'https://www.google.com/',
    searchKeyword:'Facebook',
    firstSearchResultText:'Facebook - Log In or Sign Up',
    abortOnAssertionFailure : false,
    globalWaitTimeInMiliSec : 120000,
};