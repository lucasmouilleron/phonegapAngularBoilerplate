/////////////////////////////////////////////////////////////////////
// Device service
/////////////////////////////////////////////////////////////////////
define(["./module", "tools"], function (services, tools) {

    /////////////////////////////////////////////////////////////////////
    services.factory("Device", ["$q", function($q) {
        var device = {};
        return {

            init: function(_device, _navigator) {
                device = _device;
                device.navigator = _navigator;
            },

            getContacts: function() {
                var deferred = $q.defer();
                device.navigator.contacts.find(["*"], function(contacts) {
                    deferred.resolve(contacts);
                }, function(error) {
                    alert(error);
                }, {
                    filter:"",
                    multiple: true
                });
                return deferred.promise;
            },

            get: function() {
                return device;
            }
        }
    }]);

});