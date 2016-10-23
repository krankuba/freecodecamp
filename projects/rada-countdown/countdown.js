(function() {

    var app = angular.module("radaCountdown", []);

    var TimeController = function($scope) {

        $scope.deadline = 'January 23 2017 12:00:00 GMT+0200';

        var getTimeRemaining = function(endtime) {
            $scope.t = Date.parse(endtime) - Date.parse(new Date());
            $scope.seconds = Math.floor(($scope.t / 1000) % 60);
            $scope.minutes = Math.floor(($scope.t / 1000 / 60) % 60);
            $scope.hours = Math.floor(($scope.t / (100 * 60 * 60)) % 24);
            $scope.days = Math.floor($scope.t / (1000*60*60*24));
            $scope.$apply();

            return {
                'total': $scope.t,
                 'days': $scope.days,
                'hours': $scope.hours,
              'minutes': $scope.minutes,
              'seconds': $scope.seconds
            };
        };

        var initializeClock = function(id, endtime) {
            var timeinterval = setInterval(function() {
                var count = getTimeRemaining(endtime);
                if(count.total<=0){
                    clearInterval(timeinterval);
                };
            },1000);
        };

        initializeClock('clockdiv', $scope.deadline);
    };

    app.controller("TimeController", TimeController);

}());
