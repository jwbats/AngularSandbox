angular.module("isolate", [])
	.directive("jaysDirective", function(){
		return {
			restrict: "E",
			templateUrl: "inputs.html",
			scope: {
				at2:        "@",
				equals2:    "=",
				ampersand2: "&"
			}
		};
	});
