angular.module("isolate", [])
	.directive("jaysDirective", function(){
		return {
			restrict: "E",
			templateUrl: "inputs.html",
			scope: {
				blah:       "@", // no capitals or this does not work
				equals2:    "="
			}
		};
	});