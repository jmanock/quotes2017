angular
  .module('app')
  .component('app', {
    templateUrl: 'app/main.html',
    controller:SomethingCtrl
  });

  function SomethingCtrl($scope, $log){
    $scope.something = function(){
      console.log('no this shit is fine fuck the errors');
    }

  }
