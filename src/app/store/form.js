angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){
    $scope.next = function(DogName){
      /*
        - Maybe a back button or side options
        - How about a counter on clicks?
        PROBLEM
          - Watch the if else changing makes the if else change
      */
      // console.log(DogName); WORKS

      var clicks = 0;
      clicks = clicks+1;
      console.log(clicks);



    }

  }
