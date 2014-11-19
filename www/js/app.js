/////////////////////////////////////////////////////////////////////
// App
/////////////////////////////////////////////////////////////////////
define(["angular", "filters/index", "services/index", "directives/index", "controllers/index", "angularRoute", "angularAnimate", "angularLoadBar", "angularGrowl", "angularDialog", "angularSweetAlert"], function (angular, filters, services, directives, controllers) {

/////////////////////////////////////////////////////////////////////
var app = angular.module("app", ["app.filters","app.services","app.directives","app.controllers", "ngRoute", "ngAnimate", "angular-loading-bar", "angular-growl", "ngDialog","oitozero.ngSweetAlert"]);

/////////////////////////////////////////////////////////////////////
app.config(["growlProvider", function(growlProvider) {
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.globalPosition("bottom-right");
    growlProvider.onlyUniqueMessages(false);
}]);

/////////////////////////////////////////////////////////////////////
app.config(["$locationProvider", function($location) {
    $location.hashPrefix("!");
}]);

/////////////////////////////////////////////////////////////////////
app.run(["$rootScope", "$timeout", "$window", "Device", function ($rootScope, $timeout, $window, Device) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        Device.set($window.device);
    }

    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {JSON.stringify(device)
            $window.scrollTo(0,0);
        }, 500);
    });
}]);

return app;

});
