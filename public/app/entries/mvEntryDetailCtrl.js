angular.module('app').controller('mvEntryDetailCtrl', function($scope, mvCachedEntries, $routeParams){
    mvCachedEntries.query().$promise.then(function(collection){
        collection.forEach(function(entry){
            if(entry._id === $routeParams.id){
                $scope.entry = entry;
            }
        })
    })
});