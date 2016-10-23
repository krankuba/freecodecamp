var countController = function($scope, $interval) {
    $scope.title = 'Pomodoro Clock';
    $scope.clockTimeMin = 25;
    $scope.pauseTimeMin = 5;
    $scope.countdown = $scope.clockTimeMin * 60;

    $scope.startClock = function() {
      if(!$scope.counterOn) {
        $scope.countdown = $scope.clockTimeMin * 60;
        $scope.session = true;
        console.log('starting...' + ' $scope.session: ' + $scope.session);
        var timer = setInterval(function() {
            $scope.counterOn = true;
            $scope.countdown--;
            $scope.countdownMin = Math.floor($scope.countdown / 60);
            $scope.countdownSec = $scope.countdown - ($scope.countdownMin * 60);
            $scope.$apply(); // << WITHOUT THIS THE COUNTDOWN WILL SHOW IN THE CONSOLE LOG, BUT NEVER ON THE PAGE
            console.log($scope.countdown);
            if($scope.countdown < 1) {
                if($scope.session) {
                    $scope.countdown = $scope.pauseTimeMin * 60;
                    $scope.session = false;
                } else {
                    $scope.countdown = $scope.clockTimeMin * 60;
                    $scope.session = true;
                };
            };
            $scope.stopClock = function() {
                console.log('countdown stopped');
                clearInterval(timer);
                $scope.counterOn = false;
            };
        },1000);
      };
    };



    $scope.doReset = function() {
        console.log('resetting...');
        if($scope.session) {
            $scope.countdown = $scope.clockTimeMin * 60;
            $scope.session = true;
        } else {
            $scope.countdown = $scope.pauseTimeMin * 60;
            $scope.session = false;
        };
    };

    $scope.clockUp = function() {
        if($scope.clockTimeMin < 60) {
            $scope.clockTimeMin++;
        };
    };

    $scope.clockDown = function() {
        if($scope.clockTimeMin > 1) {
            $scope.clockTimeMin--;
        };
    };
    $scope.pauseUp = function() {
        if($scope.pauseTimeMin < 10) {
            $scope.pauseTimeMin++;
        };
    };

    $scope.pauseDown = function() {
        if($scope.pauseTimeMin > 1) {
            $scope.pauseTimeMin--;
        };
    };

};
  /*var doWork = function() {
      console.log('working...');
    };
    setInterval(doWork, 2000);*/
