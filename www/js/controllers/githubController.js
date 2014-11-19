/////////////////////////////////////////////////////////////////////
// Github controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("githubController", ["$scope","$q","$routeParams", "Github", function ($scope, $q, $routeParams, Github) {
        
        $scope.githubUser = $routeParams.anId;
        Github.all($scope.githubUser).then(function(repos) {
            $scope.theRepos = repos;
        });
        
    }]);

});