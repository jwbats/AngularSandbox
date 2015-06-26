(function(){

	angular.module("SandboxApp").controller("StringCntrl", function($scope){
		$scope.str = "I am a string.";

		$scope.toUpper = function(){
			return this.str.toUpperCase();
		};

		$scope.toLower = function(){
			return this.str.toLowerCase();
		};
	});

})();