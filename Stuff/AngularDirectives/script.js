(function(angular) {
    'use strict';
    angular.module('docsTabsExample', [])
        .directive('myTabs', function() {
            return {
                restrict: 'E',
                transclude: true,
                scope: {},
                controller: function($scope) {
                    $scope.panes = [];

                    $scope.select = function(pane) {
                        angular.forEach($scope.panes, function(pane) {
                            pane.selected = false;
                        });
                        pane.selected = true;
                    };

                    this.addPane = function(pane) {
                        pane.selected = false;

                        $scope.panes.push(pane);

                        $scope.select(pane);
                    };
                },
                templateUrl: 'my-tabs.html'
            };
        })
        .directive('myPane', function() {
            return {
                require: '^myTabs',
                restrict: 'E',
                transclude: true,
                scope: {
                    title: '@'
                },
                link: function(scope, element, attrs, tabsCtrl) {
                    tabsCtrl.addPane(scope);
                },
                templateUrl: 'my-pane.html'
            };
        });
})(window.angular);
