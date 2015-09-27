angular.module('app').factory('mvCachedEntries', function(mvEntry){
    var entryList;

    return {
        query: function(){
            if(!entryList){
                entryList = mvEntry.query();
            }
            return entryList;
        }
    }
})