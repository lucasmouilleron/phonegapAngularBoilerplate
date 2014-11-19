/////////////////////////////////////////////////////////////////////
// Device controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("deviceController", ["$scope","Device", function ($scope, Device) {

        $scope.device = Device.get();
        Device.getContacts().then(function(contacts) {
            $scope.contacts = contacts;
        });;
        
    }]);

});