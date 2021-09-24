var searchResultCommand = {
	// INFO BLOCK i.e. presence of UI UX
	validateLandedOnSearchResult : function() {
		var current = this;
		current
			  .waitForElementVisible('@msLogoLinkTopLeft', 2000)
        .verify.elementPresent('@msLogoLinkTopLeft')
        .getElementProperty('@msLogoLinkTopLeft','title', function(result){
                current.verify.equal(result.value, "Back to Bing search")
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
			      msLogoLinkTopLeft : '[aria-label="Go to Bing homepage"]',
            firstSearchResult:{
                selector:'//ol[@id="b_results"]/li[1]/h2/a',
                locateStrategy:'xpath'
            },
		},
};