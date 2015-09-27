angular.module('app').controller('mvEntryListCtrl', function($scope, mvCachedEntries){
    $scope.entries = mvCachedEntries.query();

    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value: "published", text: "Sort by Publish Date"}];

    $scope.sortOrder = $scope.sortOptions[0].value;
});