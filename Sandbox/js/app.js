(function(){

	var app = angular.module("SandboxApp", ["person-directives"]);

	app.controller("MathCntrl", function($scope){
		$scope.A = 5;
		$scope.B = 10;

		$scope.mul = function(){
			return this.A * this.B;
		};

		$scope.div = function(){
			return this.A / this.B;
		};

		$scope.add = function(){
			return parseInt(this.A) + parseInt(this.B);
		};

		$scope.sub = function(){
			return this.A - this.B;
		};
	});

	app.controller("StringCntrl", function($scope){
		$scope.str = "I am a string.";

		$scope.toUpper = function(){
			return this.str.toUpperCase();
		};

		$scope.toLower = function(){
			return this.str.toLowerCase();
		};
	});

})();