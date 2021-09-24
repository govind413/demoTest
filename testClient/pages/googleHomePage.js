var homeCommand = {
	// INFO BLOCK i.e. presence of UI UX
	validateSearchEnginHomePage : function() {
		var current = this;
		current
			  .waitForElementVisible('@searchButton', 2000)
        .verify.elementPresent('@searchButton')
        .getValue('@searchButton', function(result){
                current.verify.equal(result.value, "Google Search")
            })
		return current;
	},

	//ACTION BLOCK
	searchCompanyName : function(browser, compName) {
    var current = this;
    current
            .verify.visible('@searchField')
            .setValue('@searchField', [compName,browser.Keys.ENTER])
            .pause(2000);
		return current;
	},

};
module.exports = {
		commands: [homeCommand],
		elements: {
			googleName : '[alt="Google"]',
            searchField: '[title="Search"]',
            searchButton:{
                selector:'//form[@role="search"]/div[1]/div[1]/div[3]/center[1]/input[1]',
                locateStrategy:'xpath'
            },
		},
};