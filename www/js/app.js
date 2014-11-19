/////////////////////////////////////////////////////////////////////
// App
/////////////////////////////////////////////////////////////////////
define(["angular", "filters/index", "services/index", "directives/index", "controllers/index", "fastClick","angularRoute", "angularAnimate", "angularLoadBar", "angularGrowl", "angularDialog", "angularSweetAlert"], function (angular, filters, services, directives, controllers, fastClick) {

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

    FastClick.attach(document.body);
    
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        Device.init($window.device, $window.navigator);
    }

    $rootScope.$on('$routeChangeSuccess', function () {
        $timeout(function () {
            $window.scrollTo(0,0);
        }, 500);
    });
}]);

return app;

});
