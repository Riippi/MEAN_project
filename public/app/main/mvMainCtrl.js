angular.module('app').controller('mvMainCtrl', function($scope, mvCachedEntries) {
    $scope.entries = mvCachedEntries.query();
});

