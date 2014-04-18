(function() {
    var MyController = function($scope, $timeout) {
        
        $scope.gridData = new kendo.data.DataSource({
            data: [{a: 1, b: 2},{a: 7, b: 5},{a: 4, b: 4},
                   {a: 13, b: 6},{a: 0, b: 12},{a: 7, b: 15},
                   {a: 7, b: 9},{a: 7, b: 3},{a: 6, b: 99}]
        });
        
        $scope.gridOptions = {
            columns: [
                { field: "a", title: "A Field" }, 
                { field: "b", title: "B Field" }
            ],
            filterable: false,
            groupable: true,
            sortable: false
        };
        
        $scope.printGrid = function() {
            // get grid content and write it in a new window
            
            
            // It does not matter whether the grid html is exported or something else
            //var html = $scope.grid.element.clone()[0].outerHTML;
            var html = "test test test";
            
            var win = window.open(), doc = win.document.open();
            doc.write(html);
            doc.close();
            
            // raise print automatically
            // wrap in $timestamp to avoid blocking call
            // that stalls the entire application
            // as per: https://github.com/angular/angular.js/issues/1204
            
            
            // BUT: It does not work with kendo widgets,
            // somehow the app is still blocked when
            // used with kendo widgets
            
            $timeout(function () {
                win.print();
            });
        };
        
        $scope.buttonClick = function() {
            $scope.gridOptions.filterable = !$scope.gridOptions.filterable;
            $scope.gridOptions.groupable = !$scope.gridOptions.groupable;
            $scope.gridOptions.sortable = !$scope.gridOptions.sortable;
        }
    };
    angular.module('app').controller('MyController', MyController);
}());