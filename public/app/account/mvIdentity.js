angular.module('app').factory('mvIdentity', function($window, mvUser) {

    var currentUser;

    if(!!$window.bootstrappedUserObject) {
        currentUser = new mvUser();
        angular.extend(currentUser = $window.bootstrappedUserObject);
        console.log("currentUser");
        console.log(currentUser);
    }

    return {
        currentUser: currentUser,
        isAuthenticated: function() {
            return !!this.currentUser;
        },
        isAuthorized: function(role){
        return !!this.currentUser && this.currentUser.roles.indexOf(role) > -1;
    }
    }
})