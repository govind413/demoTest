var searchResultCommand = {
	// INFO BLOCK i.e. presence of UI UX
	validateLandedOnSearchResult : function() {
		var current = this;
		current
			  .waitForElementVisible('@googleLogoLinkTopLeft', 2000)
        .verify.elementPresent('@googleLogoLinkTopLeft')
        .getElementProperty('@googleLogoLinkTopLeft','title', function(result){
                current.verify.equal(result.value, "Go to Google Home")
            })
		return current;
	},

	//ACTION BLOCK
	validateFirstLink : function(firstSearchResultText) {
    var current = this;
    current
            .verify.visible('@firstSearchResult')
            .getText('@firstSearchResult', function(result){
              current.verify.equal(result.value,firstSearchResultText)
          }) 
		return current;
	},

};
module.exports = {
		commands: [searchResultCommand],
		elements: {
			      googleLogoLinkTopLeft : '[id="logo"]',
            firstSearchResult:{
                selector:'(//div[@id="search"]//child::h3)[1]',
                locateStrategy:'xpath'
            },
		},
};