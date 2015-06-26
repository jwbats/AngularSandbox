(function(){

	angular.module("SandboxApp").controller("PersonListingCntrl", function($scope){
		$scope.title = "Person Listing";
				
		$scope.persons = [
			{ FirstName: "Joe",   LastName: "Joeington" },
			{ FirstName: "Eddy",  LastName: "Edzma" },
			{ FirstName: "Larry", LastName: "Laffer" },
			{ FirstName: "Jay",   LastName: "Bats" }
		];

		$scope.fullname = function(person){
			return person.FirstName + " " + person.LastName;
		};
	});

})();