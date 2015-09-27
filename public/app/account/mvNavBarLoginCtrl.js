angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {

    $scope.identity = mvIdentity;
    $scope.signin = function(username, password) {
        mvAuth.authenticateUser(username, password).then(function(success) {

            if(success) {
                mvNotifier.notify('You have siccessfully signed in!');
            } else {
                mvNotifier.notify('Username/password incorrect.');
            }
        });
    }


    $scope.signout = function() {
        mvAuth.logoutUser().then(function() {
            $scope.username = "";
            $scope.password = "";
            mvNotifier.notify("You have signed out!");
            $location.path('/');  // move the user back to the mainpage

        })
    };

});
