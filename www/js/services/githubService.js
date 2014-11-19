/////////////////////////////////////////////////////////////////////
// Github service
/////////////////////////////////////////////////////////////////////
define(["./module", "tools"], function (services, tools) {

    /////////////////////////////////////////////////////////////////////
    services.factory("Github", ["$http", "$q", "growl", function($http, $q, growl) {
        var repos = {};
        return {
            all: function(username) {
                var deferred = $q.defer();
                if(tools.isEmpty(repos)) {
                    growl.info("Loading repositories from REST");
                    $http.get("https://api.github.com/users/"+username+"/repos").success(function(data, status, headers, config) {
                        growl.success("Repositories loaded from REST");
                        repos = data;
                        deferred.resolve(repos);
                    });
                }
                else {
                    growl.success("Repositories loaded from cache");
                    deferred.resolve(repos);
                }
                return deferred.promise;
            }
        }
    }]);

});