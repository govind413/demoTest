var homeCommand = {
	// INFO BLOCK i.e. presence of UI UX
	validateSearchEnginHomePage : function() {
		var current = this;
		current
			  .waitForElementVisible('@imageLinkOnTop', 2000)
        .verify.elementPresent('@imageLinkOnTop')
        .getText('@imageLinkOnTop', function(result){
                current.verify.equal(result.value, "Images")
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
						msBingLogo : '[id="bLogo"]',
						searchField: '[name="q"]',
						imageLinkOnTop:{
							selector:'//li[@id="images"]/a',
							locateStrategy:'xpath'
						}
		},
};