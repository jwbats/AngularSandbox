(function(){

	angular.module("person-directives", []).directive("personListing", function(){
		return {
			restrict: "E",
			templateUrl: "../personListing.html",
			scope: {},
			controller: "PersonListingCntrl"
		};	
	});

})();