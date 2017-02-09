angular
  .module('app')
  .component('fountainForm', {
    templateUrl: 'app/store/form.html',
    controller: FormCtrl
  });
  function FormCtrl($scope){
    $scope.name = true;
    $scope.weight = true;
    $scope.age = true;
    $scope.name = function(DogName){
      /*
        - Maybe a back button or side options
        - Remove button add button
        PROBLEM
          - Watch the if else changing makes the if else change
      */
      // console.log(DogName); WORKS
      console.log(DogName);
      $scope.name = false;
      $scope.weight = true;

    }
    $scope.age = function(DogName){

      console.log(DogName);
    }
    $scope.weight = function(DogName){
      console.log(DogName);
    }

  }
