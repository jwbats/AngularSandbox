angular.module("isolate", [])
    .directive("myDirective", function(){
        return {
            template:
                "<label>@</label> <input value='{{ at }}' />" +
                "<label>=</label> <input ng-model='equals' />" +
                "<label>&</label> <input type='button' ng-click='ampersand()' value='Btn' />",
            scope: {
                at:        "@",
                equals:    "=",
                ampersand: "&"
            }
        };
    })
    .directive("jaysDirective", function(){
        return {
            template:
                "<label>@</label> <input value='{{at2}}' />" +
                "<label>=</label> <input ng-model='equals2' />" +
                "<label>&</label> <input type='button' value='Click me' ng-click='ampersand2()' />",
            scope: {
                at2:        "@",
                equals2:    "=",
                ampersand2: "&"
            }
        };
    });
