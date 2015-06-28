(function(){

	angular.module("person-directives", []).directive("personListing", function(){
		return {
			restrict: "E",
			templateUrl: "../html/personListing.html",
			scope: {},
			controller: "PersonListingCntrl"
		};	
	});

})();