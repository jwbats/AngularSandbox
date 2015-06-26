(function(){

	angular.module("SandboxApp").controller("MathCntrl", function($scope){
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

})();