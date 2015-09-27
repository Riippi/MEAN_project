angular.module('app').factory('mvEntry', function($resource){
    var EntryResource = $resource('/api/entries/:_id', {_id: "@id"}, {
        update: { method: 'PUT', isArray: false }
    });

    return EntryResource;
});